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
                <span>{node.revisedAt}</span>
                <img src={node.mainVisual.url}
                  alt="Main visual"
                  width="10%"
                />
                <Link className="blogTitle" to={`/blog/${node.blogId}`}>{node.title}</Link>
                <div
                  dangerouslySetInnerHTML={{
                  __html: `${node.summary}`,
                  }}
                />
              </dir>
            ))}
          </ul>
        </Layout>
      </div>
  )
}

export default BlogPage

// graphql ソート
// https://qiita.com/atomyah/items/759823f6c1e86ce44b23

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: [revisedAt], order: DESC }) {
      edges {
        node {
          blogId
          revisedAt
          title
          summary
          mainVisual {
            url
            height
            width
          }
        }
      }
    }
  }
`
