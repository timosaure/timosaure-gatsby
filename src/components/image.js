import React from "react"

import Img from "gatsby-image"

const Image = ({ image }) => {
  if (image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} />
  } else {
    return <img src={image.publicURL} />
  }
}

export default Image
