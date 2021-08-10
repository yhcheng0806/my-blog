import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import MenuBar from "../Menubar";
import RightBar from "../RightBar";
import Main from "../Main";

import { Container, Wrapper } from "./styles";

const Layout = ({ setTheme }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Router>
      <Container>
        <Wrapper className={!userInfo && "full"}>
          {userInfo && <MenuBar setTheme={setTheme} />}
          <Main userInfo={userInfo} />
          <RightBar />
        </Wrapper>
      </Container>
    </Router>
  );
};

export default Layout;
