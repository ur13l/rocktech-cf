import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Services from "../components/services"
import Divider from "../components/items/divider"


const LayoutWrapper = styled.div`
  background-color: #FFFFFF;
  min-height:99%;
  color: white;

  .rocktech-def {
    padding-top:6vh;
    margin-bottom: 12vh;
  }
  
  
`

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const IndexPage = () => (
  <LayoutWrapper>
    <Layout location="/">
      <SEO title="Rocktech CF" />
        <Divider />
        <Services />
    </Layout>
  </LayoutWrapper>
)

export default IndexPage
