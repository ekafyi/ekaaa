import React from 'react'
import { PostTitle, PostDate, Excerpt, PostLink } from './PostList.css'
import {
  Post,
  PostExcerpt,
  ViewProjectLink,
  PlaceholderTitle,
} from './PostList.css'

import iconExternal from '../../assets/icon-external.svg'

class ProjectListItem extends React.Component {
  render() {
    const { title, date, excerpt, projectUrl, className } = this.props

    return (
      <Post className={className}>
        {projectUrl && (
          <React.Fragment>
            <PostLink as="a" href={projectUrl} target="_blank">
              <PostTitle>{title}</PostTitle>
            </PostLink>
            <ViewProjectLink>
              <svg
                role="presentation"
                alt=""
                aria-hidden
                width="11"
                height="11"
              >
                <use xlinkHref={`#${iconExternal.id}`} />
              </svg>
              &nbsp; see project
            </ViewProjectLink>
          </React.Fragment>
        )}
        <PostExcerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
        {date && <PostDate>{date}</PostDate>}
      </Post>
    )
  }
}
export default ProjectListItem
