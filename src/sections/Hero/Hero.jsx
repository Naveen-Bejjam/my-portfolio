import React from 'react'
import { motion } from 'framer-motion';
import NaveenImage from "./../../assets/Naveen.jpeg"
import "./Hero.css";
import CustomButton from '../../components/Button/CustomButton';

function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero-grid'></div>
      {/* Animated Geometric Shapes */}
      <motion.div
        className="hero-shape hero-shape-1"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="hero-shape hero-shape-2"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Animated Background Glows */}
      <motion.div
        className="hero-glow hero-glow-cyan"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hero-glow hero-glow-pink"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Hero Container */}

        <div className="hero-content">
          {/* Left Content */}
          <motion.div
            className="hero-text"
            // initial={{ opacity: 0, x: -50 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 className="hero-greet" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >Hi,  I'm</motion.h2>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-greeting"
            >
              <span className="hero-greeting-line" />
              WELCOME TO THE FUTURE
            </motion.div> */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="hero-title-name">Naveen Bejjam</span>
            </motion.h1>

            <motion.div
              className="hero-subtitle-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="hero-subtitle-bracket">[</div>
              <p className="hero-subtitle">Frontend Developer</p>
              <div className="hero-subtitle-bracket">]</div>
            </motion.div>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="hero-tagline-icon">▸</span>
              <span>Crafting next-generation digital experiences with cutting-edge technology</span>
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <CustomButton
                variant="neon"
                size="lg"
                onClick={() =>
                  window.open("/NaveenBejjam_Resume.pdf", "_blank")
                }
              >
                <span className="button-text">View Resume</span>
              </CustomButton>
              <CustomButton
                variant="hero"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="button-text">Get In Touch</span>
              </CustomButton>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/naveenbejjam/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <svg
                  className="hero-social-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Naveen-Bejjam"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <svg
                  className="hero-social-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Holographic Border */}
            <motion.div
              className="hero-image-border"
              // animate={{
              //   rotate: 360,
              // }}
              // transition={{
              //   duration: 20,
              //   repeat: Infinity,
              //   ease: "linear",
              // }}
            />
            
            
            {/* Corner Brackets */}
            <div className="hero-image-bracket hero-image-bracket-tl" />
            <div className="hero-image-bracket hero-image-bracket-tr" />
            <div className="hero-image-bracket hero-image-bracket-bl" />
            <div className="hero-image-bracket hero-image-bracket-br" />
            
            <img
              src={NaveenImage}
              alt="Naveen Bejjam"
              className="hero-image"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
       
       <motion.div
          className="hero-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="hero-scroll-text">SCROLL</div>
          <div className="hero-scroll-line" />
        </motion.div>
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-float">
          <ArrowDown className="mx-auto text-[hsl(180,100%,50%)] w-6 h-6 opacity-60" />
          <span className="text-xs text-muted-foreground mt-2 block">Scroll to explore</span>
        </div> */}
    </div>
  )
}

export default Hero