import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showSecondaryProfile, setShowSecondaryProfile] = useState(false);

  // Check if the app is in production (e.g., hosted on Vercel)
  const isAvailableForHire = process.env.NODE_ENV === "production";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Banner Section */}
        <header
          className="d-flex flex-column flex-md-row align-items-center justify-content-between text-white"
          style={{
            backgroundImage: "linear-gradient(to right, #007bff, #6610f2)",
            borderRadius: "10px",
            marginBottom: "20px",
            padding: "30px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* Text Section */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome to My Portfolio
            </h1>
            <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
              Hi, I'm <strong>Naveen</strong>, a <strong>Salesforce Consultant</strong>{" "}
              passionate about <strong>empowering businesses with tailored solutions</strong>.
            </p>
            {/* Call-to-Action */}
            <div className="mt-4">
              <a
                href="/Naveen_Resume.pdf"
                download="Naveen_Resume.pdf"
                className="btn btn-light btn-lg"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-4">
          <div className="text-center mb-4">
            {/* Available for Hire */}
            {isAvailableForHire && (
              <div className="mb-3">
                <button className="btn btn-success">Available for Hire</button>
              </div>
            )}

            {/* Toggle Profile Button */}
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowSecondaryProfile(!showSecondaryProfile)}
            >
              {showSecondaryProfile ? "Show Main Profile" : "Show Other Profile"}
            </button>
          </div>

          {/* Conditional Rendering of Profiles */}
          {showSecondaryProfile ? <SecondaryProfile /> : <MainProfile />}

          {/* Contact Form Section */}
          {!showSecondaryProfile && <ContactForm />}
        </main>

        {/* Footer Section */}
        <footer className="text-center bg-dark text-white py-3">
          <p>© 2025 Naveen. All rights reserved.</p>
        </footer>
      </div>
    </motion.div>
  );
}

function MainProfile() {
  return (
    <>
      <motion.section
        className="mb-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Naveen Tatikayala</h2>
        <img
          src="/profile-pic.png"
          alt="Naveen T"
          style={{
            width: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        {/* Social Media Links */}
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://www.instagram.com/navn_t"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/naveen-tatikayala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/iamnawin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="mailto:naveen_crm@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p>
    Hey there! 👋 I'm on a mission to simplify business success with Salesforce. 
    As a Salesforce Consultant, I dive deep into your needs, whether you're just starting or need a boost. 
    Let's make Salesforce work wonders for your business!
  </p>
  <p>
    <strong>New to Salesforce?</strong><br />
    No worries—I'm your guide to crafting solutions that fit your unique business. Let's make your projects a success!
  </p>
  <p>
    <strong>Already using Salesforce?</strong><br />
    Let me analyze your setup, understand your challenges, and propose tailor-made solutions to enhance your efficiency.
  </p>
  <p>
    Ever heard of Sales, Service, or FSL? I'm the consultant who helps you navigate these tools to elevate your business. 
    Let's work together to maximize the power of Salesforce for you!
  </p>
      </motion.section>
      <motion.section
        className="mb-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Salesforce CRM Integration
            </a>{" "}
            - Integrated custom Salesforce CRM solutions for small businesses,
            increasing efficiency by 40%.
          </li>
          <li>
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Field Service Lightning Customization
            </a>{" "}
            - Enhanced service scheduling and dispatching for better business
            operations.
          </li>
          <li>
            <a
              href="https://github.com/yourusername/project3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Sales Cloud Implementation
            </a>{" "}
            - Built automated workflows and dashboards to streamline sales
            tracking.
          </li>
        </ul>
      </motion.section>
    </>
  );
}

function SecondaryProfile() {
  return (
    <>
      <motion.section
        className="mb-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Other Profile</h2>
        <img
          src="/image.webp"
          alt="Naveen T - Secondary Profile"
          style={{
            width: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        <p>
          Welcome to my other side! I enjoy photography, reading, and solving
          challenging problems.
        </p>
        <h2>Hobbies</h2>
        <ul
          className="list-unstyled text-start mx-auto"
          style={{ maxWidth: "300px" }}
        >
          <li>📓 Reading about AI and Machine Learning</li>
          <li>💻 Building SaaS Applications</li>
          <li>☁️ Exploring cloud platforms like AWS</li>
          <li>📷 Photography and traveling</li>
        </ul>
      </motion.section>
    </>
  );
}

function ContactForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_kibycn3", // Replace with your EmailJS Service ID
        "template_rc5zzto", // Replace with your EmailJS Template ID
        e.target, // The form reference
        "_sPTiMy_URWlja3Zu" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      className="mt-5 p-4 rounded"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        border: "1px solid #fff",
      }}
    >
      <h2 className="text-center mb-4">
        <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Contact Me
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #555",
            }}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #555",
            }}
            placeholder="youremail@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            style={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #555",
            }}
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Send It My Way <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
