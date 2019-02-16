import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import { Layout, SEO } from '../layouts'
import { PostList } from '../components/PostList'
//import Pagination from '../components/Pagination'
import { XLargeTitle } from '../components/Typography'
import { 
  BlogIndexWrapper, 
  BlogIndexSide, 
  BlogIndexMain, 
  BlogTitleWrapper,
  PostGroup,
  PostGroupTitle,
} from '../components/BlogIndex'
import Sidebar from '../components/Sidebar'


class BlogList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO />
        <BlogIndexWrapper>
          <BlogTitleWrapper>
            <XLargeTitle>blog</XLargeTitle>
          </BlogTitleWrapper>
          <BlogIndexSide>
            <Sidebar />
          </BlogIndexSide>
          <BlogIndexMain>
            <PostGroup>
              <PostGroupTitle>
                <div>
                  all entries
                </div>
              </PostGroupTitle>
              <div>
                <PostList posts={posts} />
              </div>
            </PostGroup>
          </BlogIndexMain>
        </BlogIndexWrapper>

        {/* // don't remove, use as pagination example
        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        /> */}
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
      filter: { 
        fields: {
          slug: {
            regex: "\/blog\/"
          }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 280)
          html
          timeToRead
          fields {
            fullSlug: slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            description
            externalUrl
            language
            location
            tags
            title
          }
        }
      }
    }
  }
`
