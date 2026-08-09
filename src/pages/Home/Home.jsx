import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../../components/Testimonials/Testimonials'
import FAQ from '../../components/FAQ/FAQ'
import CTA from '../../components/CTA/CTA'

import './Home.css'

function Home() {
  return (
    <main className="home-page">

      <Hero />

      <Services />

      <HowItWorks />

      <WhyChooseUs />

      <Testimonials />

      <FAQ />

      <CTA />

    </main>
  )
}

export default Home