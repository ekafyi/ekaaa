import React from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '../layouts'
import Content from '../components/Content'
import { OldWrapper } from '../components/Wrapper'
import Hero from '../components/Hero'
//import SEO from '../components/SEO'

class Page extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location} viewType="blog">
        <SEO
          // title={page.frontmatter.title}
          title="test troubleshooting build"
          description="test troubleshoot build"
          // path={post.frontmatter.sssslug}
          // cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        />

        <Hero
          // heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
          // title={page.frontmatter.title}
          title="test troubleshooting build"
        />

        <OldWrapper>
          <article>
            {/* <Content content={page.html} date={page.frontmatter.date} /> */}
            test
          </article>
        </OldWrapper>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        fullSlug: slug
      }
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`
