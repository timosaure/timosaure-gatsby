import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../data/offer/icon-import"

const Offer = ({ id, offerItems }) => {
  const cards = offerItems.map((item, index) => (
    <Card key={index} content={item} />
  ))

  return (
    <section id={id} className="section">
      <div className="container is-max-desktop is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
        {cards}
      </div>
    </section>
  )
}

const Card = ({ content }) => (
  <div className="offer-card">
    <div className="card-icon">
      <FontAwesomeIcon className="icon" icon={content.icon} />
    </div>
    <div className="content px-5 pb-5 pt-6">
      <p className="title is-4">{content.title}</p>
      <div className="content">
        <p>{content.text}</p>
      </div>
    </div>
  </div>
)

export default Offer
