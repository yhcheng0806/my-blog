import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "../../router/authRoute";

import MenuBar from "../Menubar";
import SideBar from "../SideBar";
import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout = ({ setTheme }) => {
  const { authData } = useSelector((state) => state.auth);
  console.log(authData, "--authData");
  return (
    <Router>
      <Container>
        <Wrapper>
          {authData && <MenuBar />}
          <Main authData={authData} setTheme={setTheme} />
          {/* <SideBar /> */}
        </Wrapper>
      </Container>
    </Router>
  );
};

export default Layout;
