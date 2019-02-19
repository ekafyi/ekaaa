import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { SmallP, LargeTitle } from './Typography'
import eka from '../assets/eka-avatar-cartoon.png'
import {
  Profpic,
  AboutBlock,
  ContactBlock,
  SidebarBlock,
  SocialLink,
  RssLink,
  SvgIcon,
} from './Sidebar.css'
import TagList from './TagList'
import { LinkList } from './Typography'
import VisuallyHidden from "@reach/visually-hidden"
import { EmojiWrapper } from './Wrapper'

import iconTwitter from '../assets/twitter.svg'
import iconGithub from '../assets/github-circle.svg'
import iconRss from '../assets/rss.svg'

const dummyTags = [
  "frontend", 
  "react", 
  "performance",
  "accessibility",
  "weekly links",
  "food pics",
]


class Sidebar extends Component {
  render() {
    return (
      <div style={{ position: 'sticky', top: '-8.5rem' }}>
        <AboutBlock>
          <Profpic>
            <img src={eka} />
          </Profpic>
          <SmallP className="side-about__text">
            Hello! <span role="img" aria-label="Emoji: waving hand">👋🏾</span> Iʼm <Link to='/'>Eka</Link>, a self-taught web developer and unprolific (but keen) musician. This is where I post <Link to='/posts'>web design and development articles</Link> and resources, along with some personal updates and various questionable takes.
          </SmallP>
        </AboutBlock>
        <ContactBlock 
          mt={-3} 
          mb={'1.25rem'}
        >
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
        <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3}>top tags</LargeTitle>
          <SmallP as="div" fontSize={['1rem',1,0]} mb={-2} className="hide-xs-only">
            <TagList tags={dummyTags} />
          </SmallP>
        </SidebarBlock>
        <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3}>other stuff</LargeTitle>
          <LinkList className="hide-xs-only">
            <SmallP as="li" lineHeight={1}>
              <a href="#"><EmojiWrapper isHidden>📀</EmojiWrapper> my playlists</a>
            </SmallP>
            <SmallP as="li" lineHeight={1}>
              <a href="#"><EmojiWrapper isHidden>📚</EmojiWrapper> my bookshelf</a>
            </SmallP>
            <SmallP as="li" lineHeight={1}>
              <a href="#"><EmojiWrapper isHidden>☕️</EmojiWrapper> brilliant at breakfast</a>
            </SmallP>
            <SmallP as="li" lineHeight={1}>
              <a href="#"><EmojiWrapper isHidden>💊</EmojiWrapper> nerv.ous</a>
            </SmallP>
          </LinkList>
        </SidebarBlock>
      </div>
    );
  }
}

Sidebar.propTypes = {
};

export default Sidebar;