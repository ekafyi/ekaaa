import React from 'react'
import {
  Post,
  PostTitle,
  PostDate,
  Excerpt,
  PostLink,
} from './ShortPostListItem.css'

class RelatedPostListItem extends React.Component {
  render() {
    const { title, slug, post_format, date, excerpt } = this.props

    return (
      <div>
        <PostLink to={post_format + '/' + slug}>{title}</PostLink>
      </div>
    )
  }
}
export default RelatedPostListItem
