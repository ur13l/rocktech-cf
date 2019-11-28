import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image-es5"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const IndexPageWrapper = styled.div`
  .flex {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
  }

  h1 {
    font-weight: 800;
    color: #fff;
    text-transform: uppercase;
    font-size: 54px;
    padding-top: 54px;
  }

  h3 {
    color: #fff;
    text-transform: uppercase;
    font-size: 33px;
    padding-bottom: 54px;
  }

  .frame {
    border: 1px solid white;
    padding: 12px;
    min-width: 300px;
  }

  .logo-container {
    width: 100%;
    text-align: center;
    padding: 0 33px;
    * {
    margin: 0 auto;
    }
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media (max-width: 1024px) {
    h1 {
      font-size: 27px;
      padding-top: 54px;
      text-align: center;
    }

    h3 {
      color: #fff;
      text-transform: uppercase;
      font-size: 24px;
      padding-bottom: 54px;
      text-align: center;
    }
  }

  /* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
`

class IndexPage extends Component {
  render() {
    const image = this.props.data.desktop.childImageSharp.fluid
    const logocf = this.props.data.logocf.childImageSharp.fluid
    const rocktechlogo = this.props.data.rocktechlogo.childImageSharp.fluid
    return (
      <IndexPageWrapper>
        <Layout>
          <SEO title="Rocktech | Corporate & Finance" />
          <BackgroundImage
            className="background"
            Tag="section"
            fluid={image}
            backgroundColor={`#040e18`}
          >
            <div className="flex">
              <div className="logo-container">
              <Img fluid={logocf} 
                    style={{ maxWidth: "600px" }}
                    imgStyle={{ objectFit: "contain" }}/>
                    </div>
              <h1>¡En construcción!</h1>
              <h3>Mientras tanto conoce </h3>
              <a href="https://rocktech.mx" target="_blank">
              <div className="logo-container">
                <div className="frame">
                  <Img
                    fluid={rocktechlogo}
                    style={{ maxWidth: "400px" }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </div>
                </div>
              </a>
            </div>
          </BackgroundImage>
        </Layout>
      </IndexPageWrapper>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default IndexPage

export const postQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "cf-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    logocf: file(relativePath: { eq: "cf-logo.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    rocktechlogo: file(relativePath: { eq: "equity.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
