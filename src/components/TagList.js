import React, { Fragment } from 'react'
import {
  TagListWrapper,
  TagListItem,
} from './TagList.css'


class TagList extends React.Component {
  render() {
    const { 
      tags, 
      // icon 
    } = this.props

    return (
      <TagListWrapper>
        {/* {icon === true && <Fragment>🏷 </Fragment>} */}
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem to={`tags/${tag}`}>{tag}</TagListItem>
              {/* {i < tags.length - 1 ? ', ' : ''} */}
            </Fragment>
          )
        })}
      </TagListWrapper>
    )
  }
}
export default TagList
