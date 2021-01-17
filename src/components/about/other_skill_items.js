import React from "react"

import Image from "../image"

const OtherSkillItems = ({ skills }) => {
  const columns = skills.map((skill, index) => (
    <a key={index} className="p-3" href={skill.url}>
      <Image image={skill.image} className="other-skill-logo" />
    </a>
  ))

  return (
    <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-flex-start">
      {columns}
    </div>
  )
}

export default OtherSkillItems
