import styled, { css } from 'styled-components'
import { fontSize, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'


const ToTopLink = styled.a`
  ${fontSize}

  background: ${theme.colors.accentFg};
  color: ${theme.colors.bg};

  display: inline-block;
  border-radius: 50%;
  position: fixed;
  top: .25rem;
  right: .25rem;
  z-index: 2; // above other regular elements, but under headernav
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  text-decoration: none;

  ${mq.sm(
    css`
      display: none;
    `
  )};
`
ToTopLink.defaultProps = {
  //fontSize: 4,
}
export default ToTopLink