import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { format } from "timeago.js";

import * as userApi from "../../api/models/users";
import * as postApi from "../../api/models/posts";

import Icon from "../common/Icon";
import noAvatar from "../../assets/images/noAvatar.png";

import {
  PostWrapper,
  PostTop,
  PostTopLeft,
  Avatar,
  PostDate,
  PostTopRight,
  PostCenter,
  PostText,
  PostImg,
  PostBottom,
  Icons,
  Status,
} from "./styles";

const Post = ({ post, userInfo }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(userInfo._id));
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, [post._id]);

  const getUser = async () => {
    const res = await userApi.getUser(post.userId);
    setUser(res.data);
  };

  const handleLike = async () => {
    const res = await postApi.likePost(post._id, {
      userId: userInfo._id,
    });

    setLike(res.data.like ? like + 1 : like - 1);

    setIsLiked(res.data.like);
  };

  const toUserPage = () => {
    if (user.username === userInfo.username || user._id === userInfo._id) {
      history.push("/user/" + user.username);
      return;
    }
    history.push("/other/" + user.username);
  };

  const toInfoPage = () => {
    history.push("/postInfo/" + post?._id);
  };

  return (
    <PostWrapper>
      <PostTop>
        <PostTopLeft>
          <Avatar
            onClick={toUserPage}
            src={user?.avatar ? PF + user.avatar : noAvatar}
          />
          <strong>{user?.username}</strong>
          <PostDate>{format(post.createdAt, "zh_CN")}</PostDate>
        </PostTopLeft>
        <PostTopRight></PostTopRight>
      </PostTop>
      <PostCenter onClick={toInfoPage}>
        <PostText>{post?.desc}</PostText>
        {post?.photo && <PostImg src={PF + post.photo} />}
      </PostCenter>
      <PostBottom>
        <Icons>
          <Status>
            <Icon type="icon-chat" />0
          </Status>
          <Status>
            <Icon type="icon-share" />0
          </Status>
          <Status className={isLiked && "active"} onClick={handleLike}>
            <Icon type="icon-thumb" />
            {like}
          </Status>
        </Icons>
      </PostBottom>
    </PostWrapper>
  );
};

export default Post;
