import styled from 'styled-components'
// import { Link } from 'gatsby'
import { lineHeight, fontSize, fontWeight, space } from 'styled-system'
import theme from '../../data/theme'
// import { mq } from '../../data/mq'
import { TypoKitchenSink } from './TypoKitchenSink'
import { transparentize } from 'polished'


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

// Small paragraph (for asides etc)
export const SmallP = styled.p`
  ${fontSize}
  ${lineHeight}
  ${space}
`
SmallP.defaultProps = {
  fontSize: ['1rem','1rem',1],
  lineHeight: 2,
  mb: 0,
}

// large, legible, long-form body text
export const LongFormBody = styled.div`
  ${fontSize}
  ${lineHeight}
  ${space}

  ${TypoKitchenSink}
`
LongFormBody.defaultProps = {
  fontSize: ['1rem', 2, 2, 2, '1.125rem', '1.25rem'],
  lineHeight: 3,
}

// super large heading title
export const XLargeTitle = styled.h1`
  ${fontSize}
  ${lineHeight}
  ${space}

  letter-spacing: -0.02em;
  color: ${theme.colors.accentMain};
`
XLargeTitle.defaultProps = {
  fontSize: [8, 9, 'calc(6rem + 2vw)', 'calc(6rem + 4vw)'],
  my: [3,3,4,5],
  pb: 4, // balance top margin
}

// large heading title - used in Blog Single
export const LargeTitle = styled.h2`
  ${fontSize}
  ${lineHeight}
  ${space}

  letter-spacing: -0.01em;
`
LargeTitle.defaultProps = {
  fontSize: [6,6,7,'calc(2.5rem + 1vw)','calc(2.5rem + 1vw)',7],
  lineHeight: [1, '1.125'],
  mb: 4,
}

// medium heading title - used in Blog Index Group
// not used
// export const MediumTitle = styled.h3`
//   ${fontSize}
//   ${space}
// `
// MediumTitle.defaultProps = {
//   fontSize: [6,6,6,'calc(2rem + 1.5vw)','calc(2rem + 1.25vw)',7],
//   // lineHeight: [1, '1.125'],
//   mb: 3,
// }

// list of text links
export const LinkList = styled.ul`
  ${fontSize}
  ${space}

  list-style: none;
  padding-left: 0;

  li {
    &:not(:last-child) {
      margin-bottom: .25rem;
    }
  }

  li>a {
    display: inline-block;
    padding: .25rem 0 calc(.25rem - 2px);
    border-bottom: 2px solid transparent;

    &:not(:focus),
    &:not(:hover) {
      text-decoration: none;
    }

    &:focus,
    &:hover {
      color: ${theme.colors.accentFg};
      border-bottom: 2px solid ${transparentize(0.5, theme.colors.accentFg)};
    }

    .emoji-wrapper {
      font-size: .9em;
      margin-right: .25em;
    }
  }
`
LinkList.defaultProps = {}
