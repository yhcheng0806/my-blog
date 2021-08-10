import React from "react";

import Icon from "../common/Icon";

import { Container, SearchWrapper, SearchInput, Body } from "./styles";

const RightBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <Icon type="icon-search" />
        <SearchInput placeholder="发现内容" />
      </SearchWrapper>
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
    </Container>
  );
};

export default RightBar;
