import { Link } from "gatsby"
import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { withTranslation } from "gatsby-plugin-react-i18next"

const IndexPage = ({ t }) => (
  <Layout>
    <SEO title="Message sent" />
    <div className="is-flex is-flex-direction-column is-flex-grow-1 is-justify-content-center is-align-content-center">
      <section className="hero is-primary mt-6 has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{t("thanks_title")}</h1>
            <h2 className="subtitle">{t("thanks_text")}</h2>
            <Link className="subtitle" to="/">
              {t("back_home")} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default withTranslation()(IndexPage)
