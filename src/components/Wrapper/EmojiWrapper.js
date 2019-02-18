import styled from 'styled-components'

const EmojiWrapper = styled.span.attrs({
  role: props => (props.isHidden ? 'presentation' : 'img'),
  'aria-label': props => props.ariaLabel || '',
  'aria-hidden': props => (props.isHidden ? true : false),
  className: 'emoji-wrapper' // example
})``

export default EmojiWrapper
