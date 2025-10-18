import { Code2, Server, Wrench } from "lucide-react";
import './Skills.css';

const skills = {
  frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Redux Toolkit",
    "Electron.js",
  ],
  backend: ["Python", "Django", "REST APIs"],
  tools: ["AWS", "Git", "Jenkins", "JIRA", "Figma"],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        
        <h2 className="skills-title">
          <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid-cols">
          <div className="card delay-0">
            <div>
              <div className="section-header">
                <div className="icon-wrapper frontend-bg">
                  <Code2 className="frontend-icon" />
                </div>
                <h3 className="section-title-frontend">Frontend</h3>
              </div>
              <div>
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-bullet frontend"></div>
                    <span className="skill-text frontend">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card delay-2">
            <div>
              <div className="section-header">
                <div className="icon-wrapper backend-bg">
                  <Server className="backend-icon" />
                </div>
                <h3 className="section-title-backend">Backend</h3>
              </div>
              <div>
                {skills.backend.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-bullet backend"></div>
                    <span className="skill-text backend">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card delay-4">
            <div>
              <div className="section-header">
                <div className="icon-wrapper tools-bg">
                  <Wrench className="tools-icon" />
                </div>
                <h3 className="section-title-tools">Tools</h3>
              </div>
              <div>
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-bullet tools"></div>
                    <span className="skill-text tools">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
