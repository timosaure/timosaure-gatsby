import React from "react"

const BulletPoints = ({ points }) => {
  const listItems = points.map((point, index) => <li key={index}>{point}</li>)

  return (
    <div className="content">
      <ul>{listItems}</ul>
    </div>
  )
}

export default BulletPoints
