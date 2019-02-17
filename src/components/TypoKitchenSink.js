import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { lineHeight, fontSize, fontWeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'

export const TypoKitchenSink = css`

  >*:not(:last-child) {
    margin-bottom: 1.2656em;
  }

  >*:last-child {
    display: inline;
    margin-bottom: 0;
  }

  blockquote {
    padding-top: .493em;
    padding-bottom: .493em;
    padding-left: 2.56em;
    position: relative;
    &:before {
      content: "“";
      color: ${theme.colors.accentBg};
      position: absolute;
      top: -0.125em;
      left: 0;
      font-size: ${theme.fontSizes[7]};
      font-family: ${theme.fonts.serif};
      font-weight: 900;
    }

    ${'' /* border-left: .25rem solid ${theme.colors.accentBg};
    padding-left: 1.266em;
    padding-top: calc(.493em - 2px);
    padding-bottom: .493em;*/}

    p:last-child {
      margin-bottom: 0;
    } 
  }

  ul {
    margin-left: 2rem; // test
  }
`