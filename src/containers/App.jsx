import React, { useContext, Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router } from "@reach/router";

import Title from "../components/Title/Title";
import { TextColorContext } from "../context/context";
import Search from "../components/Search/Search";
import Details from "../components/Details/Details";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.textColor};
    font-family: ${props => props.theme.fontFamily};
    overflow-y: scroll;
    text-align: center;
    a {
    text-decoration: none;
    color: #000;
    }
    @media (max-width: 775px) {
      ul {
        padding: 0;
      }
    }
  }
`;

const App = () => {
  const TextColor = useContext(TextColorContext);

  return (
    <ThemeProvider
      theme={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}
    >
      <Fragment>
        <GlobalStyle textColor={TextColor} />
        <Title />

        <Router>
          <Search path="/" />
          <Details path="/details/:id" />
        </Router>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
