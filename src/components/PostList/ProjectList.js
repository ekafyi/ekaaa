import React, { Fragment } from 'react'
import ProjectListItem from './ProjectListItem'

class ProjectList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <Fragment>
        {posts.map((post, i) => {
          const props = {
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            date: post.node.frontmatter.date,
            projectUrl: post.node.frontmatter.projectUrl,
          }
          return <ProjectListItem key={i} {...props} />
        })}
      </Fragment>
    )
  }
}

export default ProjectList
