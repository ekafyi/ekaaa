import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { bodyLinkStyle } from '../mixins'
import { hideVisually } from 'polished'
import { OuterWrapper } from './Wrapper'


export const Profpic = styled.div`
  ${space}

  text-align: center;
  flex: 0 0 6rem;

  img {
    border-radius: 50%;
    max-width: 4rem; // for Opera Mini

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

  ${mq.sm(css`
    display: block;
  `)};

  a {
    ${bodyLinkStyle(theme.colors.fg, theme.colors.accentFg)};
  }

  .side-about__text {
    max-width: 25rem;
  }

  .side-about__contact-link {
    ${mq.sm(hideVisually())};
    
    &,
    &:hover,
    &:focus {
      color: ${theme.colors.accentMain};
    }
  }
`
AboutBlock.defaultProps = {
  mb: [3],
}

////

export const SidebarBlock = styled.div`
  ${space}
  
  border-top: dotted ${theme.colors.fg} 0.0625rem;

  ${mq.xsOnly(
    css`
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

export const MiscBlock = styled(SidebarBlock)``

///

const showMiscMdUp = css`
  .social-list,
  ${MiscBlock} {
    display: block;
  }
`
// this has to be AFTER MiscBlock
export const SidebarWrapper = styled.div`

  .social-list,
  ${MiscBlock} {
    display: none;
  }

  ${mq.sm(showMiscMdUp)};
`

////

const hideMiscMdUp = css`
  ${MiscBlock} {
    display: none;
  }
`
// this has to be AFTER MiscBlock
export const SidebarDuplicateWrapper = styled(OuterWrapper)`

  ${MiscBlock} {
    margin-top: -2rem;
    margin-bottom: 1rem;
  }

  ${mq.sm(hideMiscMdUp)};
`