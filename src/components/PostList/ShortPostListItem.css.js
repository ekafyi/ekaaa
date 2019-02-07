import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { lineHeight, fontSize, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'

// container
export const Post = styled.article`
  ${space}

  position: relative; // for absolute positioned children

  ${mq.sm(
    css`
      padding-right: 3vw;
    `
  )};
`
Post.defaultProps = {
  mb: [3, 0],
}

// date
export const PostDate = styled.time`
  ${fontSize}
  ${space}

  display: block;
  color: ${theme.colors.fgMuted[0]};

  &:before {
    content: '●';
    margin-right: 0.4em;
    color: ${theme.colors.accentFg};
  }
`
PostDate.defaultProps = {
  fontSize: 1,
}

// title
export const PostTitle = styled.h4`
  ${fontSize}
  ${lineHeight}
  ${space}
`
PostTitle.defaultProps = {
  fontSize: 4,
  lineHeight: 1,
  mb: [2, 3],
}

// link
const linkCoverParent = css`
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
export const PostLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: ${theme.colors.accentFg};
    text-decoration: underline;
  }

  ${'' /* ${props => (props.isCoverParent && linkCoverParent)} */}
  ${linkCoverParent}
`

// excerpt
export const Excerpt = styled.p`
  ${fontSize}
  ${lineHeight}
  ${space}
`
Excerpt.defaultProps = {
  fontSize: 1,
  lineHeight: 2,
  mb: 2,
}
