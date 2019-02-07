import styled, { css } from 'styled-components'
import { fontSize, gridColumn, justifyContent, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'
import { hideVisually } from 'polished'

const unhide = css`
  clip: none;
  clip-path: none;
  height: auto;
  width: auto;
  margin: initial;
  position: initial;
  overflow: visible;
`

export const SeeAllLink = styled.div`
  ${fontSize}
  ${gridColumn}
  ${justifyContent}
  ${space}

  text-transform: lowercase;
  display: flex;
  align-items: center;
  transition: all .2s ease-in;

  ${mq.lg(css`
    &:hover {
      transform: scale(1.18) translateX(.5rem);
    }
  `)};

  a {
    text-decoration: none;
    align-items: center;
    display: flex;
    &:hover, &:focus {
      color: ${theme.colors.accentFg};
    }
  }

  svg {
    width: 2em;
    height: 2em;
  }

  .text-label {
    ${mq.sm(hideVisually())};
    ${mq.md(unhide)};
    ${mq.lg(hideVisually())};
  }
`
SeeAllLink.defaultProps = {
  py: 2,
  fontSize: [2, 4, 6, 4, 6],
  gridColumn: ['auto', '2', 'auto', '4', 'auto'],
  justifyContent: ['flex-end', 'flex-end', 'initial', 'flex-end', 'initial'],
}
