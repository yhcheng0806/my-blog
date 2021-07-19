import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useHistory } from "react-router-dom";

import Icon from "../common/Icon";

import AuthRoute from "../../router/authRoute";
import { modifyTheme } from "../../assets/theme";
import { modifyThemeType } from "../../actions/theme";
import { modifyPathname } from "../../actions/tabBar";

import {
  Container,
  Header,
  LeftWrapper,
  Theme,
  Pages,
  BottomMenu,
  Status,
  Button,
} from "./styles";

const Main = ({ setTheme }) => {
  const [themeState, setThemeState] = useState(
    localStorage.getItem("themeState") || "light"
  );
  const {
    tabBar: { tabBar, pathname },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleTheme = () => {
    const state = themeState === "light" ? "dark" : "light";
    setThemeState(state);
    dispatch(modifyThemeType(state));
    setTheme(modifyTheme(state));
    localStorage.setItem("themeState", state);
  };

  const toPage = (path) => {
    history.push(path);
    dispatch(modifyPathname(path));
  };

  return (
    <Container>
      <Header>
        <LeftWrapper>
          <Icon type="icon-logo" />
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
        {tabBar.map(({ icon, path }) => (
          <Status
            className={pathname === path && "active"}
            key={path}
            onClick={() => toPage(path)}
          >
            <Icon type={`icon-${icon}`} />
          </Status>
        ))}
      </BottomMenu>
    </Container>
  );
};

export default Main;
