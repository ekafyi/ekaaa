import React from 'react'
import { storiesOf } from '@storybook/react'
import { Layout } from '../layouts'
import { BlogIndexWrapper } from '../components/Wrapper'
import { XLargeTitle } from '../components/Typography'

storiesOf('Templates', module).add('blog index', () => (
  <Layout viewType="blog">
    <XLargeTitle>posts</XLargeTitle>
    <BlogIndexWrapper>
      <div className="temp-sidebar">
        <h2>hi!</h2>
        <p>My name is Eka. I build nice websites and web interfaces for fun and profit. Welcome to my blog! Read more about me blablabla ></p>
      </div>
      <div className="temp-content">
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
      </div>
    </BlogIndexWrapper>
  </Layout>
))