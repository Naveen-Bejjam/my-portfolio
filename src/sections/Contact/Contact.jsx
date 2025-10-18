import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Button from "../../components/Button/CustomButton";
import TextArea from "../../components/TextArea/Textarea";
import { toast } from "../../components/Toast/Toast";
import Input from "../../components/Input/Input";

import { Github, Linkedin, Download } from "lucide-react"

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_0zrcu6c",
        "template_01emyui",
        formRef.current,
        "Mi535IMumkf9uWXVg"
      )
      .then(
        () => {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
            variant: "success",
          });
          formRef.current.reset();
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "error",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="contact-info-card">
                <h3 className="contact-info-title">Let's Connect</h3>
                <p className="contact-info-text">
                  I'm always open to discussing creative ideas and
                  opportunities to be part of your visions.
                </p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <span className="contact-detail-label">Email:</span>
                    <a
                      href="mailto:naveenbejjam@gmail.com"
                      className="contact-detail-link"
                    >
                      naveenbejjam@gmail.com
                    </a>
                  </div>
                  <div className="contact-detail-item">
                    <span className="contact-detail-label">Location:</span>
                    <span className="contact-detail-value">
                      Hyderabad, India
                    </span>
                  </div>
                </div>

                <div className="contact-links">
                  <a href="https://www.linkedin.com/in/naveenbejjam/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
                    <Linkedin className="icon" />
                    <span>LinkedIn</span>
                  </a>

                  <a href="https://github.com/naveen-bejjam" target="_blank" rel="noopener noreferrer" className="contact-link github">
                    <Github className="icon" />
                    <span>GitHub</span>
                  </a>

                  {/* <a href="/resume.pdf" download className="contact-link download">
                    <Download className="icon" />
                    <span>Download Resume</span>
                  </a> */}
                </div>
                <Button
                  variant="neon"
                  className="contact-resume-btn"
                  onClick={() =>
                    window.open("/NaveenBejjam_Resume.pdf", "_blank")
                  }
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="user_name" className="form-label">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="user_email" className="form-label">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  className="contact-submit-btn"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
