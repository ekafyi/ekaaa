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
import linkIcon from '../../assets/icon-external.svg'
import { 
  LargeTitle,
  LargeP,
} from '../Typography'
import { 
  DateWrapper,
  LinkPostTitle,
  LinkPostTitleIcon,
  LinkPostUrl,
  LinkPostBodyWrapper,
} from './PostContent.css'
import VisuallyHidden from "@reach/visually-hidden"


class LinkPostContent extends Component {
  render() {
    const {
      fullSlug,
      externalUrl,
      title,
      date,
      location,
      html,
      tags,
    } = this.props

    // make URL for sharing 
    // ⚠️ note: match generated URLs in gatsby-node.js
    const postUrl = 'https://ekaaa.me' + '/' + fullSlug;

    // get the "host" part of externalUrl
    // (eg. https://css-tricks.com/where-do-you-learn-html-css-in-2019/ -> 'css-tricks.com')
    const pathArray = externalUrl.split('/');
    const externalUrlHost = pathArray[2];

    return (
      <React.Fragment>
        <BlogSingleHeader>
          <LinkPostTitle href={externalUrl} rel="external" mb={[3,0,2,4]}>
            <LargeTitle mb={3}>
              {title}
              <LinkPostTitleIcon>
                <use xlinkHref={`#${linkIcon.id}`} />
              </LinkPostTitleIcon>
            </LargeTitle>
            <LinkPostUrl>
              <VisuallyHidden>open in</VisuallyHidden>
              {externalUrlHost}
            </LinkPostUrl>
          </LinkPostTitle>
        </BlogSingleHeader>
        <LinkPostBodyWrapper>
          {typeof html === 'string' ? (
            <BlogSingleBody dangerouslySetInnerHTML={{ __html: html }} />
          ) : (
            <BlogSingleBody>
              {html}
            </BlogSingleBody>
          )}
          <DateWrapper mt={[-1,-3]}>
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
        </LinkPostBodyWrapper>
      </React.Fragment>
    );
  }
}

const dummyPostBody = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia sit amet urna sed molestie. Cras cursus dolor eu massa porttitor, convallis pharetra velit finibus. Quisque et dui dignissim, dapibus libero eu, accumsan tellus. Nullam consectetur, massa quis vehicula commodo, nulla neque ultrices risus, id blandit velit massa vulputate neque.</p> <p>Aenean gravida enim ex, eu dignissim urna elementum non. Curabitur ornare malesuada arcu, ac vehicula nunc aliquam quis.</p>'

LinkPostContent.propTypes = {
  fullSlug: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string,
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  tags: PropTypes.array,
};

export default LinkPostContent;