import styled, { css } from 'styled-components'
import { fontSize, lineHeight, height, width, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { pillBaseStyle } from './TagList.css'


export const ContactBlock = styled.ul`
  ${space}

  list-style-type: none;

  li {
    display: inline-block;
  }
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