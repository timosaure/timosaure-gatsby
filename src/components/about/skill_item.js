import React from "react"

import Img from "gatsby-image"
import Image from "../image"

const SkillItem = ({ skill }) => {
  return (
    <div className="columns is-mobile portfolio-item-row">
      <div className="column  is-2-mobile is-offset-0-mobile is-1-tablet is-offset-1-tablet">
        <Image image={skill.logo} />
      </div>
      <div className="column is-9-tablet is-10-mobile">
        <p>{skill.description}</p>
      </div>
    </div>
  )
}

export default SkillItem
