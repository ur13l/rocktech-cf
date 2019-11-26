/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const Layout = ({ children }) => {
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
      <main>{children}</main>
  )
}

const LayoutStyled = styled(Layout)`
height: 100%;
main {
  height:100%;
}
  body, html {
    height: 100% !important;
  }
`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutStyled
