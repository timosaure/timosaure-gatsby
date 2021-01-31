import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import PortfolioItem from "./portfolio_item"

const Portfolio = ({ items }) => {
  const rows = items.map((edge, index) => (
    <PortfolioItem key={index} item={edge} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="columns mb-5">
          <div className="column is-offset-one-third is-three-quarters">
            <h1 className="title">Portfolio</h1>
          </div>
        </div>
        {rows}
      </div>
    </section>
  )
}

export default Portfolio
