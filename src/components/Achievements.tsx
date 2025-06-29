import React, { useState } from 'react';
import { Award } from 'lucide-react';
import '../styles/Achievements.css';

interface AchievementsProps {
  onCertificateClick: (certId: string) => void;
}

interface Achievement {
  title: string;
  year: string;
}

interface Certification {
  id: string;
  title: string;
  date: string;
}

const Achievements: React.FC<AchievementsProps> = ({ onCertificateClick }) => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements: Achievement[] = [
    {
      title: 'Kumon Mathematics Completer',
      year: '2020',
    },
    {
      title: 'VPAA Lister',
      year: 'First Year - Second Semester, TIP',
    },
    {
      title: 'Best in Mathematics Award',
      year: '2019, Malate Catholic School',
    },
  ];

  const certifications: Certification[] = [
    {
      id: 'cert1',
      title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
      date: 'Dec 17, 2024',
    },
    {
      id: 'cert2',
      title: 'CCNAv7: Introduction to Networks',
      date: 'May 17, 2024',
    },
    {
      id: 'cert3',
      title: 'Cybersecurity Essentials',
      date: 'May 08, 2024',
    },
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="achievements-title">Professional Profile</h2>

        <div className="tab-buttons">
          <div className="tab-group">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'achievements' && (
          <div className="tab-content">
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <div className="achievement-icon">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-year">{achievement.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="tab-content">
            <div className="experience-content">
              <h3>SK Kagawad of Brgy 692/Manila</h3>
              <p>2022 - Present</p>
              <ul className="experience-list">
                <li>
                  Serve as an elected youth official dedicated to representing and addressing the needs of the youth
                  within the community.
                </li>
                <li>
                  Plan, implement, and oversee outreach programs focused on education, youth development, and community
                  welfare.
                </li>
                <li>
                  Lead and coordinate clean-up drives, environmental initiatives, and community beautification projects
                  to promote civic responsibility and environmental awareness among young residents.
                </li>
                <li>
                  Collaborate with fellow barangay and SK officials to propose and execute local projects, including
                  health awareness campaigns, sports events, and livelihood programs.
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="tab-content">
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-date">Issued: {cert.date}</p>
                  <button
                    className="cert-button"
                    onClick={() => onCertificateClick(cert.id)}
                  >
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;