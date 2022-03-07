import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Meta from "../components/meta"
// import SEO from "../components/seo"

const BlogPage = ({ data }) => {

  return (
      <div>
        <Layout>
          <Meta/>
          <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <dir key={node.blogId}>
                <span>{node.revisedAt}</span>
                <img src={node.mainVisual.url}
                  alt="Main visual"
                  width="10%"
                />
                <Link className="text-center" to={`/blog/${node.blogId}`}>{node.title}</Link>
                <div
                  dangerouslySetInnerHTML={{
                  __html: `${node.summary}`,
                  }}
                />
              </dir>
            ))}
          </ul>
          <button className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
            <Link to="/">Top</Link>
          </button>
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
