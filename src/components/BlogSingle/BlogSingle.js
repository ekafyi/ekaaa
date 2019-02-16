import React from 'react'
import styled, { css } from 'styled-components'
import { mq } from '../../../data/mq'
import theme from '../../../data/theme'
import { OuterWrapper } from '../Wrapper'
import { fontSize, borders, space } from 'styled-system'
import { LongFormBody } from '../Typography'

export const BlogSingleWrapper = styled(OuterWrapper).attrs({
  as: 'article',
})`
  ${space}

  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;

  ${mq.md(
    css`
      max-width: 113rem;
      display: grid;
      grid-template-columns: 
        [left-edge] minmax(8rem, 3fr) // dont make sidebar too narrow
        [left-gap] 1fr 
        [main] minmax(42em, 8fr) // min ~72 chars (keep bodytext legible)
        [right-edge] 4fr
        [end];

      @supports not (display: grid) {
        max-width: 45rem;
      }
    `
  )};
`
BlogSingleWrapper.defaultProps = {
  py: [4,4,5,'calc(4rem + 2vw)','calc(4rem + 2vw)','5rem'],
}

////

const BlogSingleBodyStyle = styled(LongFormBody)`
  ${space}

  grid-row: 2;
  grid-column: main;

  &:after {
    content: "■";
    color: ${theme.colors.accentBg};
    display: inline;
    margin-left: .5rem;
    font-size: .9em;
  }
`

// exported as a React element to assign `py` value
// _without_ overriding `LongFormBody` defaultProps
// https://github.com/jxnblk/styled-system/issues/160#issuecomment-383975896

export const BlogSingleBody = ({...props}) => <BlogSingleBodyStyle {...props} py={[4,5]}>{props.children}</BlogSingleBodyStyle>


/////

export const BlogSingleHeader = styled.header`
  ${space}

  grid-row: 1;
  grid-column: main;
  border-top: solid ${theme.borders[1]} ${theme.colors.fg};

  ${mq.lg(
    css`
      margin-left: -12%;
      margin-right: -12%;

      >* {
        padding-right: 6%; // balance negative margin above
      }
    `
  )};
`
BlogSingleHeader.defaultProps = {
  mb: [0,-2],
  pt: [3,3,3,4], 
}

/////

export const BlogSingleFooter = styled.footer`
  ${fontSize}
  ${space}

  grid-column: main;
  text-align: center;

  >* {
    margin-bottom: 2rem;
  }

  ${mq.md(
    css`
      grid-row: 2;
      grid-column: left-edge;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      >* {
        max-width: 10rem;
        justify-self: end;

        &:first-child {
          margin-top: 8rem;
        }
        &:last-child {
          margin-bottom: 8rem;
        }
      }
    `
  )};
`
BlogSingleFooter.defaultProps = {
  fontSize: 0,
  mt: [2,0],
  mb: ['3rem',5,5,0],
}


/////

export const BlogSingleAfterPost = styled.div`
  grid-row: 4;
  grid-column: left-edge / end;
  justify-self: center;

  .EkPost__author {
    ${mq.sm(
      css`
        width: 50vw;
        margin-left: auto;
        margin-right: auto;
      `
    )};
    ${mq.md(
      css`width: 37.5vw;`
    )};
  }
`

////

export const DividerImg = styled.div`
  ${space}

  text-align: center;

  ${mq.xs(
    css`
      // display: none;
    `
  )};
  ${mq.md(
    css`
      display: block;
      text-align: right;
      margin-right: -1rem;
      margin-bottom: -5rem;
    `
  )};

  img {
    transform: rotate(42deg);
    width: 16.667%;
    max-width: 5rem;

    ${mq.md(
      css`
        transform: none;
        width: 4rem;
      `
    )};
  }
`
DividerImg.defaultProps = {
  mt: [0,0,0,-4],
  mb: [-2,-2,3],
}