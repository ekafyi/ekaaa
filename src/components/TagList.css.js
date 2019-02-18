import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { Link } from 'gatsby'
import { transparentize, lighten } from 'polished'
import { roundedFocus } from '../mixins'


export const pillBaseStyle = css`
  ${roundedFocus};
  
  display: inline-block;
  border: 2px solid ${transparentize(0.75, theme.colors.fg)};

  &:hover,
  &:focus {
    border-color: ${transparentize(0.33, theme.colors.accentFg)};
    background: ${lighten(0.05, theme.colors.bg)};
  }
`

const scrollSideStyle = css`
  ${mq.xsOnly(
    css`
      white-space: nowrap;
    `
  )};
`
export const TagListWrapper = styled.div`
  ${'' /* ${props => props.isScrollSide && scrollSideStyle} */}
`

export const TagListItem = styled(Link)`
  ${fontSize}
  ${space}

  ${pillBaseStyle}

  text-decoration: none;
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

    &:before {
      color: ${transparentize(0.25, theme.colors.accentFg)};
    }
  }
`
TagListItem.defaultProps = {
  fontSize: 1,
  px: 3,
  py: ['.75rem',2],
  mr: 2,
  mb: 2,
}