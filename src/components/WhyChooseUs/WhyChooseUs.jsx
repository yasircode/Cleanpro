import './WhyChooseUs.css'

const benefits = [
  {
    icon: '✓',
    title: 'Trusted Professionals',
    description:
      'Our cleaning professionals are carefully selected to provide reliable and consistent service.',
  },
  {
    icon: '★',
    title: 'Quality Guaranteed',
    description:
      'We focus on the details so your home or workplace looks and feels properly clean.',
  },
  {
    icon: '⏱',
    title: 'Flexible Scheduling',
    description:
      'Choose a cleaning time that works around your schedule, including recurring visits.',
  },
  {
    icon: '♥',
    title: 'Customer First',
    description:
      'Your satisfaction matters. We aim to make every booking simple and stress-free.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-content">

          <span className="section-eyebrow">
            Why CleanPro
          </span>

          <h2>
            Cleaning you can
            <br />
            <span>count on.</span>
          </h2>

          <p>
            We make professional cleaning simple, reliable and
            convenient. From one-time deep cleans to regular
            home and office cleaning, our goal is to give you
            more time to focus on what matters.
          </p>

          <a href="/booking" className="why-button">
            Book Your Cleaning
          </a>

        </div>

        <div className="benefits-grid">

          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>

              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs