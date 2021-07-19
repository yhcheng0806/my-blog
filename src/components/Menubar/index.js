import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import Icon from "../common/Icon";
import { modifyPathname } from "../../actions/tabBar";
import { logout } from "../../actions/auth";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    tabBar: { tabBar, pathname },
  } = useSelector((state) => state);

  const toPage = (path) => {
    history.push(path);
    dispatch(modifyPathname(path));
  };

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
        <WriteButton>
          <Icon type="icon-write" />
          <strong>记录</strong>
        </WriteButton>
      </Topside>
      <Botside>
        <Avatar />

        <ProfileData>
          <strong>yhcheng0806</strong>
          <strong>18892083800@163.com</strong>
        </ProfileData>
        <Icon type="icon-exit" onClick={() => dispatch(logout(history))} />
      </Botside>
    </Container>
  );
};

export default MenuBar;
