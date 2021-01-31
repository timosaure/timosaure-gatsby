import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../data/offer/icon-import"

const Offer = ({ offerItems }) => {
  const cards = offerItems.map((item, index) => (
    <Card key={index} content={item} />
  ))

  return (
    <section className="section">
      <div className="container is-max-desktop is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
        {cards}
      </div>
    </section>
  )
}

const Card = ({ content }) => (
  <div className="card offer-card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <FontAwesomeIcon className="image is-40x40" icon={content.icon} />
        </div>
        <div className="media-content is-clipped is-align-self-center">
          <p className="title is-4">{content.title}</p>
        </div>
      </div>
      <div className="content">
        <p>{content.text}</p>
      </div>
    </div>
  </div>
)

export default Offer
