import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
const ImgWrapper2 = styled.span`
  display:inline-block;
  width: 200px;
  
  .logo {
    margin-top: 15px;
  }
  
  @media screen and (max-width: 992px) {
    .logo{ 
      margin:10px;
    }
  }
`

/**
 *
 */
const Logo = ({ location, src }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cf_negro.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <ImgWrapper2>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: "200px" }}
        imgStyle={{ objectFit: "contain" }}
        className={"logo"}
      />
    </ImgWrapper2>
  )
}

export default Logo