import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import Portfolio from "../portfolio/portfolio"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "typing_background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <section className="hero is-fullheight is-transparent">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="main-title is-uppercase">Timo Saure</h1>
            <h2 className="main-subtitle">Software Engineer</h2>
            <h2 className="main-subtitle">Full Stack Developer</h2>
            <h2 className="main-subtitle">Data Engineer</h2>
          </div>
        </div>
        <a href="#main" className="banner-down-arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <div className="background-image-container">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="background-image"
          />
        </div>
      </section>
      <Portfolio id="main" />
    </>
  )
}

export default Home
