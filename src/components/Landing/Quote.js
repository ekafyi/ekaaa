import styled, { css } from 'styled-components'
import { fontSize, lineHeight, space } from 'styled-system'
import theme from '../../../data/theme'
import { mq } from '../../../data/mq'

export const QuoteContainer = styled.div`
  padding: 0 2rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mq.xs(css`
    min-height: 66vh;
  `)};
  ${mq.sm(css`
    min-height: 82vh;
  `)};
  ${mq.xsUpPortrait(css`
    min-height: 50vh;
  `)};
`

export const QuoteContent = styled.div`
  ${mq.xs(css`
    width: 75%;
  `)};
  @media (min-width: 768px) {
    width: 66%;
    max-width: 32rem;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
`

export const Quote = styled(QuoteContent)`
  ${fontSize}
  ${lineHeight}
  ${space}

  color: ${theme.colors.accentMain};

  &:before {
    content: "“";
    color: ${theme.colors.fg};
    line-height: 1;
    width: 4rem;
    height: 4rem;
    position: absolute;
    text-align: left;
    // font-weight: 400;
    font-size: 3.653em; // from modular scale 11
    margin-top: -0.55em;
    margin-left: -0.25rem;

    ${mq.xs(css`
      font-size: 4.624em;
      margin-top: -0.2em;
      margin-left: -0.6em;
    `)};
    ${mq.sm(css`
      font-size: 5.202em;
      margin-top: -0.25em;
    `)};
    ${mq.md(css`
      font-size: 5.852em;
    `)};
    ${mq.lg(css`
      margin-top: -0.3em;
      margin-left: -0.55em;
    `)};
  }
`
Quote.defaultProps = {
  fontSize: 4,
  lineHeight: 1,
  mb: 3,
}

export const QuoteSource = styled(QuoteContent)`
  ${fontSize}
  ${lineHeight}

  &:before {
    content: '—';
    margin-right: 0.5em;
  }
`
QuoteSource.defaultProps = {
  fontSize: 1,
  lineHeight: 1,
}
