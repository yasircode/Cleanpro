import { useState } from 'react'
import services from '../../data/services'
import './Booking.css'

const today = new Date().toISOString().split('T')[0]

function Booking() {
  const [formData, setFormData] = useState({
    service: '',
    propertyType: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const selectedService = services.find(
    (service) => service.title === formData.service
  )

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newErrors = {}

    if (!formData.service) {
      newErrors.service = 'Please select a cleaning service.'
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select your property type.'
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date.'
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred time.'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your property address.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setSending(true)

    try {
      const response = await fetch(
        'https://formspree.io/f/mgawoblg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Booking could not be sent. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('Unable to send booking. Please check your internet connection.')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <main className="booking-page">
        <section className="booking-success-section">
          <div className="booking-success">

            <div className="booking-success-icon">
              ✓
            </div>

            <span className="section-eyebrow">
              Booking Request Received
            </span>

            <h1>
              Thank you, {formData.name}!
            </h1>

            <p>
              Your cleaning request has been received.
              Our team will contact you to confirm your appointment.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  service: '',
                  propertyType: '',
                  date: '',
                  time: '',
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  notes: '',
                })
              }}
            >
              Make Another Booking
            </button>

          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="booking-page">

      <section className="booking-hero">
        <div className="booking-container">

          <span className="section-eyebrow">
            Book a Cleaning
          </span>

          <h1>
            Schedule your
            <br />
            <span>cleaning service.</span>
          </h1>

          <p>
            Choose your service, select a convenient date and
            provide your details. We'll take care of the rest.
          </p>

        </div>
      </section>


      <section className="booking-section">
        <div className="booking-container booking-grid">

          <div className="booking-info">

            <span className="section-eyebrow">
              Simple Booking
            </span>

            <h2>
              Get your space
              <br />
              <span>cleaned.</span>
            </h2>

            <p>
              Complete the form and we'll review your request.
              A member of our team will contact you to confirm
              availability and your appointment.
            </p>

            <div className="booking-points">

              <div className="booking-point">
                <span>✓</span>
                <p>Professional cleaning service</p>
              </div>

              <div className="booking-point">
                <span>✓</span>
                <p>Flexible scheduling</p>
              </div>

              <div className="booking-point">
                <span>✓</span>
                <p>Simple and transparent booking</p>
              </div>

              <div className="booking-point">
                <span>✓</span>
                <p>Friendly customer support</p>
              </div>

            </div>

          </div>


          <form
            className="booking-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="booking-form-header">
              <h2>Booking details</h2>
              <p>Tell us what you need.</p>
            </div>


            <div className="form-group">
              <label htmlFor="service">
                Cleaning Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">
                  Select a service
                </option>

                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>

              {errors.service && (
                <span className="form-error">
                  {errors.service}
                </span>
              )}
            </div>


            <div className="form-group">
              <label htmlFor="propertyType">
                Property Type
              </label>

              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">
                  Select property type
                </option>

                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>

              {errors.propertyType && (
                <span className="form-error">
                  {errors.propertyType}
                </span>
              )}
            </div>


            {selectedService && (
              <div className="selected-service-info">

                <div className="selected-service-info-item">
                  <span>Starting price</span>
                  <strong>{selectedService.price}</strong>
                </div>

                <div className="selected-service-info-divider"></div>

                <div className="selected-service-info-item">
                  <span>Estimated duration</span>
                  <strong>
                    {selectedService.duration || 'Varies by property'}
                  </strong>
                </div>

              </div>
            )}


            <div className="booking-form-row">

              <div className="form-group">
                <label htmlFor="date">
                  Preferred Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                />

                {errors.date && (
                  <span className="form-error">
                    {errors.date}
                  </span>
                )}
              </div>


              <div className="form-group">
                <label htmlFor="time">
                  Preferred Time
                </label>

                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">
                    Select time
                  </option>

                  <option value="08:00 - 10:00">
                    08:00 - 10:00
                  </option>

                  <option value="10:00 - 12:00">
                    10:00 - 12:00
                  </option>

                  <option value="12:00 - 14:00">
                    12:00 - 14:00
                  </option>

                  <option value="14:00 - 16:00">
                    14:00 - 16:00
                  </option>

                  <option value="16:00 - 18:00">
                    16:00 - 18:00
                  </option>
                </select>

                {errors.time && (
                  <span className="form-error">
                    {errors.time}
                  </span>
                )}
              </div>

            </div>


            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="form-error">
                  {errors.name}
                </span>
              )}
            </div>


            <div className="booking-form-row">

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <span className="form-error">
                    {errors.email}
                  </span>
                )}
              </div>


              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44 0000 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                />

                {errors.phone && (
                  <span className="form-error">
                    {errors.phone}
                  </span>
                )}
              </div>

            </div>


            <div className="form-group">
              <label htmlFor="address">
                Property Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
              />

              {errors.address && (
                <span className="form-error">
                  {errors.address}
                </span>
              )}
            </div>


            <div className="form-group">
              <label htmlFor="notes">
                Additional Notes
              </label>

              <textarea
                id="notes"
                name="notes"
                rows="4"
                placeholder="Anything else we should know?"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>


            <button
              className="booking-submit"
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Request Booking →'}
            </button>

            <p className="booking-disclaimer">
              By submitting this form, you are requesting an
              appointment. Your booking will be confirmed by our team.
            </p>

          </form>

        </div>
      </section>

    </main>
  )
}

export default Booking