"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/Education.css"

interface EducationData {
  school: string
  level: string
  years: string
  image: string
}

const Education: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const educationData: EducationData[] = [
    {
      school: "Malate Catholic School",
      level: "Elementary - Senior Highschool",
      years: "2008 - 2021",
      image: "/images/MalateCatholicSchool.jpg",
    },
    {
      school: "Technological Institute of the Philippines",
      level: "College",
      years: "2022 - Present",
      image: "/images/technologicalinstituteofthephilippines.png",
    },
  ]

  const moveSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction
      if (newSlide < 0) return educationData.length - 1
      if (newSlide >= educationData.length) return 0
      return newSlide
    })
  }

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-slider">
          <div className="education-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {educationData.map((edu, index) => (
              <div key={index} className="education-slide">
                <div className="education-card">
                  <div className="education-image">
                    <img
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.school}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=192&width=400"
                      }}
                    />
                  </div>
                  <div className="education-content">
                    <h3 className="education-school">{edu.school}</h3>
                    <p className="education-level">{edu.level}</p>
                    <p className="education-years">{edu.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow left" onClick={() => moveSlide(-1)}>
            <ChevronLeft size={24} />
          </button>

          <button className="slider-arrow right" onClick={() => moveSlide(1)}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Education
