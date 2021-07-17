import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";

import Icon from "../common/Icon";

import AuthRoute from "../../router/authRoute";
import { modifyTheme } from "../../assets/theme";
import { modifyThemeType } from "../../actions/theme";

import {
  Container,
  Header,
  LeftWrapper,
  Theme,
  Pages,
  BottomMenu,
  Status
} from "./styles";

const Main = ({ setTheme }) => {
  const [themeState, setThemeState] = useState("dark");
  const dispatch = useDispatch();
  const history = useHistory()

  const handleTheme = () => {
    setThemeState(themeState === "light" ? "dark" : "light");
    dispatch(modifyThemeType(themeState === "light" ? "dark" : "light"));
    setTheme(modifyTheme(themeState === "light" ? "dark" : "light"));
  };

  const toPage = (page) => {
    return
    history.push('/'+page)
  }

  return (
    <Container>
      <Header>
        <LeftWrapper>
          <Icon type='icon-logo' />
          {/* <ProfileInfo>
            <strong>name</strong>
            <span>99 news</span>
          </ProfileInfo> */}
        </LeftWrapper>
        <Theme outlined onClick={handleTheme}>
          <Icon type={`icon-${themeState}`} />
        </Theme>
      </Header>

      <Pages>
        <Router>
          <Switch>
            <AuthRoute />
          </Switch>
        </Router>
      </Pages>

      <BottomMenu>
        <Status onClick={() => toPage('home')}>
          <Icon type='icon-home' />
        </Status>
        <Status onClick={() => toPage('search')}>
          <Icon type='icon-search' />
        </Status>
        <Status onClick={() => toPage('email')}>
          <Icon type='icon-email' />
        </Status>
        <Status onClick={() => toPage('user')}>
          <Icon type='icon-user' />
        </Status>
      </BottomMenu>
    </Container>
  );
};

export default Main;
