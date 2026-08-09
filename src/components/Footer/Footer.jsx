import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            Clean<span>Pro</span>
          </Link>

          <p>
            Professional cleaning services made simple,
            reliable and convenient for homes and businesses.
          </p>

          <Link
            to="/booking"
            className="footer-booking"
          >
            Book a Cleaning →
          </Link>

        </div>


        {/* Navigation */}

        <div className="footer-column">

          <h3>Company</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* Services */}

        <div className="footer-column">

          <h3>Services</h3>

          <Link to="/booking">
            Home Cleaning
          </Link>

          <Link to="/booking">
            Deep Cleaning
          </Link>

          <Link to="/booking">
            Office Cleaning
          </Link>

          <Link to="/booking">
            Move-In Cleaning
          </Link>

        </div>


        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <a href="mailto:hello@cleanpro.com">
            hello@cleanpro.com
          </a>

          <a href="tel:+440000000000">
            +44 0000 000 000
          </a>

          <span>
            London & surrounding areas
          </span>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} CleanPro. All rights reserved.
          </p>

          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer