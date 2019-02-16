import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '../layouts'
import { 
  BlogSingleWrapper, 
  BlogSingleAfterPost,
} from '../components/BlogSingle'
import BioCard from '../components/BioCard'
import PostContent from '../components/PostContent'


class LinkPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    // add data for LinkPostContent component
    const linkProps = {
      fullSlug: post.fields.fullSlug.replace('/blog/', ''),
      externalUrl: post.frontmatter.externalUrl,
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      location: post.frontmatter.location,
      timeToRead: post.timeToRead,
      language: post.frontmatter.language || 'en',
      tags: post.frontmatter.tags || [],
      html: post.html || '',
    }

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageFb={
            post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
          }
          imageTw={
            post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
          }
          lang={post.frontmatter.language}
          // path={post.frontmatter.sssslug}
          isBlogPost
        />
        <BlogSingleWrapper>
          <PostContent 
            {...linkProps}
            postLayout="link"
          />
          <BlogSingleAfterPost>
            <BioCard className="EkPost__author" />
          </BlogSingleAfterPost>
        </BlogSingleWrapper>
      </Layout>
    )
  }
}

export default LinkPostTemplate

export const pageQuery = graphql`
  query LinkPostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt
      html
      fields {
        fullSlug: slug
      }
      frontmatter {
        date(formatString: "DD MMM YYYY")
        externalUrl
        language
        location
        tags
        title
      }
    }
  }
`