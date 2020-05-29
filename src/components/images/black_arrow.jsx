import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ArrowBlack = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "arrow_black.png" }) {
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

export default ArrowBlack
