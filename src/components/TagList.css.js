import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { Link } from 'gatsby'
import { transparentize, lighten } from 'polished'


export const TagListWrapper = styled.div``

export const TagListItem = styled(Link)`
  ${fontSize}
  ${space}

  text-decoration: none;
  display: inline-block;
  border: 2px solid ${transparentize(0.75, theme.colors.fg)};
  border-radius: 2rem;
  color: ${transparentize(0.25, theme.colors.fg)};
  line-height: 1;

  &:before {
    content: '#';
    color: ${transparentize(0.5, theme.colors.fg)};
    margin-right: .125rem;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.accentFg};
    border-color: ${transparentize(0.5, theme.colors.accentFg)};
    background: ${lighten(0.05, theme.colors.bg)};

    &:before {
      color: ${transparentize(0.25, theme.colors.accentFg)};
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px ${theme.colors.accentFg};
  }
`
TagListItem.defaultProps = {
  fontSize: 1,
  px: 3,
  py: [1, 2],
  mr: 2,
  mb: 2,
}