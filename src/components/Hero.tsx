import type React from "react"
import "../styles/Hero.css"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/hero.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Hello, Welcome to my portfolio</h1>
        <h2 className="hero-subtitle">My Name is Patrick Kyle Fabreag</h2>
        <div>
          <a href="#about" className="hero-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
