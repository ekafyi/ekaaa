import React from 'react'
import { storiesOf } from '@storybook/react'
import MetaList from './MetaList'

const dummyMeta = [
  {
    icon: "☕️", 
    key: "Drinking",
    value: "Caffè mocha",
  },
  {
    icon: "🎵", 
    key: "Listening",
    value: "Peel Dream Magazine — Shenandoah",
  },
  { 
    key: "Feeling",
    value: "Huh?",
  },
]

storiesOf('Components/MetaList', module).add('default', () => (
  <div style={{ padding: '2rem' }}>
    <h4 style={{ marginBottom: 24 }}>no icon</h4>
    <MetaList data={dummyMeta} />
    <hr style={{ marginTop: 24, marginBottom: 24 }} />
    <h4 style={{ marginBottom: 24 }}>with icon</h4>
    <MetaList data={dummyMeta} doesShowIcon />
  </div>
))