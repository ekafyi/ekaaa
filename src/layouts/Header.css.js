import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { lineHeight, fontSize, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { Link } from 'gatsby'

export const HeaderWrapper = styled(OuterWrapper)`
  ${space}

  display: flex;
  justify-content: space-between;

  ${mq.xsOnly(
    css`
      flex-direction: column;
    `
  )};
`
HeaderWrapper.defaultProps = {
  py: [1, 2],
}

export const PrimaryNav = styled.nav.attrs({
  role: 'navigation',
})``

export const SecondaryNav = styled.div``

export const HeaderLink = styled(Link)`
  ${fontSize}
  ${space}

  text-decoration: none;
  text-transform: lowercase;
  display: inline-block;

  &.is-active {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.accentMain};
  }

  &:focus,
  &:hover {
    color: ${theme.colors.accentMain};
    text-decoration: underline;
  }

  &:first-of-type {
    padding-left: 0;
  }
`
HeaderLink.defaultProps = {
  fontSize: 2,
  px: 1,
  py: 2,
  mr: [1, 2],
}

export const HomeLink = styled(HeaderLink)`
  color: ${theme.colors.accentMain};
  > * {
    font-size: 1.26556em;
  }
`
