import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlogContentArticle from './BlogContentArticle'
import BlogContentNote from './BlogContentNote'
import BlogContentLink from './BlogContentLink'

class BlogContent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.postType === 'article' && <BlogContentArticle />}
        {this.props.postType === 'note' && <BlogContentNote />}
        {this.props.postType === 'link' && <BlogContentLink />}
      </React.Fragment>
    )
  }
}

BlogContent.propTypes = {
  //post: PropTypes.object.isRequired,
  postType: PropTypes.oneOf(['article', 'note', 'link']),
};

BlogContent.propTypes = {
  postType: 'article',
};

export default BlogContent;