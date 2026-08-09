import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import Booking from '../pages/Booking/Booking'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  )
}

export default AppRoutes