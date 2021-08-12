import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as PostApi from "../../api/models/posts";
import * as UserApi from "../../api/models/users";
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
  const { userInfo } = useSelector((state) => state.user);
  const params = useLocation().pathname.split("/");
  const username = params[params.length - 1];
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

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

  useEffect(() => {
    fetchUser();
  }, [isFollow]);

  return (
    <UserWrapper>
      <TopContainer>
        <CoverImg src={NoCover} />
        <Avatar className={"default"} src={noAvatar} />
        {userInfo._id !== user?._id && (
          <FollowButton
            className={user?.fanList.includes(userInfo._id) && "active"}
            onClick={() =>
              handleFollowUser(user?.fanList.includes(userInfo._id))
            }
          >
            {user?.fanList.includes(userInfo._id) ? "取消关注" : "关注"}
          </FollowButton>
        )}
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
        <Posts posts={posts} userInfo={userInfo} />
      </CenterContainer>
    </UserWrapper>
  );
};

export default User;
