import styled, { css } from 'styled-components'
import { lineHeight, fontSize, fontWeight, space } from 'styled-system'
import { mq } from '../../../data/mq';
import theme from '../../../data/theme'

import { LargeP } from '../Typography'

const topImageSmModern = css`
  margin: 3rem 0;

  svg {
    float: left;
    width: 50%;
    height: 50vw;
    min-width: 14rem;
    min-height: 14rem;
    max-width: 16rem;
    max-height: 16rem;
    margin-left: -4rem;
    padding-right: 8%;
    shape-outside: polygon(
      1.42% 99.5%,
      65.83% 99.37%,
      68.75% 98.12%,
      63.17% 94.87%,
      46.02% 56%,
      55.12% 56.88%,
      64.08% 53.65%,
      58.75% 46.43%,
      47.2% 37.13%,
      37.4% 23.08%,
      43.29% 18.72%,
      45.33% 6%,
      41.92% 0.38%,
      0.83% 0.88%
    );
    shape-margin: 1.25rem;
  }
`

const topImageSmFallback = css``

const topImageMdUp = css`
  display: flex;

  > img,
  > svg {
    margin-left: -2rem;
    width: 18%;
    min-width: 10rem;
  }
`

export const TopIllustration = styled.div`
  grid-column: 1/3;
  grid-row: intro;

  @media (max-width: 767px) {
    ${topImageSmModern}
  }
  @media (min-width: 544px) {
    padding-left: 8vw;
  }
  @media (min-width: 768px) {
    padding-left: 0;
    ${topImageMdUp}
  }
`

// const teststyle = css`background: purple;`

export const MidIllustration = styled.div`
  ${'' /* ${mq.xs(teststyle)}; */}

  text-align: center;
  margin: 2rem 0;
  @media (min-width: 544px) {
    order: -1;
    img {
      width: 50%;
    }
  }
  @media (min-width: 768px) {
    width: 75%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 2rem;
    img {
      width: 60%;
      min-width: 19rem;
    }
  }
  @media (min-width: 992px) {
    padding-bottom: 0rem;
    img {
      width: 55%;
    }
  }
  @media (min-width: 1200px) {
    img {
      width: 45%;
      max-width: 32rem;
    }
  }
`

export const TextWithShapedImage = styled.p`
  ${fontSize}
  ${lineHeight}

  max-width: 30rem;
  padding-top: 1.5rem;
  padding-right: 6vw;
  padding-bottom: 1rem;
  padding-left: 20%;
  @media (min-width: 544px) {
    max-width: 40rem;
    padding-top: 2.5rem;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    display: none;
  }

  ${'' /* !TODO to refactor */}
  color: ${theme.colors.accentMain};
  a {
    color: ${theme.colors.fg};
    &:not(:hover):not(:focus) {
      text-decoration: none;
    }
  }
`
TextWithShapedImage.defaultProps = {
  fontSize: [3, 'calc(1.265625em + .1vw)', 4],
  lineHeight: 2,
}

export const ShapesGroup = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  width: 18.75%;
  min-width: 15rem;
  height: 2rem;
  background: #1942c7;
  @media (min-width: 768px) {
    //display: initial !important;
  }
`

export const SvgSpeechBalloon = styled.svg`
  position: absolute;
  left: 15vw;
  width: 8rem;
  height: 3.5rem;
  margin-top: 1rem;
  @media (min-width: 544px) {
    left: 18vw;
  }
  @media (min-width: 768px) {
    left: 14vw;
    width: 18%;
    height: 9vw;
  }
  @media (min-width: 992px) {
    left: 10vw;
    margin-top: calc(0.5rem + 2vw);
  }
  @media (min-width: 1200px) {
    left: 9vw;
    width: 20%;
    max-width: 12rem;
    height: 9vw;
    margin-top: 0;
  }
`

export const SvgDividerTriangle = styled.svg`
  transform: rotate(15deg);
  grid-row: 2;
  justify-self: center;

  ${mq.xs(css`
    grid-row: initial;
    justify-self: flex-end;
    width: 15vw;
    height: 15vw;
    margin-right: -5vw;
    margin-bottom: -2.5vw;
  `)};
  ${mq.sm(css`
    width: 16vw;
    height: 16vw;
    margin-right: -6vw;
    margin-bottom: -5vw;
  `)};
  ${mq.md(css`
    margin-right: -7.5vw;
  `)};
  ${mq.lg(css`
    width: 14vw;
    height: 14vw;
    max-width: 20rem;
    max-height: 20rem;
    position: absolute;
    left: -4vw;
    margin-top: -6vw;
  `)};
`

export const SvgFooterLines = styled.svg`
  color: #1942c7;
  padding-bottom: 1rem;
  margin-right: -1rem;
  float: right;
  width: 60%;
  width: 60vw;
  height: 30vw;
  min-height: 10rem; // for browsers that don't support vw unit

  ${mq.xs(css`
    padding-bottom: 0;
    margin-right: -0.5rem;
    width: 50%;
    width: 50vw;
    height: 25vw;
  `)};
  ${mq.sm(css`
    float: none;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
    width: 40vw;
    height: 20vw;
  `)};
  ${mq.md(css`
    width: 30%;
    width: 30vw;
    height: 15vw;
    max-width: 32rem;
    max-height: 16rem;
  `)};
`