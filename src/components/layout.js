/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.module.css"
import styled from "styled-components"
import Footer from "./footer"


const GlobalStyles = styled.div`
  

  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
    font-weight: bolder;
    margin: 0;
  }

  h1 {
    color: black;
    margin-bottom: 24px;
  }

  h2 {
    color: black;
    letter-spacing: 6px;
    margin: 0;
  }

  h3 {
    color: black;
  }
  
  h4 {
    color: #1961AC;
    margin: 0;
  }

  h5 {
    color: black;
    margin: 0px;
  }

  .is-hidden {
    visibility: hidden;
    height: 0px !important;
    width: 0px;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden;
  }

  .container {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0.5rem 0rem;
  }

  p.deflat {
    font-style: italic;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .white-background {
    background: white;
  }

  .section {
    width: 100%;
  }

  .italic {
    font-style: italic;
  }

  .black {
    font-weight: 800;
  }

  .truncate-text {
    color: #707070;
  }

  .align-right {
    text-align: right;
  }

  .no-scroll {
    overflow-y: hidden !important ;
  }

  .menu-hidden {
      width:0;
      color: #171717 !important;
  }

  .height-space{
    height 100vh;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    .hide-on-small {
      display: none;
    }
    .hide-on-med-and-down {
      display: none;
    }

    .container {
      padding: 0 30px;
      max-width: 100%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .hide-on-med-and-down {
      display: none;
    }
    .container {
      padding: 0 30px;
      max-width: 720px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .hide-on-large-and-up {
      display: none;
    }
    .container {
      padding: 0 30px;
      max-width: 960px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .hide-on-large-and-up {
      display: none;
    }

    .hide-on-xlarge {
      display: none;
    }
    
    .container {
      padding: 0 30px;
      max-width: 1140px;
    }
  }
`

const Layout = ({ children, location }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <GlobalStyles>
      <div className="height-space">
      <Header siteTitle={data.site.siteMetadata.title}
              scrolled={scrolled}
              location={location} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </GlobalStyles>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
