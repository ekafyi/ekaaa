import styled from 'styled-components'
import theme from '../../../data/theme'

export const LandingTitle = styled.h1.attrs({
  className: 'LandingTopBlock__LandingTitle',
})`
  padding: 1rem 0;
  text-transform: lowercase;
  font-size: 3rem;
  line-height: 0.8;
  @media (min-width: 544px) {
    font-size: 3.5rem;
  }

  .hi {
    color: ${theme.colors.accentMain};
  }
  .wave-emoji {
    font-size: 0.875em;
  }
  .im {
    color: ${theme.colors.accentMain};
    margin-right: 0.15em;
    letter-spacing: -0.035em;
    font-size: 5.5rem;
    @media (max-width: 320px) {
      font-size: 4.5rem;
    }
    @media (min-width: 768px) {
      margin-right: 0.2em;
      font-size: 12.5vw;
    }
  }
  .eka {
    letter-spacing: -0.02em;
    font-size: 7rem;
    @media (min-width: 768px) {
      font-size: 15vw;
    }
  }
`
