import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Arrow = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "arrow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="arrow" />
}

export default Arrow
