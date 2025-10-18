import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import contact from "./assets/contact.avif"
import './App.css'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Works from './sections/Work/Works'
import Projects from './sections/Projects/Projects'
import Achievements from './sections/Achievements/Achievements'
import Contact from './sections/Contact/Contact'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import Toast from './components/Toast/Toast'

function App() {
  const [count, setCount] = useState(0)

  function sendPrefilledMail() {
    const email = "naveebejjam1707@gmail.com";
    const subject = "[Your Subject]";
    const body = "Hi Naveen,\n\n... \n\nRegards,\n[Your Name] \n\n Please attach your contact details. So that I'll getback to you soon.";
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className='app-root'>
      <Hero/>
      <About/>
      <Works/>
      {/* <Projects/> */}
      <Achievements/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Toast />
      {/* <div className='header'>
        <div className='name'>Naveen Bejjam</div>
        <div className='contact' onClick={sendPrefilledMail}>
          <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-email-address-contact-email-regular-tal-revivo.png"></img>
        </div>
      </div> */}
    </div>
  )
}

export default App
