import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby'
import { SmallP, LargeTitle } from './Typography'
import eka from '../assets/eka-avatar-cartoon.png'
import {
  Profpic,
  AboutBlock,
  SidebarBlock,
} from './Sidebar.css'
import TagList from './TagList'

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
            Hi there! <span role="img" aria-label="Emoji: waving hand">👋🏾</span> Iʼm <Link to='/'>Eka</Link>, a self-taught web developer and unprolific (but eager) musician. This is where I post <Link to='/posts'>web design and development articles</Link> and resources, along with personal updates and various questionable takes.
          </SmallP>
        </AboutBlock>
        <SidebarBlock style={{ borderTop: 'none', paddingTop: 0 }}>
          twitter 
          github 
          subscribe RSS
        </SidebarBlock>
        <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3}>top tags</LargeTitle>
          <SmallP as="div" fontSize={['1rem',1,0]}>
            <TagList tags={dummyTags} />
          </SmallP>
        </SidebarBlock>
        <SidebarBlock className="hide-xs-only">
          <LargeTitle fontSize={[4]} mb={3}>other stuff</LargeTitle>
          <SmallP as="ul" style={{ paddingLeft: 24 }}>
            <li><a href="#">my playlists</a></li>
            <li><a href="#">my bookshelf</a></li>
            <li><a href="#">brilliant at breakfast</a></li>
            <li><a href="#">nerv.ous</a></li>
            <li><a href="#">my spotify</a></li>
          </SmallP>
        </SidebarBlock>
      </div>
    );
  }
}

Sidebar.propTypes = {
};

export default Sidebar;