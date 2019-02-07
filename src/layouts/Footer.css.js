import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { lineHeight, fontSize, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'

export const FooterWrapper = styled(OuterWrapper)`
  ${fontSize}
  ${lineHeight}

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-end;
    > * {
      flex-grow: 1;
    }
  }

  a {
    color: ${theme.colors.accentFg};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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
    margin-right: 1rem;
    @media (min-width: 768px) {
      margin-right: 0;
      margin-left: 1rem;
    }

    &:before {
      content: '■';
      margin-right: 1rem;
      color: salmon;
    }

    &:first-of-type:before {
      display: none;
    }

    a {
      color: ${theme.colors.fg};
      text-decoration: none;
      &:hover {
        color: ${theme.colors.accentFg};
        text-decoration: underline;
      }
    }
  }
`

export const Copyright = styled.div`
  ${space}

  @media (min-width: 768px) {
    min-width: 25rem;
    max-width: 32rem;
    order: -1;
  }
`
Copyright.defaultProps = {
  mt: [4, 3],
}

export const Credits = styled.div`
  min-width: 20rem;
  @media (min-width: 768px) {
    text-align: right;
  }
`
