import React from "react"

import Img from "gatsby-image"
import Image from "../image"

const SkillItem = ({ skill }) => {
  return (
    <div className="columns portfolio-item-row">
      <div className="column is-1 is-offset-1 is-2-mobile">
        <Image image={skill.logo} />
      </div>
      <div className="column is-9">
        <p>{skill.description}</p>
      </div>
    </div>
  )
}

export default SkillItem
