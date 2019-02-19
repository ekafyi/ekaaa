import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { SmallP, LargeTitle } from './Typography'
import eka from '../assets/eka-avatar-cartoon.png'
import {
  SidebarWrapper,
  SidebarDuplicateWrapper,
  Profpic,
  AboutBlock,
  SidebarBlock,
  MiscBlock,
} from './Sidebar.css'
import TagList from './TagList'
import SocialList from './SocialList'
import { LinkList } from './Typography'
import { EmojiWrapper } from './Wrapper'

const dummyTags = [
  "frontend", 
  "react", 
  "performance",
  "accessibility",
  "weekly links",
  "food pics",
]

const misc = (
  <MiscBlock>
    <LargeTitle fontSize={[4]} mb={3}>other stuff</LargeTitle>
    <LinkList>
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
  </MiscBlock>
)


class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper style={{ position: 'sticky', top: '-8.5rem' }}>
        <AboutBlock>
          <Profpic>
            <img src={eka} />
          </Profpic>
          <SmallP className="side-about__text">
            Hi! <span role="img" aria-label="Emoji: waving hand">👋🏾</span> Iʼm <Link to='/'>Eka</Link>, a self-taught web developer and unprolific (but keen) musician. This is my personal site, where I post <Link to='/posts'>web design and development articles</Link> and resources, along with some personal updates and various questionable takes.{' '}
            <a href="#footer" className="side-about__contact-link" aria-hidden>
              contact&nbsp;/&nbsp;subscribe&nbsp;↓
            </a>
          </SmallP>
        </AboutBlock>
        <SocialList
          mt={-3} 
          mb={'1.25rem'}
          style={{ marginBottom: '1.25rem' }}
        />
        <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3} className="hide-xs-only">
            top tags
          </LargeTitle>
          <SmallP as="div" fontSize={['1rem',1,0]} mb={-2} className="temp-horizontal-taglist">
            <TagList tags={dummyTags} />
          </SmallP>
        </SidebarBlock>
        {misc}
      </SidebarWrapper>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;

////

export class SidebarDuplicate extends Component {
  render() {
    return (
      <SidebarDuplicateWrapper aria-hidden>
        {misc}
      </SidebarDuplicateWrapper>
    )
  }
}