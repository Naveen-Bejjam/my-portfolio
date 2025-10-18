import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./Achievements.css";
import { Trophy, Lightbulb, GraduationCap } from "lucide-react";


const achievements = [
  {
    title: "Super Ace – Extra Mile Champ",
    description: "Delivered Callbreak game quickly adapting to new domains",
    color: "primary",
  },
  {
    title: "Super Ace – Innovative Brains",
    description: "Led tablet launch of Callbreak innovatively",
    color: "secondary",
  },
  {
    title: "Super Ace – Learning Yoda",
    description:
      "Mastered technologies rapidly, mentored peers, fostered learning culture",
    color: "primary",
  },
];

const AwardIcon = () => (
  <svg
    className="achievement-svg-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const LightbulbIcon = () => (
  <svg
    className="achievement-svg-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const GraduationCapIcon = () => (
  <svg
    className="achievement-svg-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

const icons = [Trophy, Lightbulb, GraduationCap];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="achievements-title">
            <span className="text-gradient">Achievements</span>
          </h2>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => {
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="achievement-item"
                >
                  <div className="achievement-card">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`achievement-icon achievement-icon-${achievement.color}`}
                    >
                      <IconComponent color="white" size={35}/>
                      {/* <IconComponent color={achievement.color === "primary" ? "var(--shadow-neon-pink)" : "var(--shadow-neon-cyan)"} size={35}/> */}
                    </motion.div>

                    <h3
                      className={`achievement-title achievement-title-${achievement.color}`}
                    >
                      {achievement.title}
                    </h3>
                    <p className="achievement-description">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
