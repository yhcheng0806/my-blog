import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import * as PostApi from "../../api/models/posts";
import * as UserApi from "../../api/models/users";
import * as CommonApi from "../../api/models/common";

import Posts from "../../components/Posts";
import Icon from "../../components/common/Icon";

import * as UserActions from "../../actions/user";

import noAvatar from "../../assets/images/noAvatar.png";
import NoCover from "../../assets/images/noCover.png";

import {
  UserWrapper,
  TopContainer,
  CoverImg,
  Avatar,
  FollowButton,
  UserInfo,
  Name,
  Desc,
  Detail,
  General,
  CenterContainer,
} from "./styles";

const User = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { userInfo } = useSelector((state) => state.user);
  const history = useHistory();
  const params = useLocation().pathname.split("/");
  const username = params[params.length - 1];
  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState("");
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [isFollow]);

  const fetchUser = async () => {
    const userRes = await UserApi.getUser(username);
    setUser(userRes.data);
    console.log(userInfo, "--userInfo---");
    const posts = await PostApi.getSelfPosts({
      userId: userRes.data?._id,
    });
    setPosts(
      posts?.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };

  const handleFollowUser = async (state) => {
    dispatch(UserActions[state ? "unfollow" : "follow"](user._id));

    await UserApi[state ? "unfollowUser" : "followUser"](user._id, {
      userId: userInfo._id,
    });
    setIsFollow(!isFollow);
  };

  const logout = () => {
    dispatch(UserActions.logout(history));
  };

  const beforeUpload = async (file) => {
    const fileName = Date.now() + file.name;
    const formData = new FormData();
    formData.append("name", fileName);
    formData.append("file", file);

    await CommonApi.upload(formData);
    setImgUrl(fileName);
    console.log('---1----')

    await UserApi.updateUser(user._id, {
      userId: userInfo._id,
      avatar: fileName,
    });
  };

  return (
    <UserWrapper>
      <TopContainer>
        <CoverImg src={NoCover} />
        <ImgCrop rotate>
          <Upload
            name="avatar"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
          >
            <Avatar
              className={"default"}
              src={
                imgUrl
                  ? PF + imgUrl
                  : user?.avatar
                  ? PF + user?.avatar
                  : noAvatar
              }
            />
          </Upload>
        </ImgCrop>

        <Icon className="logoutIcon" type="icon-exit" onClick={logout} />
        {/* {userInfo._id !== user?._id && (
          <FollowButton
            className={user?.fanList.includes(userInfo._id) && "active"}
            onClick={() =>
              handleFollowUser(user?.fanList.includes(userInfo._id))
            }
          >
            {user?.fanList.includes(userInfo._id) ? "取消关注" : "关注"}
          </FollowButton>
        )} */}
      </TopContainer>
      <UserInfo>
        <Name>{user?.name || user?.username}</Name>
        {user?.describe && <Desc>{user.describe}</Desc>}
        <Detail>
          {user?.area && (
            <div>
              <Icon type="icon-location" />
              {user.area}
            </div>
          )}
          {user?.birthday && (
            <div>
              <Icon type="icon-cake" />
              {user.birthday}
            </div>
          )}
        </Detail>
        {user && posts && (
          <General>
            <span>
              内容<strong>{posts?.length}</strong>
            </span>
            <span>
              粉丝<strong>{user?.fanList.length}</strong>
            </span>
            <span>
              关注<strong>{user?.followList.length}</strong>
            </span>
          </General>
        )}
      </UserInfo>
      <CenterContainer>
        <Posts posts={posts} userInfo={user} />
      </CenterContainer>
    </UserWrapper>
  );
};

export default User;
