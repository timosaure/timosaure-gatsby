import React from "react"

import Portfolio from "./portfolio/portfolio"

const Home = () => (
  <>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="main-title is-uppercase">Timo Saure</h1>
          <h2 className="main-subtitle">Software Engineer</h2>
          <h2 className="main-subtitle">Full Stack Developer</h2>
          <h2 className="main-subtitle">Data Engineer</h2>
        </div>
      </div>
    </section>
    <Portfolio />
  </>
)

export default Home
