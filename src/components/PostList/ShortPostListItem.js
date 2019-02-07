import React from 'react'
import {
  Post,
  PostTitle,
  PostDate,
  Excerpt,
  PostLink,
} from './ShortPostListItem.css'

class ShortPostListItem extends React.Component {
  render() {
    const { title, slug, post_format, date, excerpt } = this.props

    return (
      <Post>
        <PostLink to={post_format + '/' + slug} className="cover-parent">
          <PostTitle>{title}</PostTitle>
        </PostLink>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        <PostDate>{date}</PostDate>
      </Post>
    )
  }
}
export default ShortPostListItem
