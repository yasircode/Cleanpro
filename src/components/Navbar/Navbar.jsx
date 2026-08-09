import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Clean<span>Pro</span>
        </NavLink>


        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>

          <NavLink
            to="/"
            className="navbar-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className="navbar-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className="navbar-link"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="navbar-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/booking"
            className="navbar-booking mobile-booking"
            onClick={closeMenu}
          >
            Book a Cleaning
          </NavLink>

        </nav>


        <NavLink
          to="/booking"
          className="navbar-booking desktop-booking"
        >
          Book a Cleaning
        </NavLink>


        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar