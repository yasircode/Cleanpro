import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
  event.preventDefault()

  const form = event.target

  try {
    const response = await fetch(
      'https://formspree.io/f/mgawoblg',
      {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    } else {
      alert('Message could not be sent. Please try again.')
    }
  } catch (error) {
    console.error(error)
    alert('Unable to send message. Please check your internet connection.')
  }
}

  return (
    <main className="contact-page">

      {/* Hero */}

      <section className="contact-hero">
        <div className="contact-container">

          <span className="section-eyebrow">
            Get In Touch
          </span>

          <h1>
            Let's talk about
            <br />
            <span>your cleaning needs.</span>
          </h1>

          <p>
            Have a question or need help choosing a service?
            Our team is here to help.
          </p>

        </div>
      </section>


      {/* Contact Section */}

      <section className="contact-section">
        <div className="contact-container contact-grid">

          {/* Information */}

          <div className="contact-info">

            <span className="section-eyebrow">
              Contact Us
            </span>

            <h2>
              We're here to
              <br />
              <span>help.</span>
            </h2>

            <p className="contact-intro">
              Whether you need a quote, have a question about
              our services, or want to discuss your cleaning
              requirements, send us a message.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ✉
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:hello@cleanpro.com">
                    hello@cleanpro.com
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+440000000000">
                    +44 0000 000 000
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  ◉
                </div>

                <div>
                  <span>Service Area</span>

                  <p>
                    London & surrounding areas
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Form */}

          <div className="contact-form-wrapper">

            {submitted ? (

              <div className="contact-success">

                <div className="contact-success-icon">
                  ✓
                </div>

                <h2>
                  Message Sent!
                </h2>

                <p>
                  Thank you for contacting CleanPro.
                  Our team will get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-form-group">

                    <label htmlFor="contact-name">
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send Message →
                </button>

              </form>

            )}

          </div>

        </div>
      </section>

    </main>
  )
}

export default Contact