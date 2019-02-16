import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '../layouts'
import { 
  BlogSingleWrapper, 
  BlogSingleAfterPost,
} from '../components/BlogSingle'
import BioCard from '../components/BioCard'
import PostContent from '../components/PostContent'


class ArticlePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    // add data for ArticlePostContent component
    const articleProps = {
      fullSlug: post.fields.fullSlug.replace('/blog/', ''),
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      longDescription: post.frontmatter.longDescription,
      timeToRead: post.timeToRead,
      location: post.frontmatter.location || null,
      language: post.frontmatter.language || 'en',
      tags: post.frontmatter.tags || [],
      // meta: post.frontmatter.meta || [], // !TODO fix
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
            {...articleProps}
            postLayout="article"
          />
          <BlogSingleAfterPost>
            <BioCard className="EkPost__author" />
          </BlogSingleAfterPost>
        </BlogSingleWrapper>
      </Layout>
    )
  }
}

export default ArticlePostTemplate

export const pageQuery = graphql`
  query ArticlePostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      excerpt
      html
      timeToRead
      fields {
        fullSlug: slug
      }
      frontmatter {
        date(formatString: "DD MMM YYYY")
        language
        location
        longDescription
        tags
        title
      }
    }
  }
`