import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import OldPostListItem from './OldPostListItem'
import LandingPostListItem from './LandingPostListItem'
import RelatedPostListItem from './RelatedPostListItem'
import ArticlePostListItem from './ArticlePostListItem'
import LinkPostListItem from './LinkPostListItem'
import NotePostListItem from './NotePostListItem'

class PostList extends React.Component {
  render() {
    const { posts, listLayout } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            // add data for ALL PostListItem layout components below
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            fullSlug: (post.node.fields.fullSlug).replace('/blog/', ''),
            date: post.node.frontmatter.date,
            description: post.node.frontmatter.description,
            externalUrl: post.node.frontmatter.externalUrl,
            language: post.node.frontmatter.language || 'en',
            tags: post.node.frontmatter.tags || [],
            html: post.node.html || [],
          }

          switch (listLayout) {
            case 'short':
              return <LandingPostListItem key={props.fullSlug} {...props} />;
              break;
            case 'related':
              return <RelatedPostListItem key={props.fullSlug} {...props} />;
              break;
            case 'morning-dew':
              return <OldPostListItem key={props.fullSlug} {...props} />;
              break;
            case 'blog':
              if (post.node.fields.fullSlug.startsWith('/blog/posts/')) {
                return <ArticlePostListItem key={props.fullSlug} {...props} />;
              }
              else if (post.node.fields.fullSlug.startsWith('/blog/links/')) {
                return <LinkPostListItem key={props.fullSlug} {...props} />;
              }
              else if (post.node.fields.fullSlug.startsWith('/blog/notes/')) {
                return <NotePostListItem key={props.fullSlug} {...props} />;
              } 
              else {
                return <LandingPostListItem key={props.fullSlug} {...props} />
              }
              break;
          }
        })}
      </Fragment>
    )
  }
}

PostList.propTypes = {
  listLayout: PropTypes.oneOf([
      'short', 
      'related', 
      'blog', 
      'morning-dew', // original starter site template
    ]),
};

PostList.defaultProps = {
  listLayout: 'blog',
};

export default PostList
