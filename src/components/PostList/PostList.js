import React, { Fragment } from 'react'
import OldPostListItem from './OldPostListItem'
import ShortPostListItem from './ShortPostListItem'
import RelatedPostListItem from './RelatedPostListItem'

class PostList extends React.Component {
  render() {
    const { posts, listType } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            slug: post.node.frontmatter.slug,
            post_format: post.node.frontmatter.post_format || 'notes',
            date: post.node.frontmatter.date,
            language: post.node.frontmatter.language || 'en',
            tags: post.node.frontmatter.tags || [],
            // projectUrl: post.node.frontmatter.projectUrl,
          }
          if (listType === 'related') {
            return <RelatedPostListItem key={props.slug} {...props} />
          }
          if (listType === 'short') {
            return <ShortPostListItem key={props.slug} {...props} />
          }
          if (listType === 'morning-dew') {
            return <OldPostListItem key={props.slug} {...props} />
          }
        })}
      </Fragment>
    )
  }
}

// propTypes
// listType: oneOf `short`, `morning-dew`, `project`
// default: `short`

export default PostList
