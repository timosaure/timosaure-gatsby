import React from "react"
import About from "../components/about/about"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About />
  </Layout>
)

export default AboutPage
