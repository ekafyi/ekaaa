import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  BlogSingleBody,
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
import { DateWrapper } from './BlogContent.css'


class BlogContentArticle extends Component {
  render() {
    const {
      postUrl,
      title,
      date,
      location,
      timetoread,
      description,
      html,
      tags,
      meta,
    } = this.props

    return (
      <React.Fragment>
        <BlogSingleHeader>
          <LargeTitle>{title}</LargeTitle>
          <DateWrapper>
            {date}
            {location && (
              <React.Fragment>
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {location}
              </React.Fragment>
            )}
            &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            {timetoread + ' min read'}
          </DateWrapper>
          <LargeP>{description}</LargeP>
          {tags && (
            <TagList tags={tags} />
          )}
        </BlogSingleHeader>
        {typeof html === 'string' ? (
          <BlogSingleBody dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <BlogSingleBody>
            {html}
          </BlogSingleBody>
        )}
        <BlogSingleFooter>
          <div>
            <ShareCard 
              postUrl={postUrl}
              postTitle={title}
            />
            <DividerImg aria-hidden>
              <img src={lines} role="presentation" alt="" width="80" />
            </DividerImg>
          </div>
          <div>
            {meta && <MetaList data={meta} />}
          </div>
        </BlogSingleFooter>
      </React.Fragment>
    );
  }
}

const dummyPostBody = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sit amet urna sed molestie. Cras cursus dolor eu massa porttitor, convallis pharetra velit finibus. Quisque et dui dignissim, dapibus libero eu, accumsan tellus. Nullam consectetur, massa quis vehicula commodo, nulla neque ultrices risus, id blandit velit massa vulputate neque.</p> <p>Aenean gravida enim ex, eu dignissim urna elementum non. Curabitur ornare malesuada arcu, ac vehicula nunc aliquam quis. Nullam at lacus consectetur, consequat lacus sit amet, auctor lorem. Vivamus id mauris ac diam dignissim pulvinar eu vel nibh.</p> <p>Morbi interdum enim nisl, ac porttitor dui sodales sit amet. Aenean dignissim accumsan lacus vitae hendrerit. Sed eget aliquet ipsum, sed rhoncus nulla. Pellentesque nec lectus dignissim, facilisis metus eu, pharetra urna. Aenean suscipit dolor in tortor placerat, ac viverra nisl imperdiet. Duis viverra venenatis tellus bibendum tempus. Fusce ac magna porttitor, lacinia sapien quis, molestie nulla. Integer tempor purus non enim mattis tincidunt. Duis sed urna nec quam condimentum volutpat at vitae lectus. Maecenas laoreet nulla et scelerisque condimentum. Nulla nec auctor ante.</p> <p>Donec fermentum aliquam augue, ut interdum nisi malesuada ut. Maecenas metus justo, gravida eget est ut, sollicitudin accumsan tortor. Mauris elementum urna a risus maximus molestie. Aliquam ultricies vulputate odio. Praesent eget sagittis est, a interdum ligula. Duis rutrum ultricies magna sit amet ullamcorper. Maecenas at mollis mauris. Maecenas sed tortor tellus.</p>'

BlogContentArticle.propTypes = {
  postUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string,
  timetoread: PropTypes.string,
  description: PropTypes.string,
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  tags: PropTypes.array,
  meta: PropTypes.array,
};

// remove dummy data below in production
BlogContentArticle.defaultProps = {
  postUrl: 'https://ekaaa.me/post/blah', // nanti bikin dari slug
  title: 'Adding SVG to your Gatsby site',
  date: '13 Feb 2019',
  location: 'Yogyakarta, Indonesia',
  timetoread: '10',
  description: 'Morbi interdum enim nisl, ac porttitor dui sodales sit amet. Aenean dignissim accumsan lacus vitae hendrerit.',
  html: dummyPostBody,
  tags: [ 'mac os x', 'troubleshooting', 'shorties' ],
  meta: [ { key: "Drinking", value: "Caffè mocha", }, { key: "Listening", value: "Peel Dream Magazine — Shenandoah", }, ],
};

export default BlogContentArticle;