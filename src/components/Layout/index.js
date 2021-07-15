import React from "react";
import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout = ({ setTheme }) => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main setTheme={setTheme} />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
