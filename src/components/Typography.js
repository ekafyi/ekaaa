import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { lineHeight, fontSize, fontWeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'

// !TODO - ini gak bisa, nanti benerin lagi
// Base paragraph
const BaseP = styled.p`
  ${lineHeight}
  ${fontWeight}
`
BaseP.defaultProps = {
  lineHeight: 2,
  fontWeight: 'body',
}

// Large paragraph (eg. Intro text)
export const LargeP = styled.p`
  ${fontSize}
  ${lineHeight}
`
LargeP.defaultProps = {
  fontSize: 4,
  lineHeight: 2,
}

// Medium paragraph (default for articles etc)
export const P = styled.p`
  ${fontSize}
  ${lineHeight}
`
P.defaultProps = {
  fontSize: 2,
  lineHeight: 2,
}

// super large heading title
export const IndexHeadingTitle = styled.h1`
  ${fontSize}
  ${lineHeight}

  color: ${theme.colors.accentMain};
`
IndexHeadingTitle.defaultProps = {
  fontSize: [7,7,8,'120px'],
}
