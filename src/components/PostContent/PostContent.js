import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlePostContent from './ArticlePostContent'
import NotePostContent from './NotePostContent'
import LinkPostContent from './LinkPostContent'

class PostContent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.postLayout === 'article' && <ArticlePostContent {...this.props} />}
        {this.props.postLayout === 'note' && <NotePostContent {...this.props} />}
        {this.props.postLayout === 'link' && <LinkPostContent {...this.props} />}
      </React.Fragment>
    )
  }
}

PostContent.propTypes = {
  //post: PropTypes.object.isRequired,
  postLayout: PropTypes.oneOf(['article', 'note', 'link']),
};

// PostContent.defaultProps = {
//   postLayout: 'article',
// };

export default PostContent;