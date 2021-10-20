import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log(markdownRemark)
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container">
        <article className="content">
          {frontmatter.featuredImage ? (
            <figure className="post-feature-image">
              <img src={frontmatter.featuredImage} alt={frontmatter.title} />
            </figure>
          ) : null}
          <section className="post-full-content">
            <h1 className="content-title">{frontmatter.title}</h1>
            <h1 className="content-date">Posted on {frontmatter.date}</h1>
            <section
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      date
      title
    }
  }
}`
