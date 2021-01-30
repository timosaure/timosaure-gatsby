import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserFriends } from "@fortawesome/free-solid-svg-icons"

import Portfolio from "../portfolio/portfolio"
import { useTranslation } from "react-i18next"

const Offer = () => {
  const { t } = useTranslation()

  const cards = Array.from(Array(6).keys()).map(i => <Card />)

  return (
    <section className="section is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center">
      {cards}
    </section>
  )
}

const Card = () => (
  <div className="card offer-card m-2">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <FontAwesomeIcon className="image is-64x64" icon={faUserFriends} />
        </div>
        <div className="media-content is-clipped is-align-self-center">
          <p className="title is-3">Short title</p>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa
          cumque quia labore aliquid ratione commodi, magni magnam tenetur ipsam
          debitis voluptate nam sapiente exercitationem modi illo consequatur
          aut impedit.
        </p>
      </div>
    </div>
  </div>
)

export default Offer
