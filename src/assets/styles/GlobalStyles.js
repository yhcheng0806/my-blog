import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
  }
  button, a {
    cursor: pointer;
  }
  *, button, input {
    border: 0;
    outline: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ul,li {
    list-style: none;
  }
  html {
    /* background: var(--primary); */
  }
  
`;
