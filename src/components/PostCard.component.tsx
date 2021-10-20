import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"

export const PostCard = ({ post }) => {
  console.log(post.featuredImage.childImageSharp.fluid.srcSet)
  let featuredImgFluid = post.featuredImage.childImageSharp.fluid
  return (
    <Link to={post.slug} className="post-card">
      <header className="post-card-header">
        <Img className="post-card-image" fluid={featuredImgFluid} />
        {/* <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div> */}
        <h2 className="post-card-title">{post.title}</h2>
      </header>
      <section className="post-card-excerpt">{post.excerpt}</section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <span>{post.author}</span>
        </div>
        <div className="post-card-footer-right">
          <div>{post.readtime} min read</div>
        </div>
      </footer>
    </Link>
  )
}
