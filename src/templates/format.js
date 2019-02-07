import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout, SEO } from '../layouts'
import { PostList } from '../components/PostList'
import { Wrapper } from '../components/Wrapper'
//import SEO from '../components/SEO'
import Hero from '../components/Hero'

class PostFormatPage extends React.Component {
  render() {
    const pageTitle = `${this.props.pageContext.post_format}`
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} viewType="blog" title={pageTitle}>
        <SEO title={pageTitle} />
        <Hero title={pageTitle} />

        <Wrapper>
          <h1>{this.props.pageContext.post_format}</h1>
          <PostList posts={posts} listType="morning-dew" />
        </Wrapper>
      </Layout>
    )
  }
}

export default PostFormatPage

export const pageQuery = graphql`
  query PostsByFormat($post_format: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { post_format: { eq: $post_format } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            tags
            language
            slug
            post_format
          }
        }
      }
    }
  }
`
