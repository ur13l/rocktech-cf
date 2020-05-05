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
  margin-top: 20px;
  grid-template-columns: 6fr 3fr 2fr 1fr;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;



  .footer-title {
    margin-top: 10px;
    margin-bottom: 6px;
    font-weight: normal !important;
    font-size: 14px;
  }

  .address {
    font-size: 10px;
    line-height: normal;
  }

  
  .footer-color {
    color: #707070;
  }
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
    

    .icon-cf-image{
      max-width:100px;
      margin-left: auto;
      margin-right: auto;
    }
    .address-text {
      text-align: center;
      margin-bottom: 30px;
    }

    .address {
      text-align: center;
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

    .address {
      text-align: center;
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
    grid-template-columns: 1fr 1fr  7fr 1fr;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr  7fr 1fr;
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
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <FooterWrapper>
      <div className="icon-cf">
          <Link>
            <Img  className="icon-cf-image"
              fluid={data.iconRD.childImageSharp.fluid}
              imgStyle={{
                objectFit: "contain", width: '100%', height: '100%', marginBottom: 0,
                paddingLeft: '5px', paddingRight: '5px'
              }}
              style={{ maxHeight: '150px' }}
            />
          </Link>
        </div>
        <div className="address">
         
        </div>
        <div className="address">
        <h5 className="footer-title footer-color">Oficina Central</h5>
          <a
            className="address footer-color"
            href="https://g.page/Rocktech?share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              Av. Cerro Gordo del Campestre 201 Int. 303
              <br />
              Col. Las Quintas, León, Gto.
              <br />
              C.P. 37125
              <br />
              477 688 89 86.
            </p>
          </a>
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
       
      </FooterWrapper>
    </div>
  )
}

export default Footer
