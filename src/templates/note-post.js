import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '../layouts'
import { 
  BlogSingleWrapper, 
  BlogSingleAfterPost,
} from '../components/BlogSingle'
import BioCard from '../components/BioCard'
import PostContent from '../components/PostContent'


class NotePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    // add data for NotePostContent component
    const noteProps = {
      fullSlug: post.fields.fullSlug.replace('/blog/', ''),
      date: post.frontmatter.date,
      location: post.frontmatter.location,
      language: post.frontmatter.language || 'en',
      tags: post.frontmatter.tags || [],
      html: post.html || '',
    }

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO
          title={'Note from ' + post.frontmatter.date}
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
            {...noteProps}
            postLayout="note"
          />
          <BlogSingleAfterPost>
            <BioCard className="EkPost__author" />
          </BlogSingleAfterPost>
        </BlogSingleWrapper>
      </Layout>
    )
  }
}

export default NotePostTemplate

export const pageQuery = graphql`
  query NotePostBySlug($slug: String!) {
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
        date(formatString: "DD MMM YYYY, HH:MM")
        language
        location
        tags
        title
      }
    }
  }
`