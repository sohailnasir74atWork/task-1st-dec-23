import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* CSS Reset by Josh Comeau: https://www.joshwcomeau.com/css/custom-css-reset/ */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #app {
    isolation: isolate;
  }
`;
