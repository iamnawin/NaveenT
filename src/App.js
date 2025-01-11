import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function App() {
  const [showGame, setShowGame] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Header Section */}
        <header className="text-center bg-primary text-white py-4">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm <strong>Naveen</strong>. I am a <strong>Salesforce Consultant</strong> passionate about <strong>empowering businesses with tailored solutions</strong>.
          </p>
        </header>

        {/* Main Content */}
        <main className="py-4">
          {/* Game Toggle Button */}
          <div className="text-center mb-4">
            <button
              className="btn btn-warning"
              onClick={() => setShowGame(!showGame)}
            >
              {showGame ? "Back to Portfolio" : "Play Catch The Mouse"}
            </button>
          </div>

          {showGame ? <CatchTheMouse /> : <PortfolioContent />}
        </main>

        {/* Footer Section */}
        <footer className="text-center bg-dark text-white py-3">
          <p>© 2025 Naveen. All rights reserved.</p>
        </footer>
      </div>
    </motion.div>
  );
}

function PortfolioContent() {
  return (
    <>
      {/* About Me Section */}
      <motion.section
        className="mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>About Me</h2>
        <img
          src="/profile-pic.png"
          alt="Naveen T"
          style={{
            width: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        <p>
          Hey there! 👋 I'm on a mission to simplify business success with Salesforce. As a Salesforce Consultant, I dive deep into your needs, whether you're just starting or need a boost. Let's make Salesforce work wonders for your business!
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
          Ever heard of Sales, Service, FSL? I'm the consultant who helps you navigate these tools to elevate your business. Let's work together to maximize the power of Salesforce for you!
        </p>
      </motion.section>

      {/* Projects Section */}
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
            - Integrated custom Salesforce CRM solutions for small businesses, increasing efficiency by 40%.
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
            - Enhanced service scheduling and dispatching for better business operations.
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
            - Built automated workflows and dashboards to streamline sales tracking.
          </li>
        </ul>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h2>Contact</h2>
        <p>Feel free to reach out to me:</p>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:naveen_crm@outlook.com"
              className="text-primary"
            >
              naveen_crm@outlook.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/naveen-tatikayala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/iamnawin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </motion.section>
    </>
  );
}

function CatchTheMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [catPosition, setCatPosition] = useState({ x: 100, y: 100 });
  const [caught, setCaught] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Move the cat
  useEffect(() => {
    const moveCat = setInterval(() => {
      if (!caught) {
        const dx = mousePosition.x - catPosition.x;
        const dy = mousePosition.y - catPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          setCaught(true);
          return;
        }

        setCatPosition((prev) => ({
          x: prev.x + (dx / distance) * 5,
          y: prev.y + (dy / distance) * 5,
        }));
      }
    }, 50);

    return () => clearInterval(moveCat);
  }, [mousePosition, catPosition, caught]);

  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      <div
        style={{
          position: "absolute",
          top: mousePosition.y - 10,
          left: mousePosition.x - 10,
          width: "20px",
          height: "20px",
          backgroundColor: "blue",
          borderRadius: "50%",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: catPosition.y - 20,
          left: catPosition.x - 20,
          width: "40px",
          height: "40px",
          backgroundColor: "red",
          borderRadius: "50%",
        }}
      ></div>
      {caught && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
          }}
        >
          You Got Caught!
        </div>
      )}
    </div>
  );
}

export default App;
