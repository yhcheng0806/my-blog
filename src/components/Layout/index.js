import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../Menubar";
// import SideBar from "../SideBar";
import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout = ({ setTheme }) => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Router>
      <Container>
        <Wrapper>
          {userInfo && <MenuBar />}
          <Main userInfo={userInfo} setTheme={setTheme} />
          {/* <SideBar /> */}
        </Wrapper>
      </Container>
    </Router>
  );
};

export default Layout;
