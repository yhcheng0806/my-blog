import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useLocation } from "react-router-dom";
import Icon from "../common/Icon";
import { modifyPathname } from "../../actions/tabBar";
import { logout } from "../../actions/user";

import {
  Container,
  Topside,
  // Logo,
  MenuIcons,
  Status,
  Botside,
  Avatar,
  ProfileData,
  WriteButton,
} from "./styles";

const MenuBar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const {
    tabBar: { tabBar, pathname },
  } = useSelector((state) => state);

  const toPage = (path) => {
    history.push(path);
    dispatch(modifyPathname(path));
  };

  useEffect(() => {
    dispatch(modifyPathname(location.pathname));
  }, [dispatch, location]);

  return (
    <Container>
      <Topside>
        {/* <Logo></Logo> */}
        <MenuIcons>
          {tabBar.map(({ name, icon, path }) => (
            <Status
              className={pathname === path && "active"}
              key={path}
              onClick={() => toPage(path)}
            >
              <Icon type={`icon-${icon}`} />
              <strong>{name}</strong>
            </Status>
          ))}
        </MenuIcons>
        <WriteButton onClick={() => toPage("write")}>
          <Icon type="icon-write" />
          <strong>记录</strong>
        </WriteButton>
      </Topside>
      <Botside>
        <Avatar />

        <ProfileData>
          <strong>{userInfo?.account}</strong>
          <strong>{userInfo?.email}</strong>
        </ProfileData>
        <Icon type="icon-exit" onClick={() => dispatch(logout(history))} />
      </Botside>
    </Container>
  );
};

export default MenuBar;
