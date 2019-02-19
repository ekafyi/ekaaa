import styled from 'styled-components'
import { fontSize, space } from 'styled-system'
import theme from '../../data/theme'


const SkipLink = styled.a`
  ${fontSize}

  background: #fff;
  color: ${theme.colors.bg};

  display: inline-block;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;

  &:focus {
    opacity: 1;
    z-index: 99;
  }
`
SkipLink.defaultProps = {
  fontSize: 4,
}
export default SkipLink