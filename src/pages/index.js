import { graphql } from "gatsby"
import React from "react"
import Home from "../components/home/home"
import Offer from "../components/offer/offer"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const portfolioItems = data.portfolio.edges[0].node.childPortfolioJson.items
  const offerItems = data.offer.edges[0].node.childOfferJson.items

  return (
    <Layout>
      <SEO title="Home" />
      <Home portfolioItems={portfolioItems} />
      <Offer offerItems={offerItems} />
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    portfolio: allFile(
      filter: {
        relativeDirectory: { eq: "portfolio" }
        name: { eq: $language }
      }
    ) {
      edges {
        node {
          childPortfolioJson {
            items {
              company
              timeframe
              position
              bulletPoints
              logo {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
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
