import { modularScale } from 'polished'

/*///////////////////////
// Usage 
/////////////////////////

// in styled-component (no styled-system)

import theme from '../../data/theme';
const Foo = styled.div`background-color: ${theme.colors.brand};`

// in styled-component (with styled-system)

import { color } from 'styled-system'; // see full API below
const Foo = styled.div`${color}`
Foo.defaultProps = { bg: 'green' } 
render(<Foo bg="brand" />)

///////////////////////*/

const baseFontSize = '1rem'

const theme = {

  // The `theme` object is passed to `Layout` through styled-componentsʼ 
  // `ThemeProvider`: https://www.styled-components.com/docs/advanced#theming

  // We can use it as a regular object (eg. as CSS value), but it is 
  // also used by styled-system to override its own default theme values.
  // https://github.com/jxnblk/styled-system/blob/master/docs/api.md
  // https://github.com/jxnblk/styled-system/blob/master/docs/table.md

  // To override, make an object with same name as "Theme Field" in table above
  // (eg. Override values for `color` function/prop with `colors` object)


  // ◼
  // default breakpoints = [ '40em', '52em', '64em' ]
  breakpoints: [ 544, 768, 992, 1200, 1440 ],

  // ◼
  // import { space } from 'styled-system'
  // default spaces: [ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]
  

  // ◼
  // import { fontSize } from 'styled-system'
  // default fontSizes: [ 12, 14, 16, 20, 24, 32, 48, 64, 72 ]
  // modular scale "major second": https://www.modularscale.com/?16&px&1.125
  fontSizes: [
    modularScale(-2, baseFontSize, 'majorSecond'), // 0 - for copyright / small print
    modularScale(-1, baseFontSize, 'majorSecond'), // 1 - for small body copy
    modularScale(0, baseFontSize, 'majorSecond'), // 2 - default (1rem)
    modularScale(2, baseFontSize, 'majorSecond'), // 3 - for intro text xs, sm
    modularScale(3, baseFontSize, 'majorSecond'), // 4 - for post title
    modularScale(5, baseFontSize, 'majorSecond'), // 5 - for section (eg. bio) title

    // !TEMP
    modularScale(7, baseFontSize, 'majorSecond'), // 6
    modularScale(9, baseFontSize, 'majorSecond'), // 7 - for SectionTitle xs
    modularScale(12, baseFontSize, 'majorSecond'), // 8 - for SectionTitle sm & md
    modularScale(14, baseFontSize, 'majorSecond'), // 9 - for SectionTitle lg up
  ],

  // ◼
  // import { color } from 'styled-system'
  colors: {
    bg: 'hsla(227, 60%, 27%, 1)',
    fg: 'hsla(0, 0%, 100%, 1)',

    accentMain: 'hsla(9, 100%, 75%, 1)', // main "brand" color
    accentBg: 'red', // accent color close to background (eg. navy on a white background)
    accentFg: 'yellow', // accent color close to foreground (eg. yellow on a white background)

    fgMuted: [
      'hsla(227, 50%, 80%, 1)',
      'hsla(227, 50%, 80%, 1)',
      'hsla(227, 50%, 80%, 1)',
      'hsla(227, 70%, 55%, 1)', // used for theme picker
    ]
  },


  // Other functions (`fontFamily`, `lineHeight`, etc) have same usage 
  // as core functions above, eg. 
  // import { borderRadius }  from "styled-system"
  // export const Foo = styled.div`${borderRadius}`

  lineHeights: [ 1, 1.25, 1.425, 1.6 ], // !TODO tambahin '1.125'

  fonts: {
    sans: '"Inter", "Helvetica Neue", "Arial", "sans-serif"',
    serif: '"Times New Roman", "Times", "serif"',
    // sans: '"system-ui", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Segoe UI", "Arial", "sans-serif"',
  },

  fontWeights: {
    body: '500',
    head: '600',
  },

  borders: ['0.125rem', '0.25rem', '0.5rem'], // !TODO tambahin '0.0625rem'

  // "Variants" are used to define sets of reusable custom styles
  // https://github.com/jxnblk/styled-system/blob/master/docs/api.md#variants

  textStyles: {},

  colorStyles: {},

  buttons: {},

}

export default theme