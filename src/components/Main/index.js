
import { useDispatch, useSelector } from "react-redux";
import { Switch, useHistory } from "react-router-dom";

import Icon from "../common/Icon";

import AuthRoute from "../../router/authRoute";

import { modifyPathname } from "../../actions/tabBar";

import {
  Container,
  Pages,
  BottomMenu,
  Status,
} from "./styles";

const Main = ({ userInfo }) => {
  const {
    tabBar: { tabBar, pathname },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const toPage = (path) => {
    history.push(path);
    dispatch(modifyPathname(path));
  };

  return (
    <Container>
      <Pages className={ userInfo && 'phone'}>
        <Switch>
          <AuthRoute />
        </Switch>
      </Pages>
      {userInfo && (
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
      )}
    </Container>
  );
};

export default Main;
