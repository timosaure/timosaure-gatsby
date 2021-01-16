import React from "react"

import Img from "gatsby-image"

import BulletPoints from "./bullet_points"

const PortfolioItem = ({ item }) => {
  return (
    <div className="columns portfolio-item-row">
      <div className="column is-3 is-6-mobile">
        <Img fluid={item.logo.childImageSharp.fluid} />
      </div>
      <div className="column is-8 is-offset-1">
        <h2 className="title is-5">{item.position}</h2>
        <h3 className="subtitle is-6 mb-1">
          {item.company} <span className="mx-1">|</span> {item.timeframe}
        </h3>
        <BulletPoints points={item.bulletPoints} />
      </div>
    </div>
  )
}

export default PortfolioItem
