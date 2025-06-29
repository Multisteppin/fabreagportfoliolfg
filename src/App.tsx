"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import CertificateModal from "./components/CertificateModal"
import "./App.css"

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCertId, setSelectedCertId] = useState("")

  const handleCertificateClick = (certId: string) => {
    setSelectedCertId(certId)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedCertId("")
  }

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Achievements onCertificateClick={handleCertificateClick} />
      <Projects />
      <Skills />
      <Contact />
      <CertificateModal isOpen={modalOpen} onClose={handleCloseModal} certId={selectedCertId} />
    </div>
  )
}

export default App
