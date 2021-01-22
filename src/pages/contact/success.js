import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Message sent" />
    <div className="is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">
      <section class="hero is-primary mt-6 has-text-centered">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Thank you for contacting me</h1>
            <h2 class="subtitle">
              I appreciate that you've taken the time to write me. I will get
              back to you as soon as possible.
            </h2>
            <Link className="subtitle" to="/">
              Go back home <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
