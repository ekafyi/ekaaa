import React from 'react'
import { Link } from 'gatsby'
import {
  HeaderWrapper,
  PrimaryNav,
  SecondaryNav,
  HeaderListItem,
  HeaderLink,
  HomeLink,
  SettingsIconLink,
} from './Header.css'

import iconPaint from '../assets/baseline-color_lens-24px.svg'
import VisuallyHidden from '@reach/visually-hidden';


class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <HeaderWrapper as="header" role="header">
        <PrimaryNav>
          <ul style={{ listStyle: 'none' }}>
            {headerLinks.map((headerLink, i) =>
              headerLink.isHome ? (
                <HeaderListItem className="primary-nav__home-link" key={`header-link-${i}`}>
                  <HomeLink to={headerLink.url}>
                    <span>{headerLink.label}</span>
                  </HomeLink>
                </HeaderListItem>
              ) : (
                <HeaderListItem key={`header-link-${i}`}>
                  <HeaderLink
                    to={headerLink.url}
                    activeClassName="is-active"
                  >
                    {headerLink.label}
                  </HeaderLink>
                </HeaderListItem>
              )
            )}
          </ul>
        </PrimaryNav>

          
        <SettingsIconLink>
          <svg width="16" height="16" role="presentation" aria-hidden>
            <use xlinkHref={`#${iconPaint.id}`} />
          </svg>
          <VisuallyHidden>Change theme colours</VisuallyHidden>
        </SettingsIconLink>

      </HeaderWrapper>
    )
  }
}

export default Header
