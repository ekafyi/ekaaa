import React from 'react'
import Disqus from 'disqus-react'

import siteConfig from '../../data/siteConfig'

{
  /* 
  // usage:
  // (eg. in `pages` / `templates` file)
  {page.frontmatter.disqus && (
    <Disqus
      slug={page.fields.fullSlug}
      title={page.frontmatter.title}
    />
  )} 
*/
}

class DisqusWrapper extends React.Component {
  render() {
    const disqusShortname = siteConfig.disqusShortname
    if (!disqusShortname) {
      return null
    }
    const disqusSiteUrl = siteConfig.disqusSiteUrl
    const disqusConfig = {
      url: `${disqusSiteUrl}${this.props.slug}`,
      title: this.props.title,
    }

    return (
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    )
  }
}

export default DisqusWrapper
