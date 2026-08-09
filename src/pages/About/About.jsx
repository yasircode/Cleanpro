import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* Hero */}

      <section className="about-hero">
        <div className="about-container">

          <span className="section-eyebrow">
            About CleanPro
          </span>

          <h1>
            Cleaning done with
            <br />
            <span>care and consistency.</span>
          </h1>

          <p>
            We make professional cleaning simple, reliable
            and convenient for homes and businesses.
          </p>

        </div>
      </section>


      {/* Story */}

      <section className="about-story">
        <div className="about-container about-story-grid">

          <div className="about-story-content">

            <span className="section-eyebrow">
              Our Story
            </span>

            <h2>
              A cleaner space
              <br />
              <span>makes a difference.</span>
            </h2>

            <p>
              CleanPro was created with one simple goal:
              to make professional cleaning easier for
              customers to book and easier to trust.
            </p>

            <p>
              From regular home cleaning to detailed deep
              cleaning and professional office cleaning,
              we focus on delivering a consistent experience
              from booking to completion.
            </p>

          </div>


          <div className="about-story-card">

            <div className="about-story-card-icon">
              ✦
            </div>

            <h3>
              Professional service.
            </h3>

            <p>
              Reliable cleaning solutions designed around
              your space, schedule and needs.
            </p>

          </div>

        </div>
      </section>


      {/* Values */}

      <section className="about-values">
        <div className="about-container">

          <div className="about-section-heading">

            <span className="section-eyebrow">
              What Matters To Us
            </span>

            <h2>
              Built around
              <br />
              <span>three simple values.</span>
            </h2>

          </div>


          <div className="about-values-grid">

            <article className="about-value-card">

              <div className="about-value-number">
                01
              </div>

              <h3>
                Reliability
              </h3>

              <p>
                We believe customers should be able to
                depend on a professional service that
                respects their time and space.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-number">
                02
              </div>

              <h3>
                Quality
              </h3>

              <p>
                Every cleaning is approached with attention
                to detail and a commitment to a high standard.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-number">
                03
              </div>

              <h3>
                Care
              </h3>

              <p>
                We treat every property with respect and
                every customer with a personal approach.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-box">

            <div>

              <span className="section-eyebrow">
                Ready For A Cleaner Space?
              </span>

              <h2>
                Let's get your cleaning
                <br />
                booked.
              </h2>

            </div>

            <a href="/booking">
              Book a Cleaning →
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default About