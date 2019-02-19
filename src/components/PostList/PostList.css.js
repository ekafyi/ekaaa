import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { lineHeight, fontSize, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'
import { transparentize, darken } from 'polished'
import { linkCoverParent } from '../../mixins'
import { commonLinkStyle } from '../PostContent/PostContent.css'
import { TypoKitchenSink } from '../TypoKitchenSink'


export const Post = styled.article`
  ${space}

  position: relative; // for absolute positioned children
`

////

// date
export const PostDate = styled.time`
  ${'' /* ${color} */}
  ${fontSize}
  ${space}

  display: block;
`
const basePostDateProps = {
  fontSize: [1,0],
}
PostDate.defaultProps = {
  ...basePostDateProps,
}

////

export const PostTitle = styled.h4`
  ${fontSize}
  ${lineHeight}
  ${space}

  letter-spacing: -0.018em;
`
const basePostTitleProps = {
  lineHeight: 1,
  mb: [2, 3],
}
PostTitle.defaultProps = {
  ...basePostTitleProps,
  fontSize: 4,
}

////

export const PostLink = styled(Link)`
  ${linkCoverParent}

  &:not(:hover):not(:focus) {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.accentFg};
    text-decoration-color: ${transparentize(0.5, theme.colors.accentFg)};
  }
`

////

export const PostExcerpt = styled.div`
  ${fontSize}
  ${lineHeight}
  ${space}

  ${TypoKitchenSink}
`
PostExcerpt.defaultProps = {
  fontSize: 1,
  lineHeight: 2,
  mb: 2,
}

////

// external link under title ("see project")
export const ViewProjectLink = styled.div`
  ${fontSize}
  ${space}
  
  color: ${theme.colors.accentMain};
  text-decoration: none !important;

  svg {
    vertical-align: bottom;
  }
`
ViewProjectLink.defaultProps = {
  fontSize: 0,
  mt: [-1, -2],
  mb: [2, 3],
}

////

export const LandingPost = styled(Post)`
  ${mq.sm(
    css`
      padding-right: 3vw;
    `
  )};
`
LandingPost.defaultProps = {
  mb: [3, 0],
}

////

export const LandingPostDate = styled(PostDate)`
  color: ${theme.colors.fgMuted[0]};

  &:before {
    content: '●';
    margin-right: 0.4em;
    color: ${theme.colors.accentFg};
  }
`
LandingPostDate.defaultProps = {}

////

// `CommonBlog*` = common components for blog (Article, Note, Link)

export const CommonBlogPost = styled(Post)`
  ${'' /* ${props => (!props.isDottedLine && bottomLineStyle)} */}

  &:first-of-type {
    margin-top: 1rem;
  }

  &:not(:last-of-type) {
    border-bottom: 1px dotted ${theme.colors.fg};
  }

  .before-more-link {
    display: inline;
  }

  .more-link {
    display: inline;
    vertical-align: text-top;
    color: ${theme.colors.accentFg}; 
    font-size: ${theme.fontSizes[1]};
    margin-left: .5rem;

    ${'' /* &:after {
      content: "▶";
      position: absolute;
      font-size: .75em;
      margin-left: .5em;
      line-height: 2.25;
      transition: margin-left ease .2s;
    } */}

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`
CommonBlogPost.defaultProps = {
  pb: [3,3,4],
  mb: [3,3,4],
}

///

export const CommonBlogPostDate = styled(PostDate)`
  color: ${theme.colors.accentFg}; 
  display: inline-block;

  &:after {
    content: "▶";
    position: absolute;
    font-size: .75em;
    padding-left: .6em;
    line-height: 1.25;
    transition: transform ease .2s;
  }
`

////

const dotStyle = css`
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 3 1' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='1' height='1' fill='%23ffffff'/><rect x='1' y='0' width='1' height='1' fill='transparent'/></svg>");
  background-repeat: repeat;
  background-size: 4px 16px;

  &:before {
    content: '▪';
    color: ${theme.colors.accentFg};
    background-color: ${theme.colors.bg};
    padding-left: .5rem;
    position: absolute;
    right: 0;
  }
`
export const CommonBlogPostDateWrapper = styled(Link)`
  ${space}
  ${props => (props.isDottedLine && dotStyle)}

  display: inline-block;
  position: relative;
  z-index: 1;

  &:hover ${CommonBlogPostDate},
  &:focus ${CommonBlogPostDate} {
    text-decoration: underline;

    &:after {
      transform: translateX(.4em);
      outline: none;
    }
  }
`
CommonBlogPostDateWrapper.defaultProps = {
  mb: [2,2,3],
}

////

export const CommonBlogPostTitle = styled(PostTitle)`
  ${mq.sm(
    css`
      padding-right: 4.167%;
    `
  )};
`
CommonBlogPostTitle.defaultProps = {
  ...basePostTitleProps,
  fontSize: 5,
}

///

export const LinkPostLink = styled(PostLink).attrs({
  as: 'a',
  target: '_blank',
  rel: 'external no follow',
})` 
  // the PostContent counterpart of this component is LinkPostTitle 
  // (not to be mistaken w/ LinkPostTitle above)

  ${space}
  ${commonLinkStyle}

  &:before {
    display: none;
  }
`
LinkPostLink.defaultProps = {
  mb: [2, 3],
}

///

export const LinkPostUrl = styled.div`
  ${fontSize}
  ${space}

  &:not(:hover):not(:focus) {
    text-decoration: underline;
    text-decoration-color: ${transparentize(0.5, theme.colors.fg)};
  }

`
LinkPostUrl.defaultProps = {
  mt: [0,-2],
}

////
