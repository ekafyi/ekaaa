import React from 'react'
import { Link } from 'gatsby'
import {
  HeaderWrapper,
  PrimaryNav,
  SecondaryNav,
  HeaderLink,
  HomeLink,
} from './Header.css'

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <HeaderWrapper as="header" role="header">
        <PrimaryNav>
          {headerLinks.map((headerLink, i) =>
            headerLink.isHome ? (
              <HomeLink to={headerLink.url} key={`header-link-${i}`}>
                <span>{headerLink.label}</span>
              </HomeLink>
            ) : (
              <HeaderLink
                to={headerLink.url}
                key={`header-link-${i}`}
                activeClassName="is-active"
              >
                {headerLink.label}
              </HeaderLink>
            )
          )}
        </PrimaryNav>
        <SecondaryNav>
          {/* <HeaderLink as="a" href="#" mr={0} pr={0}>
              // insert color picker etc here
          </HeaderLink> */}
        </SecondaryNav>
      </HeaderWrapper>
    )
  }
}

export default Header
