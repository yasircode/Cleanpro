import services from '../../data/services'
import './Services.css'

function Services() {
  return (
    <main className="services-page">

      <section className="services-page-hero">
        <div className="services-page-container">

          <span className="section-eyebrow">
            Our Services
          </span>

          <h1>
            Professional cleaning
            <br />
            <span>for every space.</span>
          </h1>

          <p>
            Choose from our professional cleaning services
            designed for homes, offices and everything in between.
          </p>

        </div>
      </section>


      <section className="services-page-list">
        <div className="services-page-container">

          <div className="services-page-heading">

            <div>
              <span className="section-eyebrow">
                What We Offer
              </span>

              <h2>
                Cleaning services
                <br />
                <span>made simple.</span>
              </h2>
            </div>

            <p>
              Every service is designed to give you a cleaner,
              fresher and more comfortable space.
            </p>

          </div>


          <div className="services-page-grid">

            {services.map((service) => (
              <article
                className="services-page-card"
                key={service.id}
              >

                <div className="services-page-card-top">

                  <div className="services-page-icon">
                    {service.icon}
                  </div>

                  <span className="services-page-duration">
                    {service.duration}
                  </span>

                </div>


                <h2>
                  {service.title}
                </h2>

                <p className="services-page-short-description">
                  {service.shortDescription}
                </p>

                <p className="services-page-description">
                  {service.description}
                </p>


                <div className="services-page-card-bottom">

                  <div className="services-page-price">
                    <span>Starting from</span>
                    <strong>{service.price}</strong>
                  </div>

                  <a href="/booking">
                    Book Now →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      <section className="services-page-cta">

        <div className="services-page-container">

          <div className="services-page-cta-box">

            <div>
              <span className="section-eyebrow">
                Not sure what you need?
              </span>

              <h2>
                Talk to our team.
              </h2>

              <p>
                We're happy to help you choose the right
                cleaning service for your space.
              </p>
            </div>

            <a href="/contact">
              Contact Us →
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Services