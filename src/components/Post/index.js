import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


import { format } from "timeago.js";

import * as Api from "../../api/models/posts";

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

const Post = ({ post }) => {
  const { userInfo } = useSelector((state) => state.user);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(userInfo._id));



  const handleLike = async () => {
    const res = await Api.likePost(post._id, {
      userId: userInfo._id,
    });

    setLike(res.data.like ? like + 1 : like - 1);

    setIsLiked(res.data.like);
  };

  const toUserPage = ({ username, _id }) => {
    if (username === userInfo.username || _id === userInfo._id) {
      history.push("/user/" + username);
      return;
    }
    history.push("/other/" + username);
  };

  const toInfoPage = () => {
    history.push("/postInfo/" + post?._id);
  };

  return (
    <PostWrapper>
      <PostTop>
        <PostTopLeft>
          <Avatar
            onClick={() => toUserPage(post)}
            src={post?.avatar ? PF + post.avatar : noAvatar}
          />
          <strong>{post?.name || post?.username}</strong>
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
