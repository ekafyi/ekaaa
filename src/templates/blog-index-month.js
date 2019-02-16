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


class BlogList extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { pageContext } = this.props
    let pageTitle
    if (pageContext.pathSlug) {
      if (pageContext.pathSlug === '\/blog\/') {
        pageTitle = 'blog'
      } else {
        pageTitle = pageContext.pathSlug.replace('/blog/', '').replace('/', '')
      }
    }

    const monthGroups = _(posts)
      .groupBy(x => x.node.frontmatter.month)
      .map((value, key) => ({ month: key, posts: value }))
      .value()

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO />
        <BlogIndexWrapper>
          <BlogTitleWrapper>
            {pageTitle && (
              <XLargeTitle>
                {pageTitle}
              </XLargeTitle>
            )}
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

export default BlogList

export const pageQuery = graphql`
  query blogListMonthQuery($pathSlug: String!) {
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
            regex: $pathSlug
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