import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_2677508_uwo2aozobrm.js"],
});

const Icon = ({ type, ...props }) => {
  return <IconFont {...{ ...props, type }} />;
};

export default Icon;
