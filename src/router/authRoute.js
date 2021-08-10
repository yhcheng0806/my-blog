import { Route, Redirect, useLocation } from "react-router-dom";
import { getToken } from "../utils/auth";

import PageRenderer from "./pageRenderer";

const AuthRoute = () => {
  const token = getToken();
  const { pathname } = useLocation();
  if ((token && pathname === "/login") || (token && pathname === "/")) {
    return <Redirect to="/home" />;
  }

  if (!token && pathname !== "/login" && pathname !== "/register") {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Route path="/:page" component={PageRenderer} />
      {/* <Route
        path="/"
        render={() => <Redirect to={token ? "home" : "login"} />}
      /> */}
    </>
  );
};

export default AuthRoute;
