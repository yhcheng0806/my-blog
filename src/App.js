import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";

import GlobalStyle from "./assets/styles/GlobalStyles";
import "antd/dist/antd.css";

const App = () => {
  const [theme, setTheme] = useState(useSelector((state) => state.theme));

  return (
    <ThemeProvider theme={theme}>
      <Layout setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
export default App;
