import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const FooterWrapper = styled.footer`
  width: 100%;
  display: grid;
  margin-top: 100px;
  padding-bottom: 50px;
  grid-template-columns: 6fr 3fr 2fr 1fr;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
    max-width: 1140px;
    bottom: 0;

  
  .address-text {
    text-align: left;
    color: black;
    margin-bottom: 0;
  }
  
  .site-text {
    text-align: right;
    color: black;
    margin-bottom: 0;
    padding-right: 5px;
  }
  
  .footer-images {
    display: grid;
    padding: 0 10px;
    grid-template-columns: 4fr ;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 767px) {
    grid-template-columns: 12fr;
    
    .address-text {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .site-text {
      text-align: center;
      margin-bottom: 30px;
      padding-right: 0;
    }
    
    .footer-images {
      margin-bottom: 30px;
    }

    position: relative;
  
    
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 12fr;
    
    .address-text {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .site-text {
      text-align: center;
      margin-bottom: 30px;
      padding-right: 0;
    }
    
    .footer-images {
      margin-bottom: 30px;
    }

    position: relative;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 6fr 3fr 2fr 1fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 6fr 3fr 2fr 1fr;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      imageTwitter: file(relativePath: { eq: "gmail.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageLinkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFacebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMail: file(relativePath: { eq: "gmail.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconRD: file(relativePath: { eq: "cf-nuevo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <FooterWrapper>
        <div className="address">
          <p className="address-text">
            Av. Cerro Gordo del Campestre 201<br/>
            Int. 303<br/>
            Col. Las Quintas<br/>
            León, Gto.<br/>
            C.P. 37125
          </p>
        </div>
        <div className="site">
          <p className="site-text">
          </p>
        </div>
        <div className="footer-images">
        <a href="mailto:cecilia.pantoja@rocktech.mx">
            <Img
              fluid={data.imageMail.childImageSharp.fluid}
              imgStyle={{
                objectFit: "contain", width: '100%', height: '100%', marginBottom: 0,
                paddingLeft: '5px', paddingRight: '5px'
              }}
              style={{ maxHeight: '40px' }}
            />
          </a>
        </div>
        <div className="icon-rd">
          <Link>
            <Img
              fluid={data.iconRD.childImageSharp.fluid}
              imgStyle={{
                objectFit: "contain", width: '100%', height: '100%', marginBottom: 0,
                paddingLeft: '5px', paddingRight: '5px'
              }}
              style={{ maxHeight: '150px' }}
            />
          </Link>
        </div>
      </FooterWrapper>
    </div>
  )
}

export default Footer
