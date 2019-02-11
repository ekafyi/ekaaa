import React from 'react'
import { storiesOf } from '@storybook/react'
import ShareCard from './ShareCard'

storiesOf('Components/ShareCard', module).add('default', () => (
  <div style={{ padding: '2rem', maxWidth: 300 }}>
    <ShareCard 
      postUrl="https://ekaaa.me/post/blah"
      postTitle="Adding SVG to your Gatsby site"
    />
  </div>
))