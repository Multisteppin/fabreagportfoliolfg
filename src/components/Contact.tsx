import type React from "react"
import { Phone, Mail, Facebook, Linkedin, Github } from "lucide-react"
import "../styles/Contact.css"

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+639177653372</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">fpatrickkyle@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a
              href="https://www.facebook.com/patrickkyle.fabreag.7/"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/patrick-kyle-fabreag-b211b2372/"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a href="https://github.com/Multisteppin" target="_blank" className="social-link" rel="noreferrer">
              <Github size={32} />
            </a>
          </div>

          <div className="contact-footer">
            <p>&copy; 2023 Patrick's Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
