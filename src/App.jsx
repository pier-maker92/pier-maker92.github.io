import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkExperience from './components/WorkExperience'
import Music from './components/Music'
import AcademicExperience from './components/AcademicExperience'
import Publications from './components/Publications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Publications />
        <AcademicExperience />
        <Music />
      </main>
      <Footer />
    </div>
  )
}

export default App 