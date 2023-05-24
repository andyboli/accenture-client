import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import {
  BORDERS,
  COLORS_TYPES,
  GAPS,
  RADIUS,
  SHADOWS,
  SPACES,
} from "./view/foudation";
import Navigation from "./view/navigation";

const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />
    <Navigation />
  </Fragment>
);

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Neue-Plak-Black;
  src: url('src\NeuePlakBlack.ttf') format('truetype');
}
* {
  box-sizing: border-box;
  font-family: Neue-Plak-Black;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body {
  height: 100vh;
  width: 100vw;

  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  gap: ${GAPS.MEDIUM};
  margin: ${SPACES.NONE};
  padding: ${SPACES.NONE};

  background-color: ${COLORS_TYPES.BLACK};
  border-radius: ${RADIUS.SMALL};
  border: ${BORDERS.NONE};
  box-shadow: ${SHADOWS.NONE()};
}
#root {
  height: 100%;
  width: 100%;

  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: ${GAPS.MEDIUM};
  margin: ${SPACES.NONE};
  padding: ${SPACES.NONE};

  background-color: ${COLORS_TYPES.BLACK};
  border-radius: ${RADIUS.SMALL};
  border: ${BORDERS.NONE};
  box-shadow: ${SHADOWS.NONE()};
}
`;

export default App;
