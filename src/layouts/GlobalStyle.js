import { createGlobalStyle } from 'styled-components'
import theme from '../../data/theme'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`

${normalize()}

html {
  font-size: 100%;
  line-height: 1;

  ${'' /* !TODO decide on this */}
  @media (max-width: 414px) {
    font-size: 87.5%;
  }
}

body {
  // Colors
  color: ${theme.colors.fg};
  background-color: ${theme.colors.bg};

  // Typography
  font-size: 1rem;
  font-family: ${theme.fonts.sans};
  font-weight: ${theme.fontWeights.body};
  font-kerning: normal;
  font-feature-settings: "kern", "liga", "clig", "calt";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // Others
  min-height: 90vh;
}

${'' /* https://css-tricks.com/box-sizing/ */}
*, *:before, *:after {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: ${theme.fontWeights.head};
}

cite {
  font-style: normal;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

body,
blockquote,
h1, h2, h3, h4, h5, h6,
ul, ol {
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
}

a {
  color: currentColor;
  // text-decoration: none; 
}

svg {
  fill: currentColor;
}
`
