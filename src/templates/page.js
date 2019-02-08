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
          title={page.frontmatter.title}
          description={page.excerpt}
          path={page.frontmatter.slug}
          cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        />

        <Hero
          heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
          title={page.frontmatter.title}
        />

        <OldWrapper>
          <article>
            <Content content={page.html} date={page.frontmatter.date} />
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
