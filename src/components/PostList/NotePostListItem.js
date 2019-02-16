import React from 'react'
import PropTypes from 'prop-types'
import {
  CommonBlogPost,
  CommonBlogPostDate,
  CommonBlogPostDateWrapper,
  PostExcerpt,
} from './PostList.css'
import siteConfig from '../../../data/siteConfig'
import { Link } from 'gatsby'


class NotePostListItem extends React.Component {
  render() {
    const { 
      fullSlug, 
      date, 
      excerpt,
      html,
    } = this.props

    return (
      <CommonBlogPost>
        <CommonBlogPostDateWrapper 
          to={fullSlug}
          title="Permalink to post"
          aria-label={'Permalink to post from ' + date}
        >
          <CommonBlogPostDate>{date}</CommonBlogPostDate>
        </CommonBlogPostDateWrapper>
        {(html.length > siteConfig.maxExcerptLength) ?
          // if post is very long, show Excerpt and "read more"
          <PostExcerpt>
            <div className="before-more-link" dangerouslySetInnerHTML={{ __html: excerpt }} />
            <Link to={fullSlug} className="more-link">Read more</Link>
          </PostExcerpt>
        :
          // otherwise, print everything
          <PostExcerpt dangerouslySetInnerHTML={{ __html: html }} />
        }
        {/* {typeof html === 'string' ? (
          <PostExcerpt dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <PostExcerpt>
            {html}
          </PostExcerpt>
        ) */}
      </CommonBlogPost>
    )
  }
}

NotePostListItem.propTypes = {
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  excerpt: PropTypes.string.isRequired,
  fullSlug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NotePostListItem