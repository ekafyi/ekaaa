import React from 'react'
import { storiesOf } from '@storybook/react'
import TagList from './TagList'

const dummyTags = [
  "frontend", 
  "react", 
  "performance",
]

storiesOf('Components/TagList', module).add('default', () => (
  <div style={{ padding: '2rem' }}>
    <TagList tags={dummyTags} />
  </div>
))