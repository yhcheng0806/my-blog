import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

import PageRenderer from "./pageRenderer";

const AuthRoute = () => {
  // const userInfo =
  //   useSelector((state) => state.auth.authData) ||
  //   JSON.parse(localStorage.getItem("userInfo"));
  const userInfo = true;

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
