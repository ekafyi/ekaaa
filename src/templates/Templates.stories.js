import React from 'react'
import { storiesOf } from '@storybook/react'
import { Layout } from '../layouts'
import { 
  BlogIndexWrapper, 
  BlogIndexSide, 
  BlogIndexMain, 
  BlogTitleWrapper 
} from '../components/BlogIndex'
import { 
  BlogSingleWrapper, 
  BlogSingleBody,
  BlogSingleHeader,
  BlogSingleFooter,
  BlogSingleAfterPost,
  DividerImg
} from '../components/BlogSingle'
import { XLargeTitle, } from '../components/Typography'
import BioCard from '../components/BioCard'
import MetaList from '../components/MetaList'
import ShareCard from '../components/ShareCard'
import lines from '../assets/divider-diag-lines.png'
import BlogContent from '../components/BlogContent';


storiesOf('Templates', module).add('blog index', () => (
  <Layout viewType="blog">
    <BlogIndexWrapper>
      <BlogTitleWrapper>
        <XLargeTitle>posts</XLargeTitle>
      </BlogTitleWrapper>
      <BlogIndexSide>
        <h2>hi!</h2>
        <p>My name is Eka. I build nice websites and web interfaces for fun and profit. Welcome to my blog! Read more about me blablabla ></p>
      </BlogIndexSide>
      <BlogIndexMain>
        <div className="temp-group">
          <h3 className="temp-group-title">group title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Quia, placeat
            ratione enim voluptatem nihil eveniet repudiandae blanditiis quos.<br/>
            Exercitationem voluptas quibusdam deserunt assumenda repellat tenetur
            dolore ea odit iusto natus?
          </p>
        </div>
        <div className="temp-group">
          <h3 className="temp-group-title">another group title</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Quia, placeat
            ratione enim voluptatem nihil eveniet repudiandae blanditiis quos.<br/>
            Exercitationem voluptas quibusdam deserunt assumenda repellat tenetur
            dolore ea odit iusto natus?
          </p>
        </div>
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
      <BlogContent 
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
      <BlogContent 
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
      <BlogContent 
        // post={post}
        postType="link"
      />
      <BlogSingleAfterPost>
        <BioCard className="EkPost__author" />
      </BlogSingleAfterPost>
    </BlogSingleWrapper>
  </Layout>
))
  