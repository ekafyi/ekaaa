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

  ul {
    margin-left: 2rem; // test
  }
`