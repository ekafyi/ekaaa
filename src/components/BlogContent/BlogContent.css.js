import React from 'react';
import styled, { css } from 'styled-components'
import { lineHeight, fontSize, fontWeight, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'
import { 
  BlogSingleHeader,
  BlogSingleBody,
} from '../BlogSingle'
import { transparentize, darken } from 'polished'


export const DateWrapper = styled.div`
  ${fontSize}
  ${lineHeight}
  ${space}

  color: yellow;
`
DateWrapper.defaultProps = {
  fontSize: 1,
  lineHeight: 2,
  // mt: [0,0,2,3],
  mb: 3,
}

////

const headerNoteStyle = {
  gridRow: 2,
  borderTop: 'none',
}
export const BlogSingleHeaderNote = ({...props}) => <BlogSingleHeader {...props} mt={[-3,-4]} mb={[4,5]} style={headerNoteStyle}>{props.children}</BlogSingleHeader>

////

const headerBodyStyle = {
  gridRow: 1,
  borderTop: 'solid 4px',
  paddingTop: '2rem',
}
export const BlogSingleBodyNote = ({...props}) => <BlogSingleBody {...props} fontSize={[3,3,4]} style={headerBodyStyle}>{props.children}</BlogSingleBody>

////

export const LinkPostTitle = styled.a.attrs({
  rel: 'external',
})`
  ${space}

  display: inline-block;
  border-left: ${theme.borders[2]} dotted ${darken(0.06, theme.colors.bg)};
  padding-left: 1rem;
  padding-bottom: .5rem;

  &:not(:hover):not(:focus) {
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.accentFg};
    text-decoration-color: ${transparentize(0.5, theme.colors.accentFg)};
    border-left-color: ${theme.colors.accentFg};
  }

  .icon-in-title {
    width: .66em;
    height: .66em;
    margin-left: .2em;
    color: ${theme.colors.accentFg};
  }
`

////

export const LinkPostTitleIcon = styled.svg.attrs({
  role: 'presentation',
  alt: '',
  ariaHidden: true,
  width: 24,
  height: 24,
  className: 'icon-in-title',
})`
  * {
    fill: ${theme.colors.accentFg};
  }
`

////

export const LinkPostUrl = styled.div`
  ${fontSize}
  ${space}

  &:not(:hover):not(:focus) {
    text-decoration: underline;
    text-decoration-color: ${transparentize(0.5, theme.colors.fg)};
  }

  ${mq.md(
    css`
      font-size: ${theme.fontSizes[3]};
    `
  )};
`
LinkPostTitle.defaultProps = {
  mb: 4,
}

////

export const LinkPostBodyWrapper = styled.div`
  ${space}

  grid-row: 2;
  grid-column: main;
`
LinkPostBodyWrapper.defaultProps = {
  mt: [-3,-3,-4],
  mb: [4,4,5],
}