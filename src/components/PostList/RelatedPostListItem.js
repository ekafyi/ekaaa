import React from 'react'
import {
  Post,
  PostTitle,
  PostDate,
  PostLink,
} from './PostList.css'

class RelatedPostListItem extends React.Component {
  render() {
    const { title, fullSlug, date, excerpt } = this.props

    return (
      <div>
        <PostLink to={fullSlug}>{title}</PostLink>
      </div>
    )
  }
}
export default RelatedPostListItem
