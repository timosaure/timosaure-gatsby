import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.scss"

const Layout = ({ children }) => {
  const [isTop, setIsTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY <= 0)
    })
  }, [])

  return (
    <>
      <header>
        <nav
          className={
            "navbar is-transparent is-fixed-top main-navbar " +
            (isTop ? "is-top" : "not-top")
          }
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span className="logo">TIMO</span>
            </Link>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="main-navbar-items"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="main-navbar-items" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/skills">
                Skills
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
