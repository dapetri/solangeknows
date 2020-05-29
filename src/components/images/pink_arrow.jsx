import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ArrowPink = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "arrow_pink.png" }) {
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

export default ArrowPink
