import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./Works.css";
import Card from "../../components/Card/Card";

const experiences = [
  {
    company: "Head Digital Works Pvt Ltd",
    role: "Software Development Engineer",
    period: "July 2022 – Present",
    website: "https://headdigitalworks.com",
    achievements: [
      "Built POKER & CALL BREAK apps with React.js, Electron.js, JS, HTML, CSS",
      "Owned modules: Wallet, AddCash, Profile, Offers (Juspay & HyperVerge integration)",
      "Implemented Redux, lazy loading, code splitting, CSS animations",
      "Poker Desktop app contribution increased revenue +30%",
      "Jest tests (60% coverage), Jenkins CI/CD automation, Agile participation",
    ],
    technologies: [
      "React.js",
      "Electron.js",
      "JavaScript",
      "Redux Toolkit",
      "Jest",
      "Jenkins",
    ],
  },
  {
    company: "Loyalty Juggernaut Inc.",
    role: "Python Django Developer (Internship)",
    period: "6 months",
    website: "https://loyaltyjuggernaut.com",
    achievements: [
      "Developed APIs",
      "Contributed to design docs",
      "Integrated backend with frontend modules",
    ],
    technologies: ["Python", "Django", "REST API"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="experience-title">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="experience-card">
                  <div className="experience-header">
                    <div className="experience-header-left">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-company"
                      >
                        {exp.company}
                      </a>
                      <h3 className="experience-role">{exp.role}</h3>
                      <p className="experience-period">{exp.period}</p>
                    </div>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="experience-toggle"
                      aria-label={
                        expandedIndex === index ? "Collapse" : "Expand"
                      }
                    >
                      <span
                        className={`experience-chevron ${
                          expandedIndex === index ? "expanded" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  </div>

                  <motion.div
                    className="experience-details"
                    initial={false}
                    animate={{
                      height: expandedIndex === index ? "auto" : 0,
                      opacity: expandedIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="experience-content">
                      <div className="experience-achievements">
                        <h4 className="experience-subtitle">
                          Key Achievements
                        </h4>
                        <ul className="experience-list-items">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="experience-technologies">
                        <h4 className="experience-subtitle">Technologies</h4>
                        <div className="experience-tech-tags">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="experience-tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
