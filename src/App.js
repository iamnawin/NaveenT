import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
//import MatrixLoader from "./MatrixLoader";
//import "./App.css";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faSalesforce,
  faFacebook,
  faFlickr
  
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane, faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showSecondaryProfile, setShowSecondaryProfile] = useState(false);
  const [isGhostFree, setIsGhostFree] = useState(false);
  const [ghostPosition, setGhostPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });



 


  // Handle random ghost movement
  useEffect(() => {
    let animationFrameId;
    let velocity = { x: 0.5, y: 0.5 };

    const moveGhost = () => {
      setGhostPosition((prevPosition) => {
        let newX = prevPosition.x + velocity.x;
        let newY = prevPosition.y + velocity.y;

        if (newX <= 0 || newX >= window.innerWidth - 100) {
          velocity.x = -velocity.x;
          newX = Math.max(0, Math.min(newX, window.innerWidth - 100));
        }

        if (newY <= 0 || newY >= window.innerHeight - 100) {
          velocity.y = -velocity.y;
          newY = Math.max(0, Math.min(newY, window.innerHeight - 100));
        }

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(moveGhost);
    };

    if (isGhostFree) {
      animationFrameId = requestAnimationFrame(moveGhost);
    } else {
      cancelAnimationFrame(animationFrameId);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isGhostFree]);

  // Handle cursor-following ghost movement
  const handleMouseMove = (e) => {
    if (!isGhostFree) {
      setGhostPosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    if (!isGhostFree) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isGhostFree]);

  const isAvailableForHire = process.env.NODE_ENV === "production";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1 }}
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Ghost Component */}
      <motion.img
        src="/Pixel_Robot.gif"
        alt="Ghost"
        className="ghost"
        style={{
          position: "fixed",
          transform: `translate(${ghostPosition.x}px, ${ghostPosition.y}px)`,
          width: "80px",
          height: "80px",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* Ghost Toggle Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <button
          onClick={() => setIsGhostFree(!isGhostFree)}
          style={{
            background: isGhostFree ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
            color: isGhostFree ? "#000" : "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: `1px solid ${isGhostFree ? "#000" : "#fff"}`,
            cursor: "pointer",
            transition: "background 0.3s ease, color 0.3s ease",
          }}
        >
          {isGhostFree ? "Call to Base" : "Patrol"}
        </button>
      </div>

      <div
        className="container"
        style={{
          margin: "0 auto",
          padding: "0",
          maxWidth: "1200px",
        }}
      >
        {/* Banner Section */}
        <header
          className="d-flex flex-column align-items-center text-white"
          style={{
            backgroundImage: "linear-gradient(to right, #007bff, rgb(37, 22, 62))",
            borderRadius: "20px",
            padding: "20px",
            margin: "20px 0",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
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
          <p style={{ fontSize: "1.2rem" }}>
            Hi, I'm <strong>Naveen</strong>, a <strong>CRM Product Engineer</strong> passionate about <strong>empowering businesses with tailored solutions</strong>.
          </p>
          <div className="mt-4"></div>
          <div className="mt-4">
  <a
    href="/Naveen_Resume.pdf" // Ensure this path points to your resume file in the public folder
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-light btn-lg"
    style={{
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "5px",
      padding: "10px 20px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}
  >
    View Resume
  </a>
</div>

        </header>

        {/* Main Content */}
        <main className="py-4">
          <div className="text-center mb-4">
            {isAvailableForHire && (
              <div className="mb-3">
                <button className="btn btn-success">Available for Hire</button>
              </div>
            )}
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowSecondaryProfile(!showSecondaryProfile)}
            >
              {showSecondaryProfile ? "Show Main Profile" : "Show Other Profile"}
            </button>
          </div>
          {showSecondaryProfile ? <SecondaryProfile /> : <MainProfile />}
          {!showSecondaryProfile && <Projects />}
          {!showSecondaryProfile && <ContactForm />}
        </main>


        {/* Footer Section */}
<footer className="text-center bg-dark text-white py-3">
  <p>"Success is not just about reaching your goals but leaving a lasting impression. Let’s create something remarkable together!"</p>
  <p>© Coded with ❤ by Navn..</p>
</footer>

      </div>
    </motion.div>
  );
}


//<---Autoform-->

function AutoForm() {
  const [step, setStep] = useState(0); // 0: Welcome, 1: LinkedIn, 2: Schedule
  const linkedInUrl = "https://www.linkedin.com/in/naveen-tatikayala/"; // Replace with your LinkedIn

  const handleScheduleClick = () => {
    // Redirect to Calendly or display an embedded calendar
    window.open("https://calendly.com/yourusername", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        zIndex: 1000,
        maxWidth: "300px",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setStep(0)} // Reset to welcome
      >
        ✖
      </button>

      {step === 0 && (
        <div>
          <h4>Hi there! 👋</h4>
          <p>
            Thanks for reaching out! You can connect with me via LinkedIn or
            schedule a time to chat.
          </p>
          <button
            className="btn btn-primary btn-sm w-100 mb-2"
            onClick={() => window.open(linkedInUrl, "_blank")}
          >
            Connect on LinkedIn
          </button>
          <button
            className="btn btn-secondary btn-sm w-100"
            onClick={() => setStep(2)}
          >
            Schedule a Time
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4>Schedule a Time 📅</h4>
          <p>Select a time slot that works for you:</p>
          {/* Embed Calendly */}
          <iframe
            src="https://calendly.com/yourusername" // Replace with your Calendly URL
            style={{
              width: "100%",
              height: "400px",
              border: "none",
              borderRadius: "5px",
            }}
            title="Schedule a Time"
          ></iframe>
          <button
            className="btn btn-danger btn-sm w-100 mt-2"
            onClick={() => setStep(0)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}



function MainProfile() {
  return (
    <motion.section
      className="mb-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <h2 className="cursive-name">Naveen Tatikayala</h2>

      <img
        src="/profile-pic.png"
       
        alt="Naveen T"
        style={{
          width: "220px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />
      <div className="d-flex justify-content-center mb-4">
        
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
          href="https://www.salesforce.com/trailblazer/naveentatikayalaqe1ru2dr32xb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faSalesforce} size="2x" />
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
      Hey there, world! 👋 I’m Naveen, a <strong>Product Engineer & Aspiring Product Manager</strong> from the bustling city of Hyderabad, India. 
      I’m passionate about building CRM systems, leading product strategies, and designing efficient solutions for businesses. 
      After taking a personal career break (we all need one sometimes, right?), I’m back with fresh energy, working on exciting personal projects and ready for new opportunities. 🚀
  </p>

<p>
    In my journey, I’ve built everything from seamless CRM solutions to backend architectures that hum with efficiency. <br />
    My toolbox includes <strong>LWC, Apex, JavaScript, ReactJS, Node.js, AI Co-pilot</strong>, and the magic dust of automations, API integrations, and product roadmaps. <br />
    Whether it’s crafting a Salesforce flow, defining user stories, or building a complete application, I’m all in. 💻
  </p>

<p>
    When I’m not working, you’ll find me exploring the latest in AI, dreaming up system designs, or nerding out over business trends. 
    And when I need a break? I’m outdoors, sipping on some mate, or cruising around on my ride. 🏞️
  </p>

<p>
    Thanks for stopping by! If you’ve made it this far, we should definitely connect.!!!
  </p>


    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section
      className="mb-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
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
  );
}

function SecondaryProfile() {
  return (
    <motion.section
      className="mb-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2>Other Me - Navn</h2>
      <img
        src="image (8).webp"
        alt="Naveen T - Secondary Profile"
        style={{
          width: "220px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />

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
          href="https://www.facebook.com/iamnavn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.threads.net/@navn_t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faX} size="2x" />
        </a>

        <a
          href="https://www.flickr.com/photos/154354634@N03/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faFlickr} size="2x" />
        </a>
        </div>
        <p>Welcome to my other side! When I’m not immersed in tech, I’m diving into my passions, chasing creativity, and exploring new ways to see and experience the world. 
Life is a mix of challenges, ideas, and inspirations, and I believe in making the most of every moment both in and outside the digital world. 
From crafting elegant solutions at my desk to capturing raw, beautiful moments in the streets, I enjoy living at the intersection of technology and creativity. 
Every day is an opportunity to learn, explore, and connect with what sparks joy. 🚀</p>
<h2>Hobbies</h2>
<div class="hobby-grid">
  <div class="hobby-item">📚 <strong>AI & Machine Learning:</strong> Staying ahead with the latest advancements in AI.</div>
  <div class="hobby-item">💻 <strong>Building SaaS:</strong> Turning ideas into user-friendly software.</div>
  <div class="hobby-item">📷 <strong>Street Photography:</strong> Capturing candid urban moments.</div>
  <div class="hobby-item">✏️ <strong>Designing Logos:</strong> Blending creativity with strategy.</div>
  <div class="hobby-item">⛰️ <strong>Trekking:</strong> Exploring trails and soaking in nature.</div>
  <div class="hobby-item">✈️ <strong>Travel:</strong> Immersing in diverse cultures and cuisines.</div>
  <div class="hobby-item">🎨 <strong>Sketching:</strong> Relaxing through imaginative doodles.</div>
  <div class="hobby-item">🎮 <strong>Gaming:</strong> Embracing creative and strategic challenges.</div>
</div>





    </motion.section>
  );
}

function ContactForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kibycn3",
        "template_rc5zzto",
        e.target,
        "_sPTiMy_URWlja3Zu"
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
    <motion.section
      className="mt-5 p-4 rounded"
      style={{
        backgroundColor: "#000",
        color: "#fff",
        border: "1px solid #fff",
      }}
      initial={{ y: "100vh", opacity: 0 }} // Start off-screen
      animate={{ y: 0, opacity: 1 }} // Slide to final position
      transition={{ type: "spring", stiffness: 100, duration: 1,  delay: 1.5}} // Animation settings
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
    </motion.section>
  );
}

function HelpButton() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      {/* Floating Button */}
      {!showForm && (
        <button
          onClick={handleClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
          }}
        >
          Hi!
        </button>
      )}

      {/* Help Form Modal */}
      {showForm && <HelpForm onClose={() => setShowForm(false)} />}
    </>
  );
}

function HelpForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Example: You can process the form data here, such as sending it to an API or email
    console.log("Form Data Submitted:", formData);
  
    // Example: Display a confirmation message
    alert(`Thank you, ${formData.name}. We'll contact you shortly!`);
  
    // Reset form fields
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  
    // Close the form
    onClose();
  };
  
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ✖
      </button>
  
      {/* Form Title */}
      <h4 style={{ marginBottom: "10px" }}>Hi, how can I help you?</h4>
  
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
  
}
export default App;