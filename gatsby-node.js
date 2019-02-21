const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    const filterByPages = result.data.allMarkdownRemark.edges.filter(({ node }) =>
      node.frontmatter.templateKey.includes('page'),
    )

    console.log(JSON.stringify(filterByPages, null, 2))

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    filterByPages.forEach(({ node }) => {
      if (node.frontmatter.templateKey.includes('index')) {
        createPage({
          path: '/',
          component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
          context: {
            id: node.id,
          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
