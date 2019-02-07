import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout } from '../layouts'


storiesOf('Layouts', module)
  .add('blog', () => (
    <Layout viewType="blog">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat ratione enim voluptatem nihil eveniet repudiandae blanditiis quos. Exercitationem voluptas quibusdam deserunt assumenda repellat tenetur dolore ea odit iusto natus?
      </div>
    </Layout>
  ));

storiesOf('Layouts', module)
  .add('plain', () => (
    <Layout>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat ratione enim voluptatem nihil eveniet repudiandae blanditiis quos. Exercitationem voluptas quibusdam deserunt assumenda repellat tenetur dolore ea odit iusto natus?
      </div>
    </Layout>
  ));