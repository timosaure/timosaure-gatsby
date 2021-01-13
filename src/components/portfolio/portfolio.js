import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import PortfolioItem from "./portfolio_item"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            company
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
  `)

  const rows = data.allPortfolioJson.edges.map((edge, index) => (
    <PortfolioItem key={index} item={edge.node} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop">{rows}</div>
    </section>
  )
}

export default Portfolio
