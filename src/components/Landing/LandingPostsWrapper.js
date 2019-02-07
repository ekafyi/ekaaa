import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Wrapper, SectionTitle } from './LandingPostsWrapper.css'
import { LandingPosts } from './LandingContainers'

export class LandingPostsWrapper extends Component {
  render() {
    const { sectionTitle, childColWidth, children } = this.props

    return (
      <Wrapper>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <LandingPosts childColWidth={childColWidth}>
          {children}
        </LandingPosts>
      </Wrapper>
    )
  }
}

// LandingPostsWrapper.propTypes = {};