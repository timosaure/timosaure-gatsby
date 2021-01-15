import React from "react"
import Home from "../components/home"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
