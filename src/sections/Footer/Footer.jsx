import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-text">
          © 2025 Naveen Bejjam. Built with{" "}
          <span className="text-primary">React</span> &{" "}
          <span className="text-secondary">Passion</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer