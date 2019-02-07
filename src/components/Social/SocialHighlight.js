import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import siteConfig from '../../../data/siteConfig'
import {
  PrimarySocLinks,
  SecondarySocLinks,
  SocLinkAnchor,
  SocialHighlightContainer,
  SocialHighlightTitle,
} from './SocialHighlight.css'

class SocialHighlight extends Component {
  render() {
    const PrimarySocLinkItem = ({ item }) => {
      return (
        <li>
          <SocLinkAnchor href={item.url} color={item.brandColor}>
            {item.label}
          </SocLinkAnchor>
        </li>
      )
    }
    const SecondarySocLinkItem = ({ item }) => {
      return (
        <li>
          <a href={item.url}>{item.label}</a>
        </li>
      )
    }

    return (
      <SocialHighlightContainer>
        <SocialHighlightTitle>
          elsewhere
          <br />
          on the web
        </SocialHighlightTitle>

        <PrimarySocLinks>
          {siteConfig.contactLinks.primary.map((link, i) => {
            return (
              <PrimarySocLinkItem item={link} key={`primary-soc-link-${i}`} />
            )
          })}
        </PrimarySocLinks>

        <SecondarySocLinks>
          {siteConfig.contactLinks.secondary.map((link, i) => {
            return (
              <SecondarySocLinkItem
                item={link}
                key={`secondary-soc-link-${i}`}
              />
            )
          })}
        </SecondarySocLinks>
      </SocialHighlightContainer>
    )
  }
}

// SocialHighlight.propTypes = {

// };

export default SocialHighlight
