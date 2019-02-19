import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconTwitter from '../assets/twitter.svg'
import iconGithub from '../assets/github-circle.svg'
import iconRss from '../assets/rss.svg'
import {
  ContactBlock,
  SocialLink,
  RssLink,
  SvgIcon,
} from './SocialList.css'
import VisuallyHidden from "@reach/visually-hidden"


class SocialList extends Component {
  render() {
    return (
      <ContactBlock className="social-list">
        <li>
          <SocialLink href="#">
            <SvgIcon>
              <use xlinkHref={`#${iconGithub.id}`} />
            </SvgIcon>
            <VisuallyHidden>Github</VisuallyHidden>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="#">
            <SvgIcon style={{ color: '#1da1f2' }}
              height="16" width="16"
            >
              <use xlinkHref={`#${iconTwitter.id}`} />
            </SvgIcon>
            <VisuallyHidden>Twitter</VisuallyHidden>
          </SocialLink>
        </li>
        <li>
          <RssLink href="#">
            <SvgIcon style={{ color: 'orange' }}>
              <use xlinkHref={`#${iconRss.id}`} />
            </SvgIcon>
            All <VisuallyHidden>RSS</VisuallyHidden>
          </RssLink>
        </li>
        <li>
          <RssLink href="#"
            type="application/rss+xml"
            rel="alternate"
          >
            <SvgIcon style={{ color: 'orange' }}>
              <use xlinkHref={`#${iconRss.id}`} />
            </SvgIcon>
            Posts <VisuallyHidden>RSS</VisuallyHidden>
          </RssLink>
        </li>
      </ContactBlock>
    );
  }
}

SocialList.propTypes = {

};

export default SocialList;