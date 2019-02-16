import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import illustration from '../assets/illustration-walk.svg'
import illustrationTemp from '../assets/illustration-temp.png'
import iconChevron from '../assets/shape-chevron.svg'
import speechBalloon from '../assets/shape-speech-balloon.svg'
import triangle from '../assets/shape-triangle.svg'
import lines from '../assets/shape-lines.svg'

import { Layout, SEO } from '../layouts'
import { OuterWrapper } from '../components/Wrapper'
import {
  LandingTopBlock,
  LandingMidBlock,
  LandingBottomBlock,
  LandingTextWrapper,
  LandingIntroWrapper,
  SeeAllLink,
  QuoteContainer,
  Quote,
  QuoteSource,
  LandingPostsWrapper,
  LandingTitle,
  TopIllustration,
  MidIllustration,
  TextWithShapedImage,
  ShapesGroup,
  SvgSpeechBalloon,
  SvgDividerTriangle,
  SvgFooterLines,
} from '../components/Landing'
import { SocialHighlight } from '../components/Social'
import { PostList, ProjectList } from '../components/PostList'
import { LargeP, P } from '../components/Typography'

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
      <Layout location={this.props.location}>
        <SEO title="ekaaa.me" />
        <OuterWrapper style={{ overflow: 'hidden' }}>
          <LandingTopBlock>
            <LandingTitle>
              <div>
                <span className="hi">Hi!</span>&nbsp;
                <span className="wave-emoji" role="presentation" aria-hidden>
                  👋🏾{' '}
                </span>
              </div>
              <div>
                <span className="im">I’m</span>&nbsp;
                <span className="eka">Eka</span>
              </div>
              <SvgSpeechBalloon
                role="presentation"
                alt=""
                aria-hidden
                width="60"
                height="60"
              >
                <use xlinkHref={`#${speechBalloon.id}`} />
              </SvgSpeechBalloon>
            </LandingTitle>

            <TopIllustration>
              <svg role="presentation" alt="" aria-hidden width="120">
                <use xlinkHref={`#${illustration.id}`} />
              </svg>
              <TextWithShapedImage
                role="presentation"
                aria-hidden
                dangerouslySetInnerHTML={{
                  __html: landing.frontmatter.description,
                }}
              />
            </TopIllustration>

            <LandingIntroWrapper>
              <LargeP
                dangerouslySetInnerHTML={{
                  __html: landing.frontmatter.description,
                }}
              />
            </LandingIntroWrapper>
            <LandingTextWrapper
              dangerouslySetInnerHTML={{ __html: landing.html }}
            />
          </LandingTopBlock>

          <LandingMidBlock>
            <div style={{ flexGrow: 1 }}>
              <SocialHighlight />
            </div>
            <MidIllustration>
              <img src={illustrationTemp} width="240" />
            </MidIllustration>
          </LandingMidBlock>

          <ShapesGroup />

          <LandingBottomBlock>
            <SvgDividerTriangle
              role="presentation"
              alt=""
              aria-hidden
              width="48"
              height="48"
            >
              <use xlinkHref={`#${triangle.id}`} />
            </SvgDividerTriangle>

            <LandingPostsWrapper sectionTitle="Projects">
              <ProjectList posts={projects} />
            </LandingPostsWrapper>
            <LandingPostsWrapper sectionTitle="Posts" childColWidth="2">
              <PostList posts={posts} listLayout="short" />
              <SeeAllLink>
                <Link to="/posts" title="See all posts">
                  <span className="text-label">See all posts &nbsp;</span>
                  <svg
                    role="presentation"
                    alt=""
                    aria-hidden
                    width="40"
                    height="40"
                  >
                    <use xlinkHref={`#${iconChevron.id}`} />
                  </svg>
                </Link>
              </SeeAllLink>
            </LandingPostsWrapper>
          </LandingBottomBlock>

          <QuoteContainer>
            <Quote
              as="blockquote"
              dangerouslySetInnerHTML={{ __html: quote.quoteBody }}
            />
            <QuoteSource
              as="cite"
              dangerouslySetInnerHTML={{ __html: quote.quoteSource }}
            />
          </QuoteContainer>
          <SvgFooterLines
            role="presentation"
            alt=""
            aria-hidden
            width="240"
            height="120"
          >
            <use xlinkHref={`#${lines.id}`} />
          </SvgFooterLines>
        </OuterWrapper>
      </Layout>
    )
  }
}

export default LandingPage

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fields: {
          slug: {
            regex: "\/blog\/posts\/"
          }
        }
      }
      limit: 2
    ) {
      edges {
        node {
          excerpt
          fields {
            fullSlug: slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            language
          }
        }
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fields: {
          slug: {
            regex: "\/projects\/"
          }
        }
      }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY")
            title
            projectUrl
          }
        }
      }
    }
    landing: allMarkdownRemark(
      filter: { 
        fields: {
          slug: {
            regex: "\/pages\/landing\/"
          }
        }
      }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            description
            quotes {
              quoteBody
              quoteSource
            }
          }
        }
      }
    }
  }
`
