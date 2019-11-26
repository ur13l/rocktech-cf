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
  }

  /* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

  @media  (max-width: 1024px) {
    h1 {
    font-size: 27px;
    padding-top:54px;
    text-align: center;
  }

  h3 {
    color: #fff;
    text-transform: uppercase;
    font-size: 24px;
    padding-bottom:54px;
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
    const logocf = this.props.data.logocf.childImageSharp.fixed
    const rocktechlogo = this.props.data.rocktechlogo.childImageSharp.fixed
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
              <Img fixed={logocf} />
              <h1>¡En construcción!</h1>
              <h3>Mientras tanto visítanos en </h3>
              <a href="https://rocktech.mx" target="_blank">
              <div className="frame">
                <Img fixed={rocktechlogo} />
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
        fixed(quality: 90, width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    rocktechlogo: file(relativePath: { eq: "rocktech-logo.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
