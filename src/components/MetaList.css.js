import styled, { css } from 'styled-components'
import { OuterWrapper } from '../components/Wrapper'
import { borders, fontSize, lineHeight, space } from 'styled-system'
import theme from '../../data/theme'
import { mq } from '../../data/mq'


export const MetaListWrapper = styled.dl``

////

export const MetaListItem = styled.div`
  ${space}
  ${fontSize}
  ${lineHeight}
`
MetaListItem.defaultProps = {
  mb: 3,
  fontSize: ['1rem', 'inherit'],
  lineHeight: 2,
}

////

export const MetaKey = styled.dt`
  color: ${theme.colors.accentMain};
`

////

export const MetaValue = styled.dd`
  margin-left: 0;
`

////

export const MetaIcon = styled.span`
  font-size: .75em;
`
