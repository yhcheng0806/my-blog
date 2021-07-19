import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;

    color: ${(props) => props.theme.t_textColor};
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
  body {
    background:  ${(props) => props.theme.t_appBgColor};
  }

  ::-webkit-scrollbar {
    width: 4px;    
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px ${(props) => props.theme.t_blue};
    background: rgba(${(props) => props.theme.t_blue},.2);
  }
  
`;
