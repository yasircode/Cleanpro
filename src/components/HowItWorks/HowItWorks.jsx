import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Choose your service',
    description:
      'Select the cleaning service that best fits your home or business.',
  },
  {
    number: '02',
    title: 'Pick a date & time',
    description:
      'Choose a convenient date and time that works for your schedule.',
  },
  {
    number: '03',
    title: 'We do the cleaning',
    description:
      'Our trusted cleaning professional arrives and takes care of the rest.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-container">

        <div className="how-heading">
          <span className="section-eyebrow">
            Simple Process
          </span>

          <h2>
            Clean home.
            <br />
            <span>Three easy steps.</span>
          </h2>

          <p>
            Booking professional cleaning should not be complicated.
            Choose your service, schedule your visit and let us handle
            the cleaning.
          </p>
        </div>


        <div className="steps-grid">

          {steps.map((step) => (
            <div className="step-card" key={step.number}>

              <span className="step-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HowItWorks