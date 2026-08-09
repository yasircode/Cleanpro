import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-eyebrow">
            Trusted Cleaning Professionals
          </span>

          <h1>
            A cleaner space.
            <br />
            <span>A better life.</span>
          </h1>

          <p>
            Professional home and office cleaning services
            delivered by trusted local cleaners. Simple booking,
            reliable service, and a spotless finish.
          </p>

          <div className="hero-actions">

            <a
              href="/booking"
              className="hero-primary-button"
            >
              Book a Cleaning
            </a>

            <a
              href="/services"
              className="hero-secondary-button"
            >
              Explore Services
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <strong>5,000+</strong>
              <span>Cleanings completed</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>4.9/5</strong>
              <span>Customer rating</span>
            </div>

          </div>

        </div>


        <div className="hero-visual">

          <div className="hero-image-wrapper">
            <img
              src="/src/assets/images/hero.png"
              alt="Professional cleaning service"
            />
          </div>

          <div className="hero-floating-card">

            <div className="floating-icon">
              ✓
            </div>

            <div>
              <strong>Trusted Service</strong>
              <span>Professional cleaners</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero