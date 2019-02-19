import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, height, width, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { unbutton } from '../mixins'
import {
  LargeTitle,
  //P,
  SmallP,
} from './Typography'
import { bodyLinkStyle } from '../mixins';
import { pillBaseStyle } from './TagList.css'


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
  mb: [3,3,4],
}

////

export const SidebarBlock = styled.div`
  ${space}
  
  border-top: dotted ${theme.colors.fg} 0.0625rem;

  ${mq.xsOnly(
    css`
      &.hide-xs-only,
      .hide-xs-only {
        display: none;
      }

      .temp-horizontal-taglist {
        height: 2.75rem;
        overflow: hidden;
      }
    `
  )};
`
SidebarBlock.defaultProps = {
  pt: [3],
  pb: [3],
  mt: [2],
}

///

export const ContactBlock = styled.ul`
  ${space}

  list-style-type: none;

  li {
    display: inline-block;
  }

  ${mq.xsOnly(
    css`
      display: none;
    `
  )};
`

///

export const SvgIcon = styled.svg.attrs({
  width: 18,
  height: 18,
  alt: props => props.alt || '',
  role: props => props.role || 'presentation',
  'aria-hidden': props => props.ariaHidden || true,
})`
`

///

const buttonHeight = ['2.5rem','2.5rem','2.5rem','2rem']
const buttonStyle = {
  height: buttonHeight,
  lineHeight: buttonHeight,
  mr: ['.75rem','.75rem',2], // wider margin for small screens to make tapping easy
  my: 1,
}

const commonSvgStyle = css`
  opacity: .9;

  &:focus,
  &:hover {
    svg {
      opacity: 1;
    }
  }
`

export const SocialLink = styled.a.attrs({
  rel: 'external',
})`
  ${space}
  ${height}
  ${width}
  ${lineHeight}

  ${pillBaseStyle}
  ${commonSvgStyle}

  border-radius: 50%;
  text-align: center;

  svg {
    margin: -.125rem auto;
  }
`
SocialLink.defaultProps = {
  ...buttonStyle,
  width: buttonHeight,
}

///

export const RssLink = styled.a`
  ${space}
  ${fontSize}
  ${height}
  ${lineHeight}

  ${pillBaseStyle}
  ${commonSvgStyle}

  text-decoration: none;
  border-radius: 2rem;

  svg {
    margin-right: .25em;
    margin-top: -.25rem;
    vertical-align: middle;
  }
`
RssLink.defaultProps = {
  ...buttonStyle,
  fontSize: [1,0],
  px: '.75rem',
}