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
} from './BlogContent.css'


class BlogContentNote extends Component {
  render() {
    const {
      postUrl,
      title,
      date,
      location,
      description,
      html,
      tags,
      meta,
    } = this.props

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

BlogContentNote.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string,
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  tags: PropTypes.array,
};

// remove dummy data below in production
BlogContentNote.defaultProps = {
  date: '14 Feb 2019, 9:36 pm',
  location: 'Yogyakarta, Indonesia',
  html: dummyPostBody,
  tags: [ 'mac os x', 'troubleshooting', 'shorties' ],
};

export default BlogContentNote;