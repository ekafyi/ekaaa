import styled, { css } from 'styled-components'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'
import { bodyLinkStyle } from '../../mixins';

const cssgrid = css`
  display: grid;
`

export const LandingTopBlock = styled.section`
  ${cssgrid}
  @media (min-width: 768px) {
    grid-template-rows: [title] auto [intro] minmax(45vw, auto) [body] auto;
  }
  @media (min-width: 992px) and (orientation: landscape) {
    grid-template-columns: [edge] minmax(0, 1fr) [main] minmax(60rem, 11fr) minmax(
        0,
        4fr
      );
    grid-template-rows: [title] 40vh [intro] minmax(58vh, auto) [body] auto;
  }
  @media (min-width: 1440px) and (orientation: landscape) {
    grid-template-rows: [title] 37.5vh [intro] minmax(37.5vh, auto) [body] auto;
  }

  ${'' /* // CSS selector to style LandingTitle as child of LandingTopBlock */}
  .LandingTopBlock__LandingTitle {
    grid-column: 1/3;
  }
`

export const LandingMidBlock = styled.div`
  @media (min-width: 544px) {
    display: grid;
  }
  @media (min-width: 768px) {
    display: flex;
    min-height: 100vh;
  }
  ${mq.smUpPortrait(css`
    min-height: 60vh;
  `)};
`

export const LandingBottomBlock = styled.div`
  ${cssgrid}
  @media (min-width: 992px) {
    grid-template-columns:
      [edge] minmax(0, 1fr) [main] minmax(60rem, 11fr) minmax(0, 3fr)
      minmax(0, 1fr);
    > * {
      grid-column: 2/4;
    }
  }
`

export const LandingTextWrapper = styled.div`
  ${cssgrid}
  grid-column: 1/3;
  grid-gap: 1rem 3rem;
  @media (min-width: 544px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column: main;
  }

  ${'' /* !TODO - nanti pindahin */}
  line-height: ${theme.lineHeights[2]};
`

export const LandingIntroWrapper = styled(LandingTextWrapper)`
  grid-row: intro;
  align-items: center;
  display: none;
  @media (min-width: 768px) {
    display: grid;
  }

  > * {
    grid-column: 1/4;
    margin: 4rem 0;
    @media (min-width: 768px) {
      grid-column: 2/4;
      max-width: 30rem;
    }
    @media (min-width: 992px) {
      grid-column: 2/4;
      max-width: 35rem;
    }
  }

  ${'' /* !TODO to refactor (make same component as TextWithShapedImage) */}
  color: ${theme.colors.accentMain};

  a {
    ${bodyLinkStyle(theme.colors.accentMain, theme.colors.fg)};
  }
`

const wideColStyle = css`
  article:first-child {
    @media (min-width: 992px) {
      grid-column: 1/3;
    }
  }
  article:nth-child(2) {
    @media (min-width: 992px) {
      grid-column: 3/5;
    }
  }
`
export const LandingPosts = styled.div`
  ${cssgrid}
  grid-gap: 1rem 3rem;
  @media (min-width: 544px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  ${props => props.childColWidth && wideColStyle}
`
// proptypes `childColWidth`
