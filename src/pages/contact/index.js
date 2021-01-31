import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ContactForm from "../../components/contact_form/contact_form"
import { withTranslation } from "gatsby-plugin-react-i18next"

const IndexPage = ({ t }) => (
  <Layout>
    <SEO title="Contact" />
    <section className="section">
      <div className="container is-max-desktop">
        <div className="has-text-centered  mt-6 mb-5">
          <h1 className="title">{t("contact")}</h1>
        </div>
        <ContactForm name="Contact" successPath="/contact/success" />
      </div>
    </section>
  </Layout>
)

export default withTranslation()(IndexPage)
