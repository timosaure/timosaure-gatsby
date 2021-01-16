import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact_form/contact_form"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="section">
      <div className="container is-max-desktop">
        <div className="has-text-centered  mt-6 mb-5">
          <h1 className="title">Contact</h1>
        </div>
        <ContactForm />
      </div>
    </section>
  </Layout>
)

export default IndexPage
