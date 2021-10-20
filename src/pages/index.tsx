import * as React from "react"
import Layout from "../layout/layout"
import { Hero } from "../components/Hero.component"
import { PostCard } from "../components/PostCard.component"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Hero />
      <div className="container">
        <section className="post-feed">
          {posts.map(post => (
            <PostCard post={post.frontmatter} key={post.id} />
          ))}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogList {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          slug
          date
          excerpt
          author
          readtime
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
