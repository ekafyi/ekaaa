import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout, SEO } from '../layouts'
import { Wrapper } from '../components/Wrapper'
import Hero from '../components/Hero'
import { PostList } from '../components/PostList'
import Pagination from '../components/Pagination'
//import SEO from '../components/SEO'

class BlogList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO />
        <Hero title={siteTitle} />

        <Wrapper>
          <PostList posts={posts} listType="morning-dew" />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: null } } }
      limit: $limit
      skip: $skip
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
