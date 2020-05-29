import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Arrow from "./images/arrow"
import PinkArrow from "./images/pink_arrow"
import BlackArrow from "./images/black_arrow"

const Wrapper = styled.div`
  ${tw`relative no-underline`};
  width: 418px;
  padding: 0 4px 24px;
  text-align: center;
  a {
    text-decoration: none;
  }
  image:hover {
    opacity: 0.5;
  }
`

const Wrappito = styled.div`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 6rem;
`

const Category = styled.h1`
  font-family: "Popo", sans-serif;
  margin-top: 2rem;
  color: rgb(153, 153, 153);
  transition: all 0.4s ease;
  font-weight: 400;
  font-size: 16px;
  :hover {
    color: rgb(17, 17, 17);
  }
`

const Title = styled.h1`
  font-family: "Popo", sans-serif;
  margin-top: 0.5rem;
  color: rgb(17, 17, 17);
  transition: all 0.4s ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: -0.4px;
  font-size: 17px;
  :hover {
    color: rgb(201, 140, 192);
  }
`

const Description = styled.text`
  font-family: "Popo", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: rgb(161, 161, 161);
`

const HImg = styled.div`
  height: 10%;
  width: 10%;
  position: absolute;
  top: 53%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  :hover {
    opacity: 1;
  }
`

const ImgCont = styled.div`
  height: auto;
  width: auto;
`

const Black = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  top: 0;
  bottom: 19.6rem;
  left: 1%;
  right: 1%;

  opacity: 0;
  padding: 0 4px 24px;

  transition: 0.5s ease;
  background-color: #000;
  :hover {
    opacity: 0.3;
  }
`

const PinkArrowDiv = styled.div`
  width: 6%;
  padding-top: 1rem;
  padding-bottom: 5rem;
  display: block;
  position: absolute;
  height: 20rem;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition: 0.5s ease;
  opacity: 1;
  :hover {
    opacity: 0;
  }
`

const BlackArrowDiv = styled.div`
  width: 6%;
  padding-top: 1rem;
  padding-bottom: 5rem;
  display: block;
  position: absolute;
  height: 20rem;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  opacity: 0;
  transition: 0.5s ease;
  :hover {
    opacity: 1;
  }
`

const BlogCard = ({ title, category, pagePath, imagePath, children }) => (
  <Wrapper rel="noopener noreferrer">
    <Link to={pagePath}>
      <ImgCont>
        <Image alt="Post Picture" filename={imagePath} />
        <Black>
          <HImg>
            <Arrow />
          </HImg>
        </Black>
      </ImgCont>
    </Link>
    <Wrappito>
      <Link to={"category/" + category}>
        <Category>{category}</Category>
      </Link>
      <Link to={pagePath}>
        <Title>{title}</Title>
      </Link>
      <Description>{children}</Description>
      <Link to={pagePath}></Link>
      <Link to={pagePath}>
        <PinkArrowDiv>
          <PinkArrow />
        </PinkArrowDiv>
        <BlackArrowDiv>
          <BlackArrow />
        </BlackArrowDiv>
      </Link>
    </Wrappito>
  </Wrapper>
)
export default BlogCard

export const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
