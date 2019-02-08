import styled, { css } from 'styled-components'
import { color, fontSize, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'

export const LandingWrapper = styled.section`
  ${space}

  ${mq.lg(css`
    &:first-of-type {
      padding-top: 8rem;
    }
  `)};
`
LandingWrapper.defaultProps = {
  my: [4, 4, 4, 5, 5],
}

export const SectionTitle = styled.h3`
  ${color}
  ${fontSize}
  ${space}

  text-transform: lowercase;

  &:before {
    content: " ";
    display: inline-block;
    background: ${theme.colors.accentBg};
    width: .83em;
    height: .5em;
    margin-left: -1rem;
    margin-right: .2em;

    ${mq.sm(
      css`
        display: none;
      `
    )};
  }
`
SectionTitle.defaultProps = {
  fontSize: [6, 6, 7, 7, 8],
  mb: [4, 5],
  pb: [0, 0, 0, 1, 2],
}
