import React from 'react'
import PropTypes from 'prop-types'
import {
  CommonBlogPost,
  CommonBlogPostTitle,
  CommonBlogPostDate,
  CommonBlogPostDateWrapper,
  PostExcerpt,
  LinkPostLink,
  LinkPostUrl,
} from './PostList.css'
import { LinkPostTitleIcon } from '../PostContent/PostContent.css'
import linkIcon from '../../assets/icon-external.svg'
// import actualLinkIcon from '../../assets/icon-link.svg'
import siteConfig from '../../../data/siteConfig'
import VisuallyHidden from "@reach/visually-hidden"


class LinkPostListItem extends React.Component {
  render() {
    const { 
      externalUrl, 
      title, 
      fullSlug, 
      date, 
      html, 
      excerpt,
    } = this.props

    // get the "host" part of externalUrl
    // (eg. https://css-tricks.com/where-do-you-learn-html-css-in-2019/ -> 'css-tricks.com')
    const pathArray = externalUrl.split('/');
    const externalUrlHost = pathArray[2];

    return (
      <CommonBlogPost>
        <CommonBlogPostDateWrapper 
          to={fullSlug}
          title="Permalink to post"
          aria-label={'Permalink to post from ' + date}
        >
          <CommonBlogPostDate>
            {/* <svg width="22" height="16" style={{ verticalAlign: 'text-bottom', paddingRight: 6 }}>
              <use xlinkHref={`#${actualLinkIcon.id}`} />
            </svg> */}
            {date}
          </CommonBlogPostDate>
        </CommonBlogPostDateWrapper>
        <LinkPostLink href={externalUrl}>
          <CommonBlogPostTitle>
            {title}
            <LinkPostTitleIcon>
              <use xlinkHref={`#${linkIcon.id}`} />
            </LinkPostTitleIcon>
          </CommonBlogPostTitle>
          <LinkPostUrl>
            <VisuallyHidden>open in</VisuallyHidden>
            {externalUrlHost}
          </LinkPostUrl>
        </LinkPostLink>
        {(html.length > siteConfig.maxExcerptLength) ?
          // if post is very long, show Excerpt and "read more"
          <PostExcerpt>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            <a href="#" className="more-link">Read more</a>
          </PostExcerpt>
        :
          // otherwise, print everything
          <PostExcerpt dangerouslySetInnerHTML={{ __html: html }} />
        } 
      </CommonBlogPost>
    )
  }
}

LinkPostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  excerpt: PropTypes.string.isRequired,
  fullSlug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default LinkPostListItem