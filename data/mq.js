import { css } from 'styled-components'
// import facepaint from 'facepaint'

import theme from './theme'

const customBreakpoints = {
  xs: theme.breakpoints[0],
  sm: theme.breakpoints[1],
  md: theme.breakpoints[2],
  lg: theme.breakpoints[3],
  xl: theme.breakpoints[4],

  xsOnly: '(max-width: ' + (theme.breakpoints[0] - 1) + 'px)',
  xsUpPortrait: '(min-width: ' + theme.breakpoints[0] + 'px) and (orientation: portrait)',
  smUpPortrait: '(min-width: ' + theme.breakpoints[1] + 'px) and (orientation: portrait)',
}

// const mqFp = facepaint(
//   customBreakpoints.map(bp => `@media (min-width: ${bp}px)`)
// )

const mq = Object.keys(customBreakpoints).reduce(
  (accumulator, label) => {
    let prefix =
      typeof customBreakpoints[label] === 'string'
        ? ''
        : '(min-width:'
    let suffix =
      typeof customBreakpoints[label] === 'string' ? '' : 'px)'
    accumulator[label] = cls =>
      css`
        @media ${prefix + customBreakpoints[label] + suffix} {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

export { mq, customBreakpoints }


/*///////////////////////
// usage example  (from MSE)
///////////////////////*/
//
// import { mq, mqFp } from '../../constants/customBreakpoints';
// const foo = css`
//   ${mqFp({
//     width: ['6rem', '8rem', false, false, '10rem'],
//   })};
//   ${mq.xs(css`width: 8rem;`)};
//   // OR!
//   ${mq.xs`width: 8rem;`}
// `