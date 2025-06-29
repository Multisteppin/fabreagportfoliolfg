"use client"

import type React from "react"
import { useState } from "react"
import { Code, FileText, ShoppingBag, Users, Globe, Gift } from "lucide-react"
import "../styles/Projects.css"

interface Project {
  title: string
  description: string
  icon: React.ReactNode
  image?: string
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("academic")

  const academicProjects: Project[] = [
    {
      title: "Parking Lot Website",
      description:
        "Front-end developer for a parking management system that helps users find and reserve parking spaces.",
      icon: <Globe size={64} color="#6b7280" />,
      image: undefined, // No specific image provided for this project
    },
    {
      title: "Control Word from 8-bit Computer",
      description: "Developed a system for controlling operations in an 8-bit computer architecture.",
      icon: <Code size={64} color="#6b7280" />,
      image: "/images/Controlword.jpg",
    },
    {
      title: "Project Document Files Library",
      description: "Front-end developer for a digital library system to organize and access project documentation.",
      icon: <FileText size={64} color="#6b7280" />,
      image: undefined, // No specific image provided for this project
    },
    {
      title: "Case Study For Computer Evaluation",
      description: "Conducted research and analysis on computer systems performance and optimization.",
      icon: <Code size={64} color="#6b7280" />,
      image: "/images/CaseSEval.png",
    },
    {
      title: "Bridgella's Apparel Website",
      description:
        "Front-end developer for an e-commerce clothing website with product catalog and shopping cart functionality.",
      icon: <ShoppingBag size={64} color="#6b7280" />,
      image: "/images/bridgella.png",
    },
    {
      title: "CWTS",
      description: "Civic Welfare Training Service project focused on community development and social responsibility.",
      icon: <Users size={64} color="#6b7280" />,
      image: "/images/CTWS.jpg",
    },
  ]

  const communityProjects: Project[] = [
    {
      title: "School Supplies Distribution",
      description:
        "Organized and led the distribution of school supplies to underprivileged students in the community as part of SK Kagawad initiatives.",
      icon: <Gift size={64} color="#6b7280" />,
      image: "/images/schoolsuppy.jpg",
    },
    {
      title: "Fiesta Program And Activities",
      description:
        "Planned and coordinated community fiesta celebrations, including cultural performances, games, and food distribution as SK Kagawad.",
      icon: <Users size={64} color="#6b7280" />,
      image: "/images/fiesta.jpg",
    },
    {
      title: "Clean Up Drive",
      description:
        "Led community clean-up initiatives to improve local environment and promote civic responsibility as SK Kagawad.",
      icon: <Globe size={64} color="#6b7280" />,
      image: "/images/cleanup.jpg",
    },
    {
      title: 'Fund Raising Event "Flowers for a Cause"',
      description:
        "Organized a creative fundraising campaign selling flowers to support community development projects as SK Kagawad.",
      icon: <Gift size={64} color="#6b7280" />,
      image: "/images/foracause.jpg",
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="tab-buttons">
          <div className="tab-group">
            <button
              type="button"
              className={`tab-button ${activeTab === "academic" ? "active" : ""}`}
              onClick={() => setActiveTab("academic")}
            >
              Academic Projects
            </button>
            <button
              type="button"
              className={`tab-button ${activeTab === "community" ? "active" : ""}`}
              onClick={() => setActiveTab("community")}
            >
              Community Projects
            </button>
          </div>
        </div>

        {activeTab === "academic" && (
          <div className={`projects-grid academic`}>
            {academicProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = ""
                          const iconDiv = document.createElement("div")
                          iconDiv.style.display = "flex"
                          iconDiv.style.alignItems = "center"
                          iconDiv.style.justifyContent = "center"
                          iconDiv.style.width = "100%"
                          iconDiv.style.height = "100%"
                          parent.appendChild(iconDiv)
                        }
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {project.icon}
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "community" && (
          <div className="projects-grid">
            {communityProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = ""
                          const iconDiv = document.createElement("div")
                          iconDiv.style.display = "flex"
                          iconDiv.style.alignItems = "center"
                          iconDiv.style.justifyContent = "center"
                          iconDiv.style.width = "100%"
                          iconDiv.style.height = "100%"
                          parent.appendChild(iconDiv)
                        }
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      {project.icon}
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
