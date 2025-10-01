import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './components/ScrollReveal'
import Silk from './components/Silk'
import BlurText from './components/BlurText'
import './App.css'
import bgVideo from './assets/bgforwebpolkamoving.mp4'
import bgVideoBW from './assets/bgforwebpolkamovingbw.mp4'
import Lenis from 'lenis'
import solanaLogo from './assets/solanalogo.png'
import heliusLogo from './assets/1666227862821.png'
import moralisLogo from './assets/MoralisLogo.png'
import reactLogo from './assets/react.svg'
import electronLogo from './assets/electronlogo.svg'
import regenLogo from './assets/RegenLogopng.png'
import githubLogo from './assets/github_logo.svg'
import xLogo from './assets/X_logo_2023_original.svg'

// Animated Text Component
const AnimatedText = ({ text, className, delay = 0 }) => {
  const letters = text.split('')
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay }
    })
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true)
  const [navbarDark, setNavbarDark] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const lenisRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll detection for navbar hiding and active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'docs', 'tokenomics', 'contact']
      const darkSections = ['tokenomics'] // Sections with dark backgrounds
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      // Hide navbar when scrolling down, show when scrolling up
      if (scrollY > lastScrollY.current && scrollY > 100) {
        setNavbarVisible(false)
      } else if (scrollY < lastScrollY.current) {
        setNavbarVisible(true)
      }
      lastScrollY.current = scrollY
      
      // Active section detection and navbar color
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          
          if (scrollY >= sectionTop - windowHeight / 3 && 
              scrollY < sectionTop + sectionHeight - windowHeight / 3) {
            setActiveSection(sections[i])
            setNavbarDark(darkSections.includes(sections[i]))
            
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: -80 })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className={`navbar ${!navbarVisible ? 'hidden' : ''} ${navbarDark ? 'dark' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <img src={regenLogo} alt="Regen Logo" className="nav-logo-img" />
            <span>Regen</span>
          </div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <motion.button 
              className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </motion.button>
            <motion.button 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </motion.button>
            <motion.a 
              className={`nav-item`}
              href="/docs"
            >
              Docs
            </motion.a>
            <motion.button 
              className={`nav-item ${activeSection === 'tokenomics' ? 'active' : ''}`}
              onClick={() => scrollToSection('tokenomics')}
            >
              Showcase
            </motion.button>
            <motion.button 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </motion.button>
          </div>
      </div>
      </nav>

      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Home Section */}
        <section id="home" className="section home-section">
          <div className="silk-bg silk-bg-showcase" aria-hidden="true">
            <Silk speed={5} scale={1} color="#2a2730" noiseIntensity={1.5} rotation={0} />
          </div>
          <div className="home-grid-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dottedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.15)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dottedGrid)" />
            </svg>
          </div>
          <div className="home-hero">
            <div className="text-content">
              <BlurText
                text="Redefining Portfolio"
                delay={120}
                animateBy="words"
                direction="top"
                className="main-heading"
              />
              <BlurText
                text="Tracking."
                delay={120}
                animateBy="words"
                direction="top"
                className="main-heading main-heading-second-line"
              />
            <motion.p 
              className="sub-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Have an always on Net-Worth Display on your mac.
            </motion.p>
              <a className="cta-button-wrap" href="/docs" aria-label="Open Docs">
                <button className="cta-button"><span>Read Docs</span></button>
                <div className="cta-button-shadow"></div>
              </a>
            </div>
          </div>
        </section>

        

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="about-container">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="about-text"
              textClassName=""
            >
              A sleek, terminal-styled Solana portfolio tracker that lives in your system's menu bar. Built with React and Electron for a native desktop experience. Making each user feel less FOMO.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="about-text about-text-features"
              textClassName=""
              wordAnimationEnd="+=30%"
            >
              Menu Bar Integration • Real-time Portfolio Tracking • Multi-wallet Support • Solana SPL Tokens • 30s Live Updates • Terminal Aesthetic • Privacy Mode • Multi-currency
            </ScrollReveal>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section id="tokenomics" className="section tokenomics-section">
          <div className="silk-bg silk-bg-home" aria-hidden="true">
            <Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />
          </div>
          <div className="container">
            <div className="showcase-content">
              <div className="showcase-image">
                <img className="showcase-hero" src="/src/assets/RegenPortfolioScreenshot.png" alt="RegenPortfolio Screenshot" />
                <div className="powered-by">
                  <p className="powered-by-title">POWERED BY</p>
                  <div className="tech-logos">
                    <div className="tech-logo">
                      <img className="logo-img" src={solanaLogo} alt="Solana" />
                      <span>SOLANA</span>
                    </div>
                    <div className="tech-logo">
                      <img className="logo-img" src={heliusLogo} alt="Helius" />
                      <span>HELIUS</span>
                    </div>
                    <div className="tech-logo">
                      <img className="logo-img" src={moralisLogo} alt="Moralis" />
                      <span>MORALIS</span>
                    </div>
                    <div className="tech-logo">
                      <img className="logo-img" src={reactLogo} alt="React" />
                      <span>REACT</span>
                    </div>
                    <div className="tech-logo">
                      <img className="logo-img" src={electronLogo} alt="Electron" />
                      <span>ELECTRON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Steps Section */}
        <section id="steps" className="steps-section">
          <div className="steps">
            <div className="step-row step-1">
              <span className="step-index">1.</span>
              <ScrollReveal enableBlur={true} baseOpacity={0} blurStrength={8} rotationEnd="+=40%" wordAnimationEnd="+=50%">
                Get free Helius API key from helius.xyz
              </ScrollReveal>
            </div>
            <div className="step-row step-2">
              <span className="step-index">2.</span>
              <ScrollReveal enableBlur={true} baseOpacity={0} blurStrength={8} rotationEnd="+=40%" wordAnimationEnd="+=50%">
                Get free Moralis API key from moralis.io
              </ScrollReveal>
            </div>
            <div className="step-row step-3">
              <span className="step-index">3.</span>
              <ScrollReveal enableBlur={true} baseOpacity={0} blurStrength={8} rotationEnd="+=40%" wordAnimationEnd="+=50%">
                Paste both keys above and click SAVE_API_KEYS
              </ScrollReveal>
            </div>
            <div className="step-row step-4">
              <span className="step-index">4.</span>
              <ScrollReveal enableBlur={true} baseOpacity={0} blurStrength={8} rotationEnd="+=40%" wordAnimationEnd="+=50%">
                Switch to WALLETS tab to add your wallet addresses
              </ScrollReveal>
            </div>
            <div className="step-row step-5">
              <span className="step-index">5.</span>
              <ScrollReveal enableBlur={true} baseOpacity={0} blurStrength={8} rotationEnd="+=40%" wordAnimationEnd="+=50%">
                Select your preferred currency
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-links">
              <a className="contact-link" href="https://x.com/RegenProto" target="_blank" rel="noopener noreferrer" aria-label="Visit us on X">
                <img className="contact-icon" src={xLogo} alt="X (Twitter)" />
              </a>
              <a
                className="contact-link"
                href="https://github.com/Sike201/RegenProto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on GitHub"
              >
                <img className="contact-icon" src={githubLogo} alt="GitHub" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App