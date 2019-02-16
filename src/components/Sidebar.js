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
      <div style={{ position: 'sticky', top: '1rem' }}>
        <AboutBlock>
          <Profpic>
            <img src={eka} />
          </Profpic>
          <SmallP className="side-about__text">
            Hi there! <span role="img" aria-label="Emoji: waving hand">👋🏾</span> Iʼm <Link to='/'>Eka</Link>, a self-taught web developer, unprolific (but eager) musician, and an okay cook. In this site, I post articles and links on web design and development as well as random thoughts about life and my other interests.
          </SmallP>
        </AboutBlock>
        <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3}>top tags</LargeTitle>
          <SmallP as="div" fontSize={['1rem',1,0]}>
            <TagList tags={dummyTags} />
          </SmallP>
        </SidebarBlock>
        {/* <SidebarBlock>
          <LargeTitle fontSize={[4]} mb={3}>site stuff</LargeTitle>
          <SmallP as="ul" style={{ paddingLeft: 24 }}>
            <li><a href="#">RSS feed - everything</a></li>
            <li><a href="#">RSS feed - posts only</a></li>
            <li><a href="#">site credits</a></li>
          </SmallP>
        </SidebarBlock> */}
      </div>
    );
  }
}

Sidebar.propTypes = {
};

export default Sidebar;