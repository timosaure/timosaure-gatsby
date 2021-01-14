import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import PortfolioItem from "./portfolio_item"
import "./portfolio.scss"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
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
  `)

  const rows = data.allPortfolioJson.edges.map((edge, index) => (
    <PortfolioItem key={index} item={edge.node} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="columns mb-5">
          <div className="column is-offset-one-quarter is-three-quarters">
            <h1 className="title">Portfolio</h1>
          </div>
        </div>
        {rows}
      </div>
    </section>
  )
}

export default Portfolio
