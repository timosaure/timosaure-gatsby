import React from "react"
import Home from "../components/home/home"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
