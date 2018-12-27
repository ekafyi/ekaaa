import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

// import Layout from '../components/layout'
// import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import RelatedPosts from '../components/RelatedPosts'

const BodyText = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 3rem;
  color: ${props => (props.color ? props.color : '#222')};
`

class LandingPage extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const projects = this.props.data.projects.edges
    const landing = this.props.data.landing.edges[0].node
    const quotes = landing.frontmatter.quotes

    // get random quote
    const numOfQuotes = quotes.length
    const randomQuoteIndex = Math.floor(Math.random() * Math.floor(numOfQuotes))
    const quote = quotes[randomQuoteIndex]

    return (
      <div>
        <SEO title="ekaaa.me" />

        <h1>Hi! I'm Eka</h1>

        <h3>{landing.frontmatter.description}</h3>

        <BodyText
          color="black"
          dangerouslySetInnerHTML={{ __html: landing.html }}
        />

        <section>
          <h3>Recent Projects</h3>
          <ul>
            {projects.map(project => {
              const title = project.node.frontmatter.title
              const slug = project.node.frontmatter.slug
              const excerpt = project.node.excerpt
              return (
                <li key={slug}>
                  <h4>{title}</h4>
                  {excerpt}
                </li>
              )
            })}
          </ul>
        </section>

        <section>
          <h3>Recent Posts</h3>
          <RelatedPosts posts={posts} />
        </section>

        <div>
          <hr />
          <blockquote>{quote.quoteBody}</blockquote>
          <cite>{quote.quoteSource}</cite>
        </div>
      </div>
    )
  }
}

export default LandingPage

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: null } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            language
            slug
            post_format
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
    landing: allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "landing" } } }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          excerpt
          html
          frontmatter {
            slug
            title
            description
            quotes {
              quoteBody
              quoteSource
            }
            imageTw {
              publicURL
            }
            imageFb {
              publicURL
            }
          }
        }
      }
    }
  }
`
