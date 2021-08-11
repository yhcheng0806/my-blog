import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import * as Api from "../../api/models/posts";

import Share from "../../components/Share";
import Post from "../../components/Post";
import { HomeWrapper, HomeContainer } from "./styles";

const Home = () => {
  const { userInfo } = useSelector((state) => state.user);

  const [posts, setPosts] = useState([]);
  const [shareRefresh, setShareRefresh] = useState(false);

  const getPosts = async () => {
    const res = await Api.getAllPost();
    setPosts(
      res?.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };

  useEffect(() => {
    getPosts();
  }, [shareRefresh]);

  return (
    <HomeWrapper>
      <Share shareRefresh={shareRefresh} setShareRefresh={setShareRefresh} />
      <HomeContainer>
        {posts.map((post) => (
          <Post key={post._id} post={post} userInfo={userInfo} />
        ))}
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
