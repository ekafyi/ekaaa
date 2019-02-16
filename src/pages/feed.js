import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Moment from 'react-moment'

import { Layout, SEO } from '../layouts'
import { PostList } from '../components/PostList'
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

const _ = require('lodash')
const { groupBy } = require('lodash')


class BlogListMonth extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    const monthGroups = _(posts)
      .filter(item => !item.node.fields.fullSlug.startsWith('/blog/posts/'))
      .groupBy(x => x.node.frontmatter.month)
      .map((value, key) => ({ month: key, posts: value }))
      .value()

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO />
        <BlogIndexWrapper>
          <BlogTitleWrapper>
            <XLargeTitle>feed</XLargeTitle>
          </BlogTitleWrapper>
          <BlogIndexSide>
            <Sidebar />
          </BlogIndexSide>
          <BlogIndexMain>
            {monthGroups.map(monthGroup => {
              const { month, posts } = monthGroup
              return (
                <PostGroup key={month}>
                  <PostGroupTitle>
                    <div>
                      <Moment parse="YYYY-MM" format="MMMM YYYY">
                        {month}
                      </Moment>
                    </div>
                  </PostGroupTitle>
                  <div>
                    <PostList posts={posts}/>
                  </div>
                </PostGroup>
              )
            })}
          </BlogIndexMain>
        </BlogIndexWrapper>
      </Layout>
    )
  }
}

export default BlogListMonth

export const pageQuery = graphql`
  query {
    meta: site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fields: {
          slug: {
            regex: "\/blog\/"
          }
        }
      }
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
						month: date(formatString: "YYYY-MM")
            tags
            title
          }
        }
      }
    }
  }
`