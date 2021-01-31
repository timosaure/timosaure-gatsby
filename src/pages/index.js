import { graphql } from "gatsby"
import React from "react"
import Home from "../components/home/home"
import Offer from "../components/offer/offer"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const offerItems = data.offer.edges[0].node.childOfferJson.items

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <Offer id="main" offerItems={offerItems} />
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
