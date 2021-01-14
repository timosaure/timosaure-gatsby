import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <a className="button social-link">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a className="button social-link">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a className="button social-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
