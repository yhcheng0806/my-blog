import React, { useState, useEffect } from "react";
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

  return (
    <PostWrapper>
      <PostTop>
        <PostTopLeft>
          <Avatar src={user?.avatar || noAvatar} />
          <strong>{user?.username}</strong>
          <PostDate>{format(post.createdAt, "zh_CN")}</PostDate>
        </PostTopLeft>
        <PostTopRight></PostTopRight>
      </PostTop>
      <PostCenter>
        <PostText>{post?.desc}</PostText>
        {/* {post?.photo && <PostImg />} */}
        <PostImg src={PF + "微信图片_20200310184635.jpg"} />
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
