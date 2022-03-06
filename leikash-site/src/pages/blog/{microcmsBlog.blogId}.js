import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
// import SEO from "../../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <span>{data.microcmsBlog.writer.name}</span>
    <h1>{data.microcmsBlog.title}</h1>
    <div>
      <img
        src={data.microcmsBlog.mainVisual.url}
        alt="Main visual"
        width="50%"
      />
    </div>
    <hr/>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.summary}`,
      }}
    />
    <hr/>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
    />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      mainVisual {
        url
        height
        width
      }
      summary
      body
      writer {
        name
      }
    }
  }
`
