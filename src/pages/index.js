import { graphql } from "gatsby"
import React from "react"
import Home from "../components/home/home"
import Offer from "../components/offer/offer"
import ContactForm from "../components/contact_form/contact_form"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = ({ data }) => {
  const offerItems = data.offer.edges[0].node.childOfferJson.items
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <Offer id="main" offerItems={offerItems} />
      <section className="section">
        <div className="container is-max-desktop">
          <div className="has-text-centered  mt-6 mb-5">
            <h1 className="title">{t("contact")}</h1>
          </div>
          <ContactForm name="Home" successPath="/contact/success" />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    offer: allFile(
      filter: { relativeDirectory: { eq: "offer" }, name: { eq: $language } }
    ) {
      edges {
        node {
          childOfferJson {
            items {
              title
              icon
              text
            }
          }
        }
      }
    }
  }
`

export default IndexPage
