import './CTA.css'

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-content">

          <span className="cta-eyebrow">
            Ready for a cleaner space?
          </span>

          <h2>
            Let us take care
            <br />
            of the cleaning.
          </h2>

          <p>
            Book your professional cleaning service today
            and enjoy a cleaner, fresher space without the hassle.
          </p>

          <div className="cta-actions">
            <a href="/booking" className="cta-primary">
              Book a Cleaning
            </a>

            <a href="/contact" className="cta-secondary">
              Contact Us
            </a>
          </div>

        </div>

        <div className="cta-badge">

          <div className="cta-badge-icon">
            ✓
          </div>

          <div>
            <strong>Professional Service</strong>
            <span>Reliable • Simple • Convenient</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CTA