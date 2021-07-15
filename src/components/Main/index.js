import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

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
  ProfileInfo,
  BottomMenu,
} from "./styles";

const Main = ({ setTheme }) => {
  const [themeState, setThemeState] = useState("light");
  const dispatch = useDispatch();

  const handleTheme = () => {
    setThemeState(themeState === "light" ? "dark" : "light");
    dispatch(modifyThemeType(themeState === "light" ? "dark" : "light"));
    setTheme(modifyTheme(themeState === "light" ? "dark" : "light"));
  };

  return (
    <Container>
      <Header>
        <LeftWrapper>
          <button></button>

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

      <BottomMenu></BottomMenu>
    </Container>
  );
};

export default Main;
