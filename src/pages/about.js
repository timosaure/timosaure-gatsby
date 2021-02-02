import { graphql } from "gatsby"
import React from "react"
import About from "../components/about/about"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <About data={data.allFile.edges[0].node.childAboutJson} />
  </Layout>
)

export const query = graphql`
  query($language: String!) {
    allFile(
      filter: { relativeDirectory: { eq: "about" }, name: { eq: $language } }
    ) {
      edges {
        node {
          childAboutJson {
            portrait {
              childImageSharp {
                fluid(quality: 90, webpQuality: 90, maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            portfolio {
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
            skills {
              logo {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              description
            }
            other_skills {
              image {
                childImageSharp {
                  fixed(height: 48) {
                    ...GatsbyImageSharpFixed
                  }
                }
                publicURL
              }
              url
            }
            sections
          }
        }
      }
    }
  }
`

export default AboutPage
