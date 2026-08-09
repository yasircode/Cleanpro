import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'London, UK',
    rating: 5,
    review:
      'The team did an amazing job. Our entire home looked spotless and fresh. Booking was also incredibly easy.',
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'Manchester, UK',
    rating: 5,
    review:
      'Very professional and reliable service. I have now booked CleanPro several times and the quality has always been excellent.',
  },
  {
    id: 3,
    name: 'Emily Carter',
    location: 'Toronto, Canada',
    rating: 5,
    review:
      'I was impressed with the attention to detail. The cleaner arrived on time and left everything looking fantastic.',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="section-eyebrow">
            Customer Reviews
          </span>

          <h2>
            Loved by customers
            <br />
            <span>everywhere.</span>
          </h2>

          <p>
            We believe great service speaks for itself.
            Here is what our customers have to say.
          </p>
        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
            >

              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>

              <p className="testimonial-review">
                “{testimonial.review}”
              </p>

              <div className="testimonial-author">

                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Testimonials