import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MenuBar from '../Menubar'
import SideBar from '../SideBar'
import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout = ({ setTheme }) => {
  return (
    <Router>
      <Container>
        <Wrapper>
          <MenuBar />
          <Main setTheme={setTheme} />
          <SideBar />
        </Wrapper>
      </Container>
    </Router>
  );
};

export default Layout;
