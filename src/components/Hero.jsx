import React from 'react'
import { Mail, Linkedin, Github, MapPin, GraduationCap } from 'lucide-react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  const researchAreas = [
    "Multimodal LLM",
    "Speech and Audio Generation", 
    "Explainable AI",
    "Diffusion Models"
  ]

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={profileImage} 
                  alt="Pierfrancesco Melucci" 
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            Pierfrancesco Melucci
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-6">
            PhD Student
          </p>
          
          <div className="flex items-center justify-center text-gray-600 mb-8">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            <span className="text-sm md:text-base">La Sapienza, University of Rome</span>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Welcome to my academic homepage. I am a PhD student passionate about research and innovation. 
            My work focuses on advancing knowledge in my field through rigorous research and collaboration 
            with fellow researchers and industry professionals.
          </p>
          
          <div className="flex justify-center space-x-4 md:space-x-6 mb-10">
            <a href="mailto:pierfrancesco.melucci@gmail.com" 
               className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm md:text-base">
              <Mail className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/pierfrancesco-melucci-86856a12a/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm md:text-base">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/pier-maker92" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm md:text-base">
              <Github className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              GitHub
            </a>
            <a href="https://scholar.google.com/citations?user=Y3CbKMIAAAAJ&hl=it" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-300 text-sm md:text-base">
              <GraduationCap className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              Scholar
            </a>
          </div>

          {/* Research Areas */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 font-medium">Research Areas</p>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              {researchAreas.map((area, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium bg-white/70 border border-gray-200 text-gray-700 hover:bg-white hover:border-primary-200 transition-colors duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 