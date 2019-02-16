import React from 'react'
import { storiesOf } from '@storybook/react'
import { Layout } from '../layouts'
import { 
  BlogIndexWrapper, 
  BlogIndexSide, 
  BlogIndexMain, 
  BlogTitleWrapper,
  PostGroup,
  PostGroupTitle,
} from '../components/BlogIndex'
import { 
  BlogSingleWrapper, 
  BlogSingleBody,
  BlogSingleHeader,
  BlogSingleFooter,
  BlogSingleAfterPost,
  DividerImg
} from '../components/BlogSingle'
import { 
  XLargeTitle, 
} from '../components/Typography'
import BioCard from '../components/BioCard'
import MetaList from '../components/MetaList'
import ShareCard from '../components/ShareCard'
import lines from '../assets/divider-diag-lines.png'
import PostContent from '../components/PostContent'
import ArticlePostListItem from '../components/PostList/ArticlePostListItem'
import LinkPostListItem from '../components/PostList/LinkPostListItem'
import NotePostListItem from '../components/PostList/NotePostListItem'

const dummyPost1 = {
  title: 'Fix missing NPM after upgrading to Mac OS High Sierra',
  description: 'Aliquam imperdiet lectus non diam bibendum elementum. Donec scelerisque congue auctor.',
  fullSlug: 'posts/foo',
  postType: 'article',
  date: '12 Feb 2019',
}
const dummyPost2 = {
  title: 'Building My Personal Site — Part 2: Setting Up Gatsby with a Starter Site',
  description: 'Quia placeat ratione enim voluptatem nihil eveniet repudiandae blanditiis quos.',
  fullSlug: 'posts/bar',
  postType: 'article',
  date: '11 Feb 2019',
  tags: ['foo', 'bar', 'baz'],
}
const dummyPost3 = {
  title: 'Ut lacinia sit amet urna sed molestie',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  fullSlug: 'posts/baz',
  postType: 'article',
  date: '8 Feb 2019',
}
const dummyLink1 = {
  externalUrl: 'https://css-tricks.com/where-do-you-learn-html-css-in-2019/', 
  title: 'Where Do You Learn HTML & CSS in 2019?',
  html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sit amet urna sed molestie. Cras cursus dolor eu massa porttitor, convallis pharetra velit finibus. Quisque et dui dignissim, dapibus libero eu, accumsan tellus.</p>',
  fullSlug: 'links/learn-html-css',
  postType: 'link',
  date: '13 Feb 2019',
}
const dummyLink2 = {
  externalUrl: 'https://magenta.as/how-my-brain-damaged-mother-changed-how-i-look-at-interface-design-9d2a06f042a1', 
  title: 'How My Brain-Damaged Mother Changed How I Look at Interface Design',
  html: '<p>Nullam consectetur, massa quis vehicula commodo, nulla neque ultrices risus, id blandit velit massa vulputate neque. Aenean gravida enim ex, eu dignissim urna elementum non. Curabitur ornare malesuada arcu, ac vehicula nunc aliquam quis.</p>',
  fullSlug: 'links/how-my-brain-damaged-mother',
  postType: 'link',
  date: '12 Feb 2019',
}
const dummyNote1 = {
  html: '<p>Pellentesque nec lectus dignissim, facilisis metus eu, pharetra urna. Aenean suscipit dolor in tortor placerat, ac viverra nisl imperdiet. Duis viverra venenatis tellus bibendum tempus. Integer tempor purus non enim mattis tincidunt. Duis sed urna nec quam condimentum volutpat at vitae lectus. Maecenas laoreet nulla et scelerisque condimentum. Nulla nec auctor ante.</p>',
  fullSlug: 'notes/note-one',
  postType: 'note',
  date: '9 Feb 2019',
}


storiesOf('Templates', module).add('blog index', () => (
  <Layout viewType="blog">
    <BlogIndexWrapper>
      <BlogTitleWrapper>
        <XLargeTitle>posts</XLargeTitle>
      </BlogTitleWrapper>
      <BlogIndexSide>
        <h2 style={{ marginBottom: 16 }}>hi!</h2>
        <p style={{ lineHeight: '1.425', fontSize: 14 }}>My name is Eka. I build nice websites and web interfaces for fun and profit. Welcome to my blog! Read more about me blablabla ></p>
      </BlogIndexSide>
      <BlogIndexMain>
        <PostGroup>
          <PostGroupTitle>
            <div>
              February 2019
              {/* <span style={{ fontSize: '1.5rem' }}><br/>2019</span> */}
            </div>
          </PostGroupTitle>
          <div>
            <NotePostListItem {...dummyNote1} />
            <LinkPostListItem {...dummyLink1} />
            <LinkPostListItem {...dummyLink2} />
          </div>
        </PostGroup>
        <PostGroup>
          <PostGroupTitle>
            <div>
              January 2019
            </div>
          </PostGroupTitle>
          <div>
            <ArticlePostListItem {...dummyPost2} />
            <ArticlePostListItem {...dummyPost1} />
            <ArticlePostListItem {...dummyPost3} />
            <ArticlePostListItem {...dummyPost2} />
          </div>
        </PostGroup>
      </BlogIndexMain>
    </BlogIndexWrapper>
  </Layout>
))

storiesOf('Templates', module).add('blog single, wrapper', () => (
  <Layout viewType="blog">
    <BlogSingleWrapper>
      {/* content wrapper */}
        <BlogSingleHeader>
          <h2>Title and stuff</h2>
          <div>and more stuff</div>
        </BlogSingleHeader>
        <BlogSingleBody>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sit amet urna sed molestie. Cras cursus dolor eu massa porttitor, convallis pharetra velit finibus. Quisque et dui dignissim, dapibus libero eu, accumsan tellus. Nullam consectetur, massa quis vehicula commodo, nulla neque ultrices risus, id blandit velit massa vulputate neque. Aenean gravida enim ex, eu dignissim urna elementum non. Curabitur ornare malesuada arcu, ac vehicula nunc aliquam quis. Nullam at lacus consectetur, consequat lacus sit amet, auctor lorem. Vivamus id mauris ac diam dignissim pulvinar eu vel nibh.</p>
          <p>Morbi interdum enim nisl, ac porttitor dui sodales sit amet. Aenean dignissim accumsan lacus vitae hendrerit. Sed eget aliquet ipsum, sed rhoncus nulla. Pellentesque nec lectus dignissim, facilisis metus eu, pharetra urna. Aenean suscipit dolor in tortor placerat, ac viverra nisl imperdiet. Duis viverra venenatis tellus bibendum tempus. Fusce ac magna porttitor, lacinia sapien quis, molestie nulla. Integer tempor purus non enim mattis tincidunt. Duis sed urna nec quam condimentum volutpat at vitae lectus. Maecenas laoreet nulla et scelerisque condimentum. Nulla nec auctor ante.</p>
          <p>Donec fermentum aliquam augue, ut interdum nisi malesuada ut. Maecenas metus justo, gravida eget est ut, sollicitudin accumsan tortor. Mauris elementum urna a risus maximus molestie. Aliquam ultricies vulputate odio. Praesent eget sagittis est, a interdum ligula. Duis rutrum ultricies magna sit amet ullamcorper. Maecenas at mollis mauris. Maecenas sed tortor tellus.</p>
        </BlogSingleBody>
        <BlogSingleFooter>
          <div>
            <ShareCard />
            <DividerImg aria-hidden>
              <img src={lines} role="presentation" alt="" width="80" />
            </DividerImg>
          </div>
          <div>
            <MetaList data={[ { key: "Drinking", value: "Caffè mocha", }, { key: "Listening", value: "Peel Dream Magazine — Shenandoah", } ]} />
          </div>
        </BlogSingleFooter>
      {/* end content wrapper */}
      <BlogSingleAfterPost>
        <BioCard className="EkPost__author" />
      </BlogSingleAfterPost>
    </BlogSingleWrapper>
  </Layout>
))

storiesOf('Templates', module).add('blog single, article', () => (
  <Layout viewType="blog">
    {/* put SEO component here in template file */}
    <BlogSingleWrapper>
      <PostContent 
        // post={post}
        postType="article"
      />
      <BlogSingleAfterPost>
        <BioCard className="EkPost__author" />
      </BlogSingleAfterPost>
    </BlogSingleWrapper>
  </Layout>
))

storiesOf('Templates', module).add('blog single, note', () => (
  <Layout viewType="blog">
    {/* put SEO component here in template file */}
    <BlogSingleWrapper>
      <PostContent 
        // post={post}
        postType="note"
      />
      <BlogSingleAfterPost>
        <BioCard className="EkPost__author" />
      </BlogSingleAfterPost>
    </BlogSingleWrapper>
  </Layout>
))

storiesOf('Templates', module).add('blog single, link', () => (
  <Layout viewType="blog">
    {/* put SEO component here in template file */}
    <BlogSingleWrapper>
      <PostContent 
        // post={post}
        postType="link"
      />
      <BlogSingleAfterPost>
        <BioCard className="EkPost__author" />
      </BlogSingleAfterPost>
    </BlogSingleWrapper>
  </Layout>
))
  