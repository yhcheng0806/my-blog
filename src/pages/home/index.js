import React from "react";
import Icon from '../../components/common/Icon'
import Card from '../../components/Card'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  General,
  Main,
  Tabs,
  ArticleList
} from "./styles"

const Home = () => {

  return (
    <Container >
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        <EditButton></EditButton>

        <span>yhcheng0806</span>
        <span>18892083800@163.com</span>

        <ul>
          <li>
            <Icon type='icon-location' />shanXi xi'an
          </li>
          <li>
            <Icon type='icon-cake' />1995-11-28
          </li>
        </ul>

        <General>
          <span>
            articles<strong>0</strong>
          </span>
          <span>
            likes<strong>0</strong>
          </span>
        </General>
      </ProfileData>

      <Main>
        <Tabs>
          article
        </Tabs>
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
