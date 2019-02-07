import styled from 'styled-components'

const EmojiWrapper = styled.span.attrs({
  role: props => props.role || 'img',
  'aria-label': props => props.ariaLabel || '',
  // className: "emoji-wrapper" // example
})``

export default EmojiWrapper
