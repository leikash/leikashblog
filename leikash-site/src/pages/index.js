import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
      <div>
        <Layout>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <dir key={node.blogId}>
                <Link className="blogTitle" to={`/blog/${node.blogId}`}>{node.title}</Link>
              </dir>
            ))}
          </ul>
        </Layout>
      </div>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`