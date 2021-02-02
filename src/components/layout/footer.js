import React from "react"

import SocialLink from "./social_link"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="content is-flex is-flex-direction-column is-align-items-center">
        <div>
          <SocialLink icon={faGithub} href="https://github.com/timosaure" />
          <SocialLink
            icon={faLinkedinIn}
            href="https://www.linkedin.com/in/timosaure"
          />
          <SocialLink icon={faEnvelope} href="/contact" />
        </div>
        <p className="has-text-white mt-5">
          {"Copyright Ⓒ " + new Date().getFullYear() + " Timo Saure"}
        </p>
        <p className="has-text-white">{t("footer_detail")}</p>
      </div>
    </footer>
  )
}

export default Footer
