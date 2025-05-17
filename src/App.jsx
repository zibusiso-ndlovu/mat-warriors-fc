//import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import LoadingSpinner from './components/common/LoadingSpinner'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero' 
import Herosection from './components/sections/HeroSection' 
import ServicesSection from './components/sections/ServicesSection'
import EnhancedServicesSection from './components/sections/EnhancedServicesSection'
import CallToAction from './components/sections/CallToAction'
import InnovativeFeatures from './components/sections/InnovativeFeatures'
import LearningPaths from './components/sections/LearningPaths'
import ServiceAreas from './components/sections/ServiceAreas'
import CleaningServices from './components/sections/CleaningServices'
import HowItWorks from './components/sections/HowItWorks'
import HowItWorkss from './components/sections/HowItWorkss'
import CloudServices from './components/sections/CloudServices'
import ShopSection from './components/sections/ShopSection'
import SponsorsSection from './components/sections/SponsorsSection'

import Contact from './pages/Contact'
import ManagementPractices from './components/sections/ManagementPractices'
import HeroSection from './components/sections/HeroSection'
import Fixtures from './components/sections/Fixture'
import NoDrugs from './components/sections/NoDrugs'
import Donate from './components/sections/Donate'



// In your page component:




function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false)
      }, 1500) // Adjust time as needed
    }, [])
  
    if (isLoading) {
      return <LoadingSpinner />
    }
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
         <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
         <HeroSection />
         <NoDrugs/>
         <Fixtures/>
         <Donate/>
         <ManagementPractices/>
        <SponsorsSection/>
      <Footer />
      </div>
    </Router>
  )
}

export default App