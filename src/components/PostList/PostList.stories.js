import React from 'react'
import { storiesOf } from '@storybook/react'
// import { PostList } from './PostList'
import LandingPostListItem from './LandingPostListItem'
import OldPostListItem from './OldPostListItem'
import RelatedPostListItem from './RelatedPostListItem'
import ArticlePostListItem from './ArticlePostListItem'
import NotePostListItem from './NotePostListItem'
import LinkPostListItem from './LinkPostListItem'


const dummyArticlePost = {
  title: 'Building My Personal Site — Part 2: Setting Up Gatsby with a Starter Site',
  description: 'Quia, placeat ratione enim voluptatem nihil eveniet repudiandae blanditiis quos.',
  slug: 'foo',
  postType: 'article',
  date: '11 Feb 2019',
}
const dummyLinkPost = {
  externalUrl: 'https://css-tricks.com/where-do-you-learn-html-css-in-2019/', 
  title: 'Where Do You Learn HTML & CSS in 2019?',
  html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sit amet urna sed molestie. Cras cursus dolor eu massa porttitor, convallis pharetra velit finibus. Quisque et dui dignissim, dapibus libero eu, accumsan tellus. Nullam consectetur, massa quis vehicula commodo, nulla neque ultrices risus, id blandit velit massa vulputate neque. Aenean gravida enim ex, eu dignissim urna elementum non. Curabitur ornare malesuada arcu, ac vehicula nunc aliquam quis.</p>',
  slug: 'bar',
  postType: 'link',
  date: '13 Feb 2019',
}
const dummyNotePost = {
  html: '<p>Pellentesque nec lectus dignissim, facilisis metus eu, pharetra urna. Aenean suscipit dolor in tortor placerat, ac viverra nisl imperdiet. Duis viverra venenatis tellus bibendum tempus. Integer tempor purus non enim mattis tincidunt. Duis sed urna nec quam condimentum volutpat at vitae lectus. Maecenas laoreet nulla et scelerisque condimentum. Nulla nec auctor ante.</>',
  slug: 'note-one',
  postType: 'note',
  date: '9 Feb 2019',
}

// example only, `posts` object uses graphQL data that's too complex to mockup
// storiesOf('Components/PostList', module).add('PostList', () => (
//   <PostList posts={posts} listType="related" />
// ))

storiesOf('Components/PostList', module).add('Landing', () => (
  <div style={{ padding: '2rem' }}>
    <LandingPostListItem {...dummyArticlePost} />
  </div>
))

storiesOf('Components/PostList', module).add('Old (from starter site)', () => (
  <div style={{ padding: '2rem' }}>
    <OldPostListItem {...dummyArticlePost} />
  </div>
))

storiesOf('Components/PostList', module).add('Related', () => (
  <div style={{ padding: '2rem' }}>
    <RelatedPostListItem {...dummyArticlePost} />
  </div>
))

storiesOf('Components/PostList', module).add('Article', () => (
  <div style={{ padding: '2rem' }}>
    <ArticlePostListItem {...dummyArticlePost} />
  </div>
))

storiesOf('Components/PostList', module).add('Note', () => (
  <div style={{ padding: '2rem' }}>
    <NotePostListItem {...dummyNotePost} />
  </div>
))

storiesOf('Components/PostList', module).add('Link', () => (
  <div style={{ padding: '2rem' }}>
    <LinkPostListItem {...dummyLinkPost} />
  </div>
))