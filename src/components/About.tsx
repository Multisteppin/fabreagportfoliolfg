import type React from "react"
import { Facebook, Linkedin, Github } from "lucide-react"
import "../styles/About.css"

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-section">
            <div className="about-image">
              <img
                src="/images/profile.jpg"
                alt="Patrick Kyle Fabreag"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="about-social">
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
          </div>
          <div className="about-text-section">
            <p className="about-text">
              A computer engineering student in Technological Institute of the Philippines, studying CyberSecurity and
              Coding. I am passionate about technology and continuously expanding my knowledge in various aspects of
              computer engineering. My focus areas include network security, programming, and developing solutions that
              make a difference.
            </p>
            <p className="about-text">
              Beyond academics, I serve as an SK Kagawad in Brgy 692/Manila, where I work on community projects and
              youth development initiatives. I believe in using technology to solve real-world problems and contribute
              positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
