import React from "react";
import { useRouteMatch } from "react-router-dom";

const component = (page) => require(`../pages/${page}/index`).default;

const generatePage = (page) => {
  try {
    return React.createElement(component(page));
  } catch (err) {
    return React.createElement(component("error"));
  }
};

const PageRenderer = () => {
  const {
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
};

export default PageRenderer;
