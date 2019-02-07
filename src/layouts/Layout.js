import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import siteConfig from '../../data/siteConfig'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import theme from '../../data/theme'
import styled from 'styled-components'

const LayoutContentWithoutHeader = styled.div` 
  min-height: 88vh; 
`
const LayoutContentWithHeader = styled.div` 
  min-height: calc(88vh - 5rem); 
`

class Layout extends React.Component {
  render() {
    const { children, viewType } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {viewType === 'blog' ? (
            <Fragment>
              <Header headerLinks={siteConfig.headerLinks} />
              <LayoutContentWithHeader>
                {children}
              </LayoutContentWithHeader>
            </Fragment>
          ) : (
            <LayoutContentWithoutHeader>
              {children}
            </LayoutContentWithoutHeader>
          )}
          <Footer siteConfig={siteConfig} />
        </Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  /** pass `location` object from Gatsby (not sure what it does though?) */
  location: PropTypes.object,
  /** customize layout for different sections while still using one component */
  viewType: PropTypes.oneOf(['blog']),
}

export default Layout