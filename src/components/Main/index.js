import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, useHistory  } from "react-router-dom";

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

const Main = ({ setTheme  }) => {
  const [themeState, setThemeState] = useState(localStorage.getItem("themeState") || "light");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleTheme = () => {
    const state = themeState === "light" ? "dark" : "light"
    setThemeState(state);
    dispatch(modifyThemeType(state));
    setTheme(modifyTheme(state));
    localStorage.setItem("themeState",state)
  };

  const toPage = ( page) => {
    console.log(history,page,'---page---')
    history.push('/' + page)
  }

  return (
    <Container>
      <Header>
        <LeftWrapper>
          <Icon type='icon-logo' />
        </LeftWrapper>
        <Theme outlined onClick={handleTheme}>
          <Icon type={`icon-${themeState}`} />
        </Theme>
      </Header>

      <Pages>
          <Switch>
            <AuthRoute />
          </Switch>
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
