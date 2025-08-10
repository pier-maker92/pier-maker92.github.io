import React from 'react'
import { Mail, Linkedin, Github, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Pierfrancesco Melucci</h3>
            <p className="text-gray-300 mb-4">
              PhD Student passionate about research and innovation in computer science.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:your.email@university.edu"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Work Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#academic')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Academic Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Publications
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © {currentYear} Pierfrancesco Melucci. Made with 
            <Heart className="h-4 w-4 mx-1 text-red-500" /> 
            and React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 