import React, { useState, useEffect } from "react";

import * as Api from "../../api/models/posts";

import Share from "../../components/Share";
import Posts from "../../components/Posts";
import { HomeWrapper, HomeContainer } from "./styles";

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [shareRefresh, setShareRefresh] = useState(false);

  const getPosts = async () => {
    const res = await Api.getAllPost();
    console.log(res,'---res---')
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
        <Posts posts={posts} />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
