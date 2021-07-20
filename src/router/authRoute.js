import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import PageRenderer from "./pageRenderer";

const AuthRoute = () => {
  const authData =
    useSelector((state) => state.auth.authData) ||
    JSON.parse(localStorage.getItem("authData"));

  return (
    <>
      <Route path="/:page" component={PageRenderer} />
      {/* <Route
        exact
        path="/"
        render={() => <Redirect to={authData ? "home" : "login"} />}
      /> */}
    </>
  );
};

export default AuthRoute;
