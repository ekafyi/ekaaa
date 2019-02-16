import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  BlogSingleHeader,
  BlogSingleFooter,
  DividerImg
} from '../BlogSingle'
import MetaList from '../MetaList'
import ShareCard from '../ShareCard'
import TagList from '../TagList'
import lines from '../../assets/divider-diag-lines.png'
import { 
  LargeTitle,
  LargeP,
} from '../Typography'
import { 
  DateWrapper,
  BlogSingleHeaderNote,
  BlogSingleBodyNote,
} from './PostContent.css'


class NotePostContent extends Component {
  render() {
    const {
      fullSlug,
      date,
      location,
      html,
      tags,
    } = this.props

    // make URL for sharing 
    // ⚠️ note: match generated URLs in gatsby-node.js
    const postUrl = 'https://ekaaa.me' + '/' + fullSlug;

    return (
      <React.Fragment>
        {typeof html === 'string' ? (
          <BlogSingleBodyNote dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <BlogSingleBodyNote>
            {html}
          </BlogSingleBodyNote>
        )}
        <BlogSingleHeaderNote>
          <DateWrapper mb={3}>
            {date}
            {location && (
              <React.Fragment>
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {location}
              </React.Fragment>
            )}
          </DateWrapper>
          {tags && (
            <TagList tags={tags} />
          )}
        </BlogSingleHeaderNote>
      </React.Fragment>
    );
  }
}

const dummyPostBody = '<p>Pellentesque nec lectus dignissim, facilisis metus eu, pharetra urna. Aenean suscipit dolor in tortor placerat, ac viverra nisl imperdiet. Duis viverra venenatis tellus bibendum tempus. Integer tempor purus non enim mattis tincidunt. Duis sed urna nec quam condimentum volutpat at vitae lectus. Maecenas laoreet nulla et scelerisque condimentum. Nulla nec auctor ante.</p>'

NotePostContent.propTypes = {
  fullSlug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string,
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  tags: PropTypes.array,
};

export default NotePostContent;