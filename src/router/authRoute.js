import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import PageRenderer from "./pageRenderer";

const AuthRoute = () => {
  const userInfo =
    useSelector((state) => state.user.userInfo) ||
    JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <Route path="/:page" component={PageRenderer} />
      <Route
        exact
        path="/"
        render={() => <Redirect to={userInfo ? "home" : "login"} />}
      />
    </>
  );
};

export default AuthRoute;
