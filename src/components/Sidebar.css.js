import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { unbutton } from '../mixins'
import {
  LargeTitle,
  //P,
  SmallP,
} from './Typography'
import { bodyLinkStyle } from '../mixins';


export const Profpic = styled.div`
  ${space}

  text-align: center;
  flex: 0 0 6rem;

  img {
    border-radius: 50%;

    ${mq.sm(
      css`
        width: 66.66%;
      `
    )};
    ${mq.md(
      css`
        width: 50%;
        min-width: 7rem;
      `
    )};
  }
`
Profpic.defaultProps = {
  mt: [0,0,2],
  mb: [0,0,4],
  pr: [3,3,0],
}

////

export const AboutBlock = styled.div`
  ${space}

  display: flex;
  align-items: center;

  ${mq.sm(
    css`
      display: block;
    `
  )};

  a {
    ${bodyLinkStyle(theme.colors.fg, theme.colors.accentFg)};
  }

  .side-about__text {
    max-width: 25rem;
  }
`
AboutBlock.defaultProps = {
  mb: [4],
}

////

export const SidebarBlock = styled.div`
  ${space}
  
  border-top: dotted ${theme.colors.fg} 0.0625rem;

  ${mq.xsOnly(
    css`
      &.hide-xs-only {
        display: none;
      }
    `
  )};
`
SidebarBlock.defaultProps = {
  pt: [3],
  pb: [3],
  mt: [2],
}