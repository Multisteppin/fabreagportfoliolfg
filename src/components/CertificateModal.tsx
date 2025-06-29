"use client"

import type React from "react"
import { X } from "lucide-react"
import "../styles/CertificateModal.css"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  certId: string
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certId }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const getCertificateImage = (certId: string) => {
    switch (certId) {
      case "cert1":
        return "/images/CCNAv7SwitchingRoutingandWirelessEssensials.jpg"
      case "cert2":
        return "/images/CCNAv7IntroductiontoNetworks.jpg"
      case "cert3":
        return "/images/CybersecurityEssentials.jpg"
      default:
        return null
    }
  }

  const getCertificateTitle = (certId: string) => {
    switch (certId) {
      case "cert1":
        return "CCNAv7: Switching, Routing, and Wireless Essentials"
      case "cert2":
        return "CCNAv7: Introduction to Networks"
      case "cert3":
        return "Cybersecurity Essentials"
      default:
        return "Certificate"
    }
  }

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <button className="modal-close" onClick={onClose}>
        <X size={32} />
      </button>
      <div className="modal-content">
        {getCertificateImage(certId) ? (
          <img
            src={getCertificateImage(certId) || "/placeholder.svg"}
            alt={getCertificateTitle(certId)}
            className="modal-image"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        ) : (
          <img
            src={`https://via.placeholder.com/800x600/f8fafc/334155?text=Certificate+Not+Found`}
            alt="Certificate not found"
            className="modal-image"
          />
        )}
      </div>
    </div>
  )
}

export default CertificateModal
