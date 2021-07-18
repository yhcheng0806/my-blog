import React from 'react';
import StickyBox from 'react-sticky-box';

import Icon from '../common/Icon'

import {
  Container,
  SearchWrapper,
  SearchInput,
  Body,
} from './styles';

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <Icon type='icon-search' />
        <SearchInput placeholder="发现内容" />
      </SearchWrapper>

      <StickyBox>
        <Body>
        <div></div>
        <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
