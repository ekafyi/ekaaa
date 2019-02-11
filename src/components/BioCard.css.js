import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { bodyLinkStyle } from '../mixins';


export const BioWrapper = styled.aside`
  ${borders}
  ${space}

  border-color: ${theme.colors.accentBg};
  border-style: dotted;
  border-radius: .25rem;
  display: flex;
  max-width: 45rem;
`
BioWrapper.defaultProps = {
  border: 0,
  m: 1,
  px: [2,3],
  py: ['1.5rem',4,'2rem'],
}

////

export const BioText = styled.div`
  ${lineHeight}
  ${space}

  ${mq.sm(
    css`
      padding-left: 0;
      padding-right: calc(8.33% - 1rem);
    `
  )};

  a {
    ${bodyLinkStyle(theme.colors.fg, theme.colors.accentFg)};
  }
`
BioText.defaultProps = {
  lineHeight: 2,
  pl: [3,4],
}

////

export const BioTitle = styled.strong`
  ${fontSize}
  ${space}

  display: block;
  font-weight: 500;
  line-height: 1;
  color: ${theme.colors.accentMain};

  ${mq.md(
    css`
      margin-bottom: 5%;
    `
  )}; 
`
BioTitle.defaultProps = {
  fontSize: [4,5],
  mb: [2,3],
}

////

export const Avatar = styled.div`

  img {
    border-radius: 50%;
    min-width: 5rem;
    max-width: 7.5rem;
    width: 33.33%;
    display: block;
  }

  ${mq.sm(
    css`
      flex-basis: 33.33%;
      min-width: 33.33%;
      align-self: center;
      margin-left: -1rem;
      ${'' /* padding-left: 8.33%;
      padding-right: 8.33%; */}

      img {
        width: 63%;
        margin: 0 auto;
      }
    `
  )}; 
`