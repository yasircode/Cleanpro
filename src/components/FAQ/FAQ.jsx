import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'How do I book a cleaning service?',
    answer:
      'Choose the service you need, select a convenient date and time, and complete the booking form. Our team will confirm your appointment.',
  },
  {
    question: 'Do I need to provide cleaning supplies?',
    answer:
      'No. Our professional cleaners can bring the necessary cleaning products and equipment. If you have preferred products, you can let us know when booking.',
  },
  {
    question: 'Can I book a recurring cleaning service?',
    answer:
      'Yes. You can arrange regular cleaning visits according to your preferred schedule, such as weekly, bi-weekly or monthly.',
  },
  {
    question: 'How long does a cleaning take?',
    answer:
      'The time depends on the size of the property and the type of service. We can provide an estimated duration when you make your booking.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes. Contact our team as soon as possible if you need to change your appointment. Our cancellation and rescheduling policy will apply.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-heading">
          <span className="section-eyebrow">
            FAQ
          </span>

          <h2>
            Got questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p>
            Find answers to some of the most common questions
            about our cleaning services and bookings.
          </p>
        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openIndex === index ? 'faq-item-open' : ''
              }`}
              key={faq.question}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                type="button"
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default FAQ