import React from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import styled from "styled-components"

import BlogCard from "../components/blogCard"

import Layout, { MenuBar } from "../components/layout"

const IndexPage = props => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <SEO title="Home" />
      <Layout />
      <MenuBar />
      <PostContainer>
        <PostWrapper>
          {posts.map(({ node: post }) => (
            <BlogCard
              key={post.id}
              title={post.frontmatter.title}
              category={post.frontmatter.category}
              pagePath={post.frontmatter.pagePath}
              imagePath={post.frontmatter.imagePath}
              children={post.excerpt}
            ></BlogCard>
          ))}
        </PostWrapper>
      </PostContainer>
    </>
  )
}

export default IndexPage

const PostContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  grid-auto-rows: auto;
`

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 170)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            imagePath
            pagePath
            tags
            title
            category
          }
        }
      }
    }
  }
`
