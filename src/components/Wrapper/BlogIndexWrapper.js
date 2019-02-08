import styled, { css } from 'styled-components'
import { mq } from '../../../data/mq'
import OuterWrapper from './OuterWrapper'

const BlogIndexWrapper = styled(OuterWrapper).attrs({
  as: 'main',
  role: 'main',
})`

  ${mq.xs(
    css`
      display: grid;
      grid-template-columns: 
        [left-edge] 3fr 
        [left-gap] 1fr 
        [main] 8fr 
        [right-gap] 1fr 
        [right-edge] minmax(12rem, 3fr);
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

  .temp-group-title {
    margin-bottom: 1rem;
  }
`

export default BlogIndexWrapper

////

export const BlogIndexSide = styled.div`
  grid-column: right-edge;
  margin-bottom: 1rem;
`

////

export const BlogIndexMain = styled.div`
  order: -1;
  grid-column: left-edge / right-gap;
`

////