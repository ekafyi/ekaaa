import styled, { css } from 'styled-components'
import { color, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'

// !TODO: fix proportions etc

const LeftColItems = css`
  text-align: right;
  z-index: 1;
`

export const SocLinks = styled.ul`
  // !TODO ini bikin mixin inline
  padding: 0;
  margin: 1rem 0;
  list-style: none;
  text-transform: lowercase;

  li {
    display: inline-block;
    margin-right: 1rem;
    @media (min-width: 544px) {
      display: block;
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const PrimarySocLinks = styled(SocLinks)`
  font-size: 1.5em;
  @media (min-width: 544px) {
    font-size: 2.25em;
    grid-row: 2/4;
    grid-column: 2/3;

    &:before {
      content: '';
      background: #00125d;
      width: 0.5rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(50% - 2rem);
    }
  }
`

export const SecondarySocLinks = styled(SocLinks)`
  font-size: 1.25em;
  @media (min-width: 544px) {
    ${LeftColItems}
    grid-row: 3;
  }

  a {
    &:hover {
      color: yellow;
    }
  }
`

export const SocLinkAnchor = styled.a`
  color: ${props => (props.color ? props.color : '#fff')};
`

export const SocialHighlightContainer = styled.section`
  ${space}

  @media (min-width: 544px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 3.25rem 20rem;
    grid-gap: 0 2rem;
    position: relative;
    padding-top: 4rem;
  }
  @media (min-width: 768px) {
    grid-template-rows: auto 3.25rem 40rem;
    padding-top: 0;
    width: 30em;
    position: absolute;
    right: -14em;
    transform: rotate(-30deg) translateY(-3vw);
    font-size: calc(0.4em + 1vw);
    margin-top: 1rem;
    order: -1;
  }
  @media (min-width: 992px) {
    right: -8em;
    margin-top: 0;
  }
`
SocialHighlightContainer.defaultProps = {
  my: [5, 0],
}

export const SocialHighlightTitle = styled.h3`
  ${fontSize}

  margin-bottom: 2rem;
  @media (min-width: 544px) {
    ${LeftColItems}
    margin-bottom: 0;
  }
`
SocialHighlightTitle.defaultProps = {
  fontSize: [6, 5],
}
