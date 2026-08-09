import services from '../../data/services'
import './Services.css'

function Services() {
  return (
    <main className="services-page">

      {/* Hero */}

      <section className="services-hero">
        <div className="services-container">

          <span className="section-eyebrow">
            What We Offer
          </span>

          <h1>
            Professional cleaning,
            <br />
            <span>made simple.</span>
          </h1>

          <p>
            Choose the cleaning service that fits your needs.
            Our professional cleaners are ready to make your
            space feel fresh and spotless.
          </p>

        </div>
      </section>


      {/* Services */}

      <section className="services-section">
        <div className="services-container">

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="service-card"
                key={service.id}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h2>
                  {service.title}
                </h2>

                <p>
                  {service.description}
                </p>

                <div className="service-bottom">

                  <strong>
                    {service.price}
                  </strong>

                  <a href="/booking">
                    Book →
                  </a>

                </div>

              </article>
            ))}

          </div>


          <div className="services-cta">

            <a href="/booking">
              Book a Cleaning →
            </a>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Services