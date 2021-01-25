import { graphql } from "gatsby"
import React from "react"
import Home from "../components/home/home"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const portfolioItems = data.allFile.edges[0].node.childPortfolioJson.items

  return (
    <Layout>
      <SEO title="Home" />
      <Home portfolioItems={portfolioItems} />
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
    allFile(
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
  }
`

export default IndexPage
