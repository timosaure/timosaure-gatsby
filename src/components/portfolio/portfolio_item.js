import React from "react"

import Img from "gatsby-image"

const PortfolioItem = ({ item }) => {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <Img fluid={item.logo.childImageSharp.fluid} />
      </div>
      <div className="column is-two-thirds">
        <h2 className="title is-5">{item.position}</h2>
        <h3 className="subtitle is-6">{item.company}</h3>
      </div>
    </div>
  )
}

export default PortfolioItem
