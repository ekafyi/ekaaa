import styled from 'styled-components'
import { color, fontSize, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'

import { Post, PostTitle } from './ShortPostListItem.css'

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

// Project container
// (!TEMP, just to hide placeholder items)
export const Project = styled(Post)`
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    display: none;
  }

  @media (min-width: 768px) {
    &:nth-child(3) {
      display: block;
    }
  }
  @media (min-width: 992px) {
    &:nth-child(4) {
      display: block;
    }
  }
  @media (min-width: 1200px) {
    &:nth-child(5) {
      display: block;
    }
  }
`

// Placeholder
// (!TEMP, remove when there are enough projects)
export const PlaceholderTitle = styled(PostTitle)`
  .project-placeholder & {
    display: inline-block;
    background: ${theme.colors.fg};
    text-indent: -99999px;
    width: 8rem;
    height: 0.875em;
    margin-top: 0.25rem;
    &:after {
      content: '❓';
      display: block;
      margin-top: 1rem;
      height: 1rem;
      width: 1rem;
      text-indent: 0;
      font-size: 0.66em;
    }
  }
  @media (min-width: 768px) {
    .project-placeholder:nth-child(3) & {
    }
  }
  @media (min-width: 992px) {
    .project-placeholder:nth-child(4) & {
      width: 6.5rem;
    }
  }
  @media (min-width: 1200px) {
    .project-placeholder:nth-child(5) & {
      width: 9rem;
    }
  }
`
