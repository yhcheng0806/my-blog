import React from "react";
import Icon from "../../components/common/Icon";
import Card from "../../components/Card";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  General,
  Main,
  Tabs,
  ArticleList,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        <EditButton></EditButton>

        <span>yhcheng0806</span>
        <span>18892083800@163.com</span>

        <ul>
          <li>
            <Icon type="icon-location" />
            陕西 西安
          </li>
          <li>
            <Icon type="icon-cake" />
            1995-11-28
          </li>
        </ul>

        <General>
          <span>
            内容<strong>0</strong>
          </span>
          <span>
            点赞<strong>0</strong>
          </span>
        </General>
      </ProfileData>

      <Main>
        <Tabs>内容</Tabs>
        <ArticleList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ArticleList>
      </Main>
    </Container>
  );
};

export default Home;
