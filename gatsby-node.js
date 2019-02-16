const { resolve } = require('path');
const { createFilePath } = require('gatsby-source-filesystem')
const config = require('./data/siteConfig');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // define template files
  const BlogIndexTemplate = resolve('./src/templates/blog-index.js') // currently not used
  const BlogIndexByMonthTemplate = resolve('./src/templates/blog-index-month.js')
  const ArticlePostTemplate = resolve('./src/templates/article-post.js')
  const LinkPostTemplate = resolve('./src/templates/link-post.js')
  const NotePostTemplate = resolve('./src/templates/note-post.js')
  const PageTemplate = resolve('./src/templates/page.js')
  const TagTemplate = resolve('./src/templates/tag.js')
  const BlogPostShareImage = resolve('./src/templates/blog-post-share-image.js')

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  // define all entries in `blog`, `pages`, `projects` folders
  const markdownFiles = allMarkdown.data.allMarkdownRemark.edges

  /////////////////////////
  // generate `page` pages
  /////////////////////////

  markdownFiles
    .filter(item => (item.node.fields.slug.startsWith('/pages/')))
    .forEach(page => {
      createPage({
        path: page.node.fields.slug.replace('/pages', ''),
        component: PageTemplate,
        context: {
          slug: page.node.fields.slug,
        },
      })
    })

  /////////////////////////
  // generate `blog` pages
  /////////////////////////

  // before we begin, filter only `blog` files
  const posts = markdownFiles
    .filter(item => (item.node.fields.slug.startsWith('/blog/')))
  
  // 1. generate post list (Blog Index/Archive) grouped by month

  // currently hardcoded
  // `/blog` = show ALL entries
  // `/posts` = show entries in "posts" folder
  // `/links` = show entries in "link" folder
  // `/notes` = show entries in "note" folder

  const postTypes = [
    {
      name: 'blog',
      regex: '\/blog\/',
    },
    {
      name: 'posts',
      regex: '\/blog\/posts\/',
    },
    {
      name: 'links',
      regex: '\/blog\/links\/',
    },
    {
      name: 'notes',
      regex: '\/blog\/notes\/',
    },
  ]
  Array.from(postTypes, postType => {
    createPage({
      path: postType.name,
      component: BlogIndexByMonthTemplate,
      context: {
        pathSlug: postType.regex
      },
    })
  })

  // 2. generate paginated post list (Blog Index)
  // from starter site, currently not used
  // if needed, combine with #1 OR use for eg. tag archive page?

  // const postsPerPage = config.postsPerPage;
  // const nbPages = Math.ceil(posts.length / postsPerPage)

  // Array.from({ length: nbPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
  //     component: BlogIndexTemplate,
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       currentPage: i + 1,
  //       nbPages: nbPages,
  //     },
  //   })
  // })

  // 3. generate individual blog posts
  // use different template file based on post type 
  // (files in `blog/posts` are rendered with "article" template, `blog/links` with "link" template, etc)

  posts
    .forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      // define post types and corresponding template files
      let slug = post.node.fields.slug
      let templateComponent
      if (slug.startsWith('/blog/posts/')) {
        templateComponent = ArticlePostTemplate
      } else if (slug.startsWith('/blog/links/')) {
        templateComponent = LinkPostTemplate
      } else if (slug.startsWith('/blog/notes/')) {
        templateComponent = NotePostTemplate
      }

      // create pages with specified path and template
      createPage({
        path: slug.replace('/blog', ''),
        component: templateComponent,
        context: {
          slug,
          previous,
          next,
        },
      })

      // generate post share images (dev only)
      // !TODO explore how this works 🤓
      if (process.env.gatsby_executing_command.includes('develop')) {
        createPage({
          path: `${slug.replace('/blog', '')}/image_tw`,
          component: BlogPostShareImage,
          context: {
            slug: slug,
            width: 440,
            height: 220,
            type: 'twitter',
          }
        })
        createPage({
          path: `${slug.replace('/blog', '')}/image_fb`,
          component: BlogPostShareImage,
          context: {
            slug: slug,
            width: 1200,
            height: 630,
            type: 'facebook',
          }
        })
      }

    })

  // 3. generate tag archive pages
  // based on `tags` field in frontmatter

  posts
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce((acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])], [])
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: TagTemplate,
        context: {
          tag: uniqTag
        },
      })
    })
  
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}