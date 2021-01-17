import React from "react"

import Img from "gatsby-image"

const Image = ({ image, className }) => {
  if (image.childImageSharp) {
    if (image.childImageSharp.fluid) {
      return <Img className={className} fluid={image.childImageSharp.fluid} />
    } else {
      return <Img className={className} fixed={image.childImageSharp.fixed} />
    }
  } else {
    return <img className={className} src={image.publicURL} />
  }
}

export default Image
