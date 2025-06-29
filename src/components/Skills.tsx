import React from 'react';
import { Code, Users, Network, Shield } from 'lucide-react';
import '../styles/Skills.css';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', icon: <Code size={40} /> },
    { name: 'C++', icon: <Code size={40} /> },
    { name: 'Frontend Development', icon: <Code size={40} /> },
    { name: 'Team Collaboration', icon: <Users size={40} /> },
    { name: 'Computer Networking', icon: <Network size={40} /> },
    { name: 'CyberSecurity', icon: <Shield size={40} /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;