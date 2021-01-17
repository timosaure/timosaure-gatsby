import React from "react"

import SocialLink from "./social_link"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <SocialLink icon={faGithub} href="https://github.com/timosaure" />
        <SocialLink
          icon={faLinkedinIn}
          href="https://www.linkedin.com/in/timosaure"
        />
        <SocialLink icon={faEnvelope} href="/contact" />
      </div>
    </footer>
  )
}

export default Footer
