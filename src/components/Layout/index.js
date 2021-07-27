import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import MenuBar from "../Menubar";
// import SideBar from "../SideBar";
import Main from "../Main";
import AuthRoute from "../../router/authRoute";

import { Container, Wrapper, CommonWrapper } from "./styles";

const Layout = ({ setTheme }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Router>
      <Container>
        {userInfo ? (
          <Wrapper>
            <MenuBar />
            <Main userInfo={userInfo} setTheme={setTheme} />
            {/* <SideBar /> */}
          </Wrapper>
        ) : (
          <CommonWrapper>
            <Switch>
              <AuthRoute />
            </Switch>
          </CommonWrapper>
        )}
      </Container>
    </Router>
  );
};

export default Layout;
