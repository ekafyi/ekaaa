import React from 'react'
import { Link } from 'gatsby'
// import styled, { ThemeProvider } from 'styled-components'
// import { color, space, width, fontSize } from 'styled-system'
// import theme from '../../data/theme'
// import PropTypes from 'prop-types'

import { EmojiWrapper } from '../components/Wrapper'
import { FooterWrapper, FooterLinks, Copyright, Credits } from './Footer.css'

class Footer extends React.Component {
  render() {
    const {
      footerLinks,
      creditHost,
      creditBuilt,
      creditText,
    } = this.props.siteConfig

    const FooterLinkItem = ({ item }) => {
      if (item.url.startsWith('/')) {
        return (
          <li>
            <Link to={item.url}>{item.label}</Link>
          </li>
        )
      }
      return (
        <li>
          <a href={item.url}>{item.label}</a>
        </li>
      )
    }

    return (
      <FooterWrapper as="footer" role="siteinfo">
        <Credits>
          <div>
            {/* built with [{' '}
            <EmojiWrapper ariaLabel="yellow heart">💛</EmojiWrapper>,{' '}
            <EmojiWrapper ariaLabel="hot beverage">☕️</EmojiWrapper>,{' '}
            <a href={creditBuilt.url}>{creditBuilt.name}</a> ]  */}
            built with{' '}<a href={creditBuilt.url}>{creditBuilt.name}</a> &nbsp;&amp;&amp;&nbsp;
            hosted by{' '}<a href={creditHost.url}>{creditHost.name}</a>
          </div>
          <FooterLinks>
            {footerLinks.map((link, i) => {
              return <FooterLinkItem item={link} key={`footer-link-${i}`} />
            })}
          </FooterLinks>
        </Credits>
        <Copyright dangerouslySetInnerHTML={{ __html: creditText }} />
      </FooterWrapper>
    )
  }
}

// Footer.propTypes = {
// };

export default Footer