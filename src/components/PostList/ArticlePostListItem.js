import React from 'react'
import PropTypes from 'prop-types'
import {
  CommonBlogPost,
  CommonBlogPostTitle,
  CommonBlogPostDate,
  CommonBlogPostDateWrapper,
  PostExcerpt,
  PostLink,
} from './PostList.css'


class ArticlePostListItem extends React.Component {
  render() {
    const { 
      title, 
      fullSlug, 
      date, 
      description 
    } = this.props

    return (
      <CommonBlogPost>
        <CommonBlogPostDateWrapper 
          tabIndex="-1" // unfocusable because we already have PostLink
          to={fullSlug}
          title="Permalink to post"
          aria-label={'Permalink to post from ' + date}
        >
          <CommonBlogPostDate>{date}</CommonBlogPostDate>
        </CommonBlogPostDateWrapper>
        <PostLink to={fullSlug}>
          <CommonBlogPostTitle>{title}</CommonBlogPostTitle>
        </PostLink>
        {description && (
          <PostExcerpt dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </CommonBlogPost>
    )
  }
}

ArticlePostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  fullSlug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ArticlePostListItem