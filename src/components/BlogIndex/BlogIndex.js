import styled, { css } from 'styled-components'
import { mq } from '../../../data/mq'
import { OuterWrapper } from '../Wrapper'
import { lineHeight, borders, space } from 'styled-system'

export const BlogIndexWrapper = styled(OuterWrapper)`

  ${mq.xs(
    css`
      display: grid;
      grid-template-columns: 
        [left-edge] 3fr 
        [left-gap] 1fr 
        [main] 8fr 
        [right-gap] 1fr 
        [right-edge] minmax(12rem, 3fr)
        [end];
    `
  )};

  .temp-group {
    margin-bottom: 2rem;
    
    ${mq.sm(
      css`
        display: grid;
        grid-template-columns:
          [inner-left-edge] minmax(10em, 3fr)
          [inner-left-gap] 1fr 
          [inner-main] minmax(20rem, 8fr);
      `
    )};
  }

  .temp-group >*:not(.temp-group-title) {
    grid-column: inner-main;
  }
`

////

export const BlogTitleWrapper = styled.header`
  order: -1;
  grid-column: left-edge / end;
  margin-left: -0.25rem;
`

////

// to extend by Side + Main below
const BlogContentBlock = styled.div`
  ${space}
  ${borders}

  border-top: solid #fff;
`
BlogContentBlock.defaultProps = {
  pt: [3,3,4,4],
  mb: 4,
  borderTop: 2,
}

////

export const BlogIndexSide = styled(BlogContentBlock)`
  grid-column: right-edge;
`

////

export const BlogIndexMain = styled(BlogContentBlock)`
  order: -1;
  grid-column: left-edge / right-gap;
`

////