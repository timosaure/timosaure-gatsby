import React from "react"

import Image from "../image"

const OtherSkillItems = ({ skills }) => {
  const columns = skills.map((skill, index) => (
    <div key={index} className="p-3">
      <Image image={skill} className="other-skill-logo" />
    </div>
  ))

  return (
    <div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-flex-start">
      {columns}
    </div>
  )
}

export default OtherSkillItems
