import React, { useState, useEffect, useMemo } from 'react'
import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react'

const Publications = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 })
  const [isNarrowScreen, setIsNarrowScreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setScreenDimensions({ width, height })
      
      // Consider screen narrow if width < 400px or aspect ratio is very tall
      const aspectRatio = width / height
      setIsNarrowScreen(width < 400 || aspectRatio < 0.5)
      
      // Mobile breakpoint for layout decisions
      setIsMobile(width < 1024)
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Publications data
  const publications = [
    {
      id: 1,
      title: "How to Connect Speech Foundation Models and Large Language Models? What Matters and What Does Not.",
      authors: "F. Verdini, P. Melucci, S. Perna, F. Cariaggi, M. Gaido, S. Papi, S. Mazurek, et al.",
      venue: "Interspeech",
      year: "2025",
      url: "https://arxiv.org/abs/2409.17044"
    },
    {
      id: 2,
      title: "Exploiting Music Source Separation For Singing Voice Detection",
      authors: "F. Bonzi, M. Mancusi, S. Del Deo, P. Melucci, M. Tavella, L. Parisi, and E. Rodolá",
      venue: "IEEE Conference Proceedings",
      year: "2023",
      pages: "1–6",
      url: "https://ieeexplore.ieee.org/abstract/document/10285863"
    }
  ]

  // Patents data
  const patents = [
    {
      id: 1,
      title: "Systems and Methods for Generating Content Containing Automatically Synchronized Video, Audio, and Text",
      authors: "Chathong, N., D. Farinelli, D. S. Giliberto, P. Melucci, and A. Menegazzo",
      year: "2024",
      month: "September",
      url: "https://patents.google.com/patent/US20240303888A1/en"
    },
    {
      id: 2,
      title: "Systems and Methods for Artificial Intelligence Assistant Publishing",
      authors: "Tavella, M. S., L. Parisi, M. Bracci, G. Costantino, F. Delfino, and P. Melucci",
      year: "2023",
      month: "December",
      url: "https://patents.google.com/patent/US20230409870A1/en"
    },
    {
      id: 3,
      title: "Method and System for Analyizing, Classifying, and Node-Ranking Content in Audio Tracks",
      authors: "Parisi, L., M. Paglia, A. Albano, P. Magnani, P. Melucci, and M. S. Tavella",
      year: "2023",
      month: "January",
      url: "https://patents.google.com/patent/US20230022966A1/en"
    }
  ]

  // Calculate optimal height based on content
  const calculateOptimalHeight = useMemo(() => {
    // Find the publication/patent with most content
    const allItems = [...publications, ...patents]
    const maxContentLength = Math.max(
      ...allItems.map(item => {
        const titleLength = item.title?.length || 0
        const authorsLength = item.authors?.length || 0
        const abstractLength = item.abstract?.length || 0
        const descriptionLength = item.description?.length || 0
        return titleLength + authorsLength + abstractLength + descriptionLength
      })
    )
    
    // Base height + dynamic height based on content
    const baseHeight = 320 // 20rem in pixels
    const contentFactor = Math.ceil(maxContentLength / 200) // 200 chars per height unit
    const dynamicHeight = baseHeight + (contentFactor * 40) // 40px per content unit
    
    // Adjust for narrow screens
    const adjustedHeight = isNarrowScreen ? dynamicHeight + 80 : dynamicHeight
    
    const finalHeight = Math.min(adjustedHeight, 600) // Cap at 600px max
    
    // Apply mobile-specific 30% reduction when in mobile mode
    return isMobile ? Math.floor(finalHeight * 0.7) : finalHeight
  }, [isNarrowScreen])

  // Get responsive classes
  const getResponsiveClasses = () => {
    const fontSizeClass = isNarrowScreen ? 'text-xs' : 'text-sm'
    const titleSizeClass = isNarrowScreen ? 'text-base' : 'text-lg'
    return { fontSizeClass, titleSizeClass }
  }

  const { fontSizeClass, titleSizeClass } = getResponsiveClasses()

  const PublicationCard = ({ publication }) => {
    const handleCardClick = () => {
      if (publication.url) {
        window.open(publication.url, '_blank', 'noopener,noreferrer')
      }
    }

    return (
      <div 
        className="card hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary-500 cursor-pointer hover:border-l-primary-600" 
        style={{ height: isMobile ? `${calculateOptimalHeight}px` : 'auto' }}
        onClick={handleCardClick}
      >
        {/* Mobile: Full-width layout */}
        <div className="lg:hidden">
          <div className="text-center mb-4">
            <h3 className={`${titleSizeClass} font-semibold text-gray-900 mb-3 leading-tight`}>
              {publication.title}
            </h3>
            <div className="space-y-2 mb-4 text-left">
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{publication.authors}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={`${fontSizeClass} font-medium`}>{publication.venue}</span>
              </div>
              <div className="flex items-center text-gray-500 flex-wrap">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{publication.year}</span>
                {publication.pages && (
                  <span className={`ml-4 ${fontSizeClass}`}>
                    Pages: <span className="font-medium text-primary-600">{publication.pages}</span>
                  </span>
                )}
              </div>
            </div>
            {publication.url && (
              <div className="flex justify-center mb-4">
                <div className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
            )}
          </div>
          {publication.abstract && (
            <div className="w-full">
              <p className={`text-gray-700 ${fontSizeClass} leading-relaxed text-left`}>
                {publication.abstract}
              </p>
            </div>
          )}
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className={`${titleSizeClass} font-semibold text-gray-900 mb-2 leading-tight`}>
                {publication.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{publication.authors}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <BookOpen className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={`${fontSizeClass} font-medium`}>{publication.venue}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-3 flex-wrap">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{publication.year}</span>
                {publication.pages && (
                  <span className={`ml-4 ${fontSizeClass}`}>
                    Pages: <span className="font-medium text-primary-600">{publication.pages}</span>
                  </span>
                )}
                {publication.citations && (
                  <span className={`ml-4 ${fontSizeClass}`}>
                    Citations: <span className="font-medium text-primary-600">{publication.citations}</span>
                  </span>
                )}
              </div>
            </div>
            {publication.url && (
              <div className="flex-shrink-0 ml-4 p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300">
                <ExternalLink className="h-5 w-5" />
              </div>
            )}
          </div>
          {publication.abstract && (
            <p className={`text-gray-700 ${fontSizeClass} leading-relaxed`}>
              {publication.abstract}
            </p>
          )}
        </div>
      </div>
    )
  }

  const PatentCard = ({ patent }) => {
    const handleCardClick = () => {
      if (patent.url) {
        window.open(patent.url, '_blank', 'noopener,noreferrer')
      }
    }

    return (
      <div 
        className="card hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 cursor-pointer hover:border-l-green-600" 
        style={{ height: isMobile ? `${calculateOptimalHeight}px` : 'auto' }}
        onClick={handleCardClick}
      >
        {/* Mobile: Full-width layout */}
        <div className="lg:hidden">
          <div className="text-center mb-4">
            <h3 className={`${titleSizeClass} font-semibold text-gray-900 mb-3 leading-tight`}>
              {patent.title}
            </h3>
            <div className="space-y-2 mb-4 text-left">
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{patent.authors}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{patent.month} {patent.year}</span>
              </div>
            </div>
            {patent.url && (
              <div className="flex justify-center mb-4">
                <div className="p-2 text-gray-400 hover:text-green-600 transition-colors duration-300">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className={`${titleSizeClass} font-semibold text-gray-900 mb-2 leading-tight`}>
                {patent.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{patent.authors}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className={fontSizeClass}>{patent.month} {patent.year}</span>
              </div>
            </div>
            {patent.url && (
              <div className="flex-shrink-0 ml-4 p-2 text-gray-400 hover:text-green-600 transition-colors duration-300">
                <ExternalLink className="h-5 w-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // State for active publication and patent index (mobile carousel)
  const [activePublication, setActivePublication] = useState(0)
  const [activePatent, setActivePatent] = useState(0)

  // Refs for carousels
  const pubCarouselRef = React.useRef(null)
  const patCarouselRef = React.useRef(null)

  // Helper to get active index based on scroll position
  const getActiveIndex = (scrollLeft, itemWidth, itemCount) => {
    const center = scrollLeft + (window.innerWidth * 0.5)
    let minDist = Infinity
    let activeIdx = 0
    for (let i = 0; i < itemCount; i++) {
      const itemCenter = (i * itemWidth) + (itemWidth / 2)
      const dist = Math.abs(center - itemCenter)
      if (dist < minDist) {
        minDist = dist
        activeIdx = i
      }
    }
    return activeIdx
  }

  // Effect for publications carousel
  useEffect(() => {
    const handleScroll = () => {
      if (pubCarouselRef.current) {
        const scrollLeft = pubCarouselRef.current.scrollLeft
        const itemWidth = pubCarouselRef.current.firstChild?.firstChild?.offsetWidth || 1
        setActivePublication(getActiveIndex(scrollLeft, itemWidth, publications.length))
      }
    }
    const node = pubCarouselRef.current
    if (node) node.addEventListener('scroll', handleScroll)
    return () => node && node.removeEventListener('scroll', handleScroll)
  }, [publications.length])

  // Effect for patents carousel
  useEffect(() => {
    const handleScroll = () => {
      if (patCarouselRef.current) {
        const scrollLeft = patCarouselRef.current.scrollLeft
        const itemWidth = patCarouselRef.current.firstChild?.firstChild?.offsetWidth || 1
        setActivePatent(getActiveIndex(scrollLeft, itemWidth, patents.length))
      }
    }
    const node = patCarouselRef.current
    if (node) node.addEventListener('scroll', handleScroll)
    return () => node && node.removeEventListener('scroll', handleScroll)
  }, [patents.length])

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Horizontal swipe carousel */}
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Publications</h2>
            <p className="text-sm text-gray-600 mt-4">
              Research contributions and academic publications
            </p>
          </div>
          
          {/* Publications Carousel */}
          <div className="mb-12">
            <div className="overflow-x-auto scrollbar-hide" ref={pubCarouselRef}>
              <div className="flex space-x-6 px-4 pb-4">
                {publications.map((publication, index) => (
                  <div key={publication.id} className="flex-shrink-0 w-[70vw]">
                    <PublicationCard publication={publication} />
                  </div>
                ))}
              </div>
            </div>
            {/* Dot indicators for publications */}
            <div className="flex justify-center space-x-2 mt-4">
              {publications.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activePublication === index ? 'bg-primary-500 scale-125' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Patents Section */}
          <div className="mt-16">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patents</h3>
              <p className="text-sm text-gray-600">
                Intellectual property and patent applications
              </p>
            </div>
            
            {/* Patents Carousel */}
            <div className="overflow-x-auto scrollbar-hide" ref={patCarouselRef}>
              <div className="flex space-x-6 px-4 pb-4">
                {patents.map((patent, index) => (
                  <div key={patent.id} className="flex-shrink-0 w-[70vw]">
                    <PatentCard patent={patent} />
                  </div>
                ))}
              </div>
            </div>
            {/* Dot indicators for patents */}
            <div className="flex justify-center space-x-2 mt-4">
              {patents.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activePatent === index ? 'bg-green-500 scale-125' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-8 relative">
            {/* Vertical timeline line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 -mr-6"></div>

            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div key={publication.id} className="relative">
                  {/* Timeline dot for this publication - aligned with title */}
                  <div className="absolute right-0 top-8 w-3 h-3 bg-gray-400 rounded-full -mr-6 transform translate-x-1/2 border-2 border-white shadow-sm"></div>
                  <PublicationCard publication={publication} />
                </div>
              ))}
            </div>

            {/* Patents Section */}
            <div className="mt-16">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Patents</h3>
                <p className="text-base text-gray-600">
                  Intellectual property and patent applications
                </p>
              </div>
              
              <div className="space-y-6">
                {patents.map((patent, index) => (
                  <div key={patent.id} className="relative">
                    {/* Timeline dot for this patent - aligned with title */}
                    <div className="absolute right-0 top-8 w-3 h-3 bg-gray-400 rounded-full -mr-6 transform translate-x-1/2 border-2 border-white shadow-sm"></div>
                    <PatentCard patent={patent} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 flex flex-col justify-center min-h-[400px]">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Publications</h2>
                <p className="text-base text-gray-600 mt-4">
                  Research contributions and academic publications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications 