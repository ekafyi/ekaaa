import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'
import { unbutton } from '../mixins'

export const ShareCardWrapper = styled.div`
  ${fontSize}
  ${lineHeight}
  ${space}

  text-transform: lowercase;
  position: relative;

  br {
    display: none;

    ${mq.md(
      css`
        display: initial;
      `
    )};
  }

  *[role="alert"] {
    color: ${theme.colors.accentFg};
  }
`
ShareCardWrapper.defaultProps = {
  fontSize: ['1rem', 'inherit'],
  lineHeight: 3,
  pb: [2,0],
}

///

export const ShareCardTitle = styled.div`
  ${fontSize}
  ${space}

  // color: ${theme.colors.accentMain};

  ${mq.md(
    css`
      display: none;
    `
  )};
`
ShareCardTitle.defaultProps = {
  fontSize: 4,
  // mb: 1,
}

////

// generic style to extend
const ActionButton = styled.a`
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: ${theme.borders[0]};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 1.1em auto;
  padding-left: 1.5em !important;
  padding-bottom: 1px !important;

  &:hover,
  &:focus {
    border-bottom-color: transparent;
  }
`

/////

export const TweetButton = styled(ActionButton)`
  border-bottom-color: #1da1f2;
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24"><path fill="%231da1f2" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></svg>'),url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg"/>');

  &:hover,
  &:focus {
    color: #1da1f2;
  }
`

/////

export const CopyButton = styled(ActionButton).attrs({
  as: 'button',
  type: 'button',
})`
  ${unbutton};

  border-bottom: solid ${theme.borders[0]} ${theme.colors.accentFg};
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24"><path fill="yellow" d="M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z"/></svg>'),url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg"/>');

  &:hover,
  &:focus {
    color: ${theme.colors.accentFg};
  }

  &:hover {
    cursor: pointer;
  }
`

/////

export const RssButton = styled(ActionButton)`
  border-bottom-color: orange;
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24"><path fill="orange" d="M6.18,15.64C7.38,15.64 8.36,16.62 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82C4,16.62 4.98,15.64 6.18,15.64M4,4.44C12.59,4.44 19.56,11.41 19.56,20H16.73C16.73,12.97 11.03,7.27 4,7.27V4.44M4,10.1C9.47,10.1 13.9,14.53 13.9,20H11.07C11.07,16.1 7.9,12.93 4,12.93V10.1Z"/></svg>'),url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg"/>');

  &:hover,
  &:focus {
    color: orange;
  }
`