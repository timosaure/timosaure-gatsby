import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Header = () => {
  const checkIfTop = () => window.scrollY <= 0

  const [isTop, setIsTop] = useState(checkIfTop())
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(checkIfTop())
    })
  })

  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleKeyUp = event => {
    if (event.key === "Enter") {
      setMenuOpen(!isMenuOpen)
    }
  }

  return (
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

          <button
            className={"navbar-burger " + (isMenuOpen ? "is-active" : "")}
            style={{ border: "none" }}
            aria-label="menu"
            aria-expanded="false"
            data-target="main-navbar-items"
            tabIndex={0}
            onClick={() => setMenuOpen(!isMenuOpen)}
            onKeyUp={handleKeyUp}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div
          id="main-navbar-items"
          className={"navbar-menu " + (isMenuOpen ? "is-active" : "")}
        >
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
  )
}

export default Header
