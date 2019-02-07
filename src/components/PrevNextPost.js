import React, { Fragment } from 'react'
import { PostList } from './PostList'
import { Text } from './Commons'

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props
    const articles = [previous, next]
      .filter(i => i)
      .map(item => ({ node: item }))

    return (
      <Fragment>
        <Text>Read next:</Text>
        <PostList posts={articles} listType="related" />
      </Fragment>
    )
  }
}

export default PrevNextPost
