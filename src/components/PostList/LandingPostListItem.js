import React from 'react'
import {
  LandingPost,
  PostTitle,
  LandingPostDate,
  PostExcerpt,
  PostLink,
} from './PostList.css'

class LandingPostListItem extends React.Component {
  render() {
    const { 
      title, 
      fullSlug, 
      date, 
      excerpt 
    } = this.props

    return (
      <LandingPost>
        <PostLink to={fullSlug} className="cover-parent">
          <PostTitle>{title}</PostTitle>
        </PostLink>
        <PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        <LandingPostDate>{date}</LandingPostDate>
      </LandingPost>
    )
  }
}
export default LandingPostListItem
