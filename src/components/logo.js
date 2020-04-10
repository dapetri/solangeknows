import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "sol.png" }) {
        childImageSharp {
          fixed(width: 220, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} alt="sol logo" />
    </div>
  )
}
