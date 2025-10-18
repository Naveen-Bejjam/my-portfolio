import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import { Code, Rocket, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and user experience",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with latest technologies",
  }
];


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">
            About <span className="text-gradient">Me</span>
          </h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Passionate Frontend Developer with 3 years of experience crafting
            responsive, high-performance web applications. Specializes in
            React.js & modern JavaScript, building seamless, futuristic user
            interfaces.
          </motion.p>

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="about-feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <div className="about-feature-icon">
                  <feature.icon color="white" size={30}/>
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
