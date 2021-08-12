import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "antd";

import moment from "moment";

import * as userApi from "../../api/models/users";
import * as postApi from "../../api/models/posts";

import noAvatar from "../../assets/images/noAvatar.png";

import {
  Wrapper,
  Container,
  PostTop,
  PostTopLeft,
  Avatar,
  PostDate,
  PostTopRight,
  PostCenter,
  PostText,
  PostImg,
} from "./styled";

const PostInfo = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { userInfo } = useSelector((state) => state.user);
  const params = useLocation().pathname.split("/");
  const postId = params[params.length - 1];
  const history = useHistory();

  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);

  const toUserPage = () => {
    if (user.username === userInfo.username || user._id === userInfo._id) {
      history.push("/user/" + user.username);
      return;
    }
    history.push("/other/" + user.username);
  };
  const getUser = async () => {
    // const res = await userApi.getUser(post.userId);
    // setUser(res.data);
  };

  const getPost = async () => {
    const res = await postApi.getPost(postId);
    const userRes = await userApi.getUser(res?.data.userId);
    console.log(res, userRes, "--res");

    setPost(res.data);
    setUser(userRes.data);
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Wrapper>
      <Container>
        <PostTop>
          <PostTopLeft>
            <Avatar onClick={toUserPage} src={user?.avatar || noAvatar} />
            <strong>{user?.username}</strong>
            <PostDate>
              {moment(post?.createdAt).format("YYYY-MM-DD hh:mm")}
            </PostDate>
          </PostTopLeft>
          <PostTopRight></PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>{post?.desc}</PostText>
          {post?.photo && <Image width="100%" src={PF + post.photo} />}
        </PostCenter>
      </Container>
    </Wrapper>
  );
};
export default PostInfo;
