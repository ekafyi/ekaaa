import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { lineHeight, fontSize, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { bodyLinkStyle } from '../mixins';

export const FooterWrapper = styled(OuterWrapper)`
  ${fontSize}
  ${lineHeight}

  ${mq.sm(
    css`
      display: flex;
      align-items: flex-end;
      > * {
        flex-grow: 1;
      }
    `
  )};

  a {
    ${bodyLinkStyle(theme.colors.fg, theme.colors.accentFg)};
  }
`
FooterWrapper.defaultProps = {
  fontSize: 0,
  lineHeight: 2,
}

export const FooterLinks = styled.div`
  // !TODO ini bikin mixin inline
  padding: 0;
  margin: 0;
  list-style: none;
  text-transform: lowercase;
  li {
    display: inline-block;
    margin-right: 0.5rem;
    @media (min-width: 768px) {
      margin-right: 0;
      margin-left: 0.5rem;
    }

    &:before {
      content: '■';
      margin-right: 0.5rem;
      color: ${theme.colors.accentBg};
    }

    &:first-of-type:before {
      display: none;
    }

    a {
      ${bodyLinkStyle(theme.colors.fg, theme.colors.accentFg)};
    }
  }
`

export const Copyright = styled.div`
  ${space}

  ${mq.sm(
    css`
      min-width: 25rem;
      max-width: 32rem;
      order: -1;
    `
  )};
`
Copyright.defaultProps = {
  mt: 3,
}

export const Credits = styled.div`
  min-width: 20rem;

  ${mq.sm(
    css`
      text-align: right;
    `
  )};
`
