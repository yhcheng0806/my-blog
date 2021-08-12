import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useLocation } from "react-router-dom";
import Icon from "../common/Icon";
import { modifyPathname } from "../../actions/tabBar";
import { modifyTheme } from "../../assets/theme";
import { modifyThemeType } from "../../actions/theme";

import {
  Container,
  Topside,
  MenuIcons,
  Status,
  Botside,
  Theme,
} from "./styles";

const MenuBar = ({ setTheme }) => {
  const [themeState, setThemeState] = useState(
    localStorage.getItem("themeState") || "light"
  );
  const { userInfo } = useSelector((state) => state.user);
  const { tabBar, pathname } = useSelector((state) => state.tabBar);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();


  const handleTheme = () => {
    const state = themeState === "light" ? "dark" : "light";
    setThemeState(state);
    dispatch(modifyThemeType(state));
    setTheme(modifyTheme(state));
    localStorage.setItem("themeState", state);
  };

  const toPage = (path) => {
    if (path.includes("/user")) {
      path = `${path}/${userInfo?.username}`;
    }
    history.push(path);
    dispatch(modifyPathname(path));
  };

  useEffect(() => {
    dispatch(modifyPathname(location.pathname));
  }, [dispatch, location]);

  return (
    <Container>
      <Topside>
        <MenuIcons>
          {tabBar.map(({ name, icon, path }) => (
            <Status
              className={pathname.includes(path) && "active"}
              key={path}
              onClick={() => toPage(path)}
            >
              <Icon type={`icon-${icon}`} />
              <strong>{name}</strong>
            </Status>
          ))}
        </MenuIcons>
      </Topside>
      <Botside>
        <Theme outlined onClick={handleTheme}>
          <Icon type={`icon-${themeState}`} />
        </Theme>
      </Botside>
    </Container>
  );
};

export default MenuBar;
