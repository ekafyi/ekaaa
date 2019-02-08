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
