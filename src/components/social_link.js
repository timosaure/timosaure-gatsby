import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLink = ({ icon, href }) => {
  return (
    <a className="button social-link" href={href}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default SocialLink
