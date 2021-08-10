
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Icon from "../../components/common/Icon";
import { logout } from "../../actions/user";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  General,
  Main,
  Tabs,
  ArticleList,
} from "./styles";

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();


  const { userInfo } = useSelector((state) => state.user);

  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>

      <ProfileData>
        <EditButton></EditButton>

        <span>{userInfo?.account}</span>
        <span>{userInfo?.email}</span>
        <Icon type="icon-exit" onClick={() => dispatch(logout(history))} /> 

        {/* <ul>
          <li>
            <Icon type="icon-location" />
            陕西 西安
          </li>
          <li>
            <Icon type="icon-cake" />
            1995-11-28
          </li>
        </ul> */}

        <General>
          <span>
            内容<strong>0</strong>
          </span>
          <span>
            点赞<strong>0</strong>
          </span>
        </General>
      </ProfileData>

      <Main>
        <Tabs>内容</Tabs>
        <ArticleList>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </ArticleList>
      </Main>
    </Container>
  );
};

export default User;
