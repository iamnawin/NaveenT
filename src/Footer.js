import React from "react";

function Footer() {
  const technologies = [
    { name: "Salesforce", icon: "/icons/salesforce.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "ReactJS", icon: "/icons/reactjs.png" },
    { name: "Data Cloud", icon: "/icons/datacloud.png" },
    { name: "Agentforce", icon: "/icons/agentforce.png" },
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "Lucid", icon: "/icons/lucid.png" },
    { name: "Canva", icon: "/icons/canva.png" },
  ];

  return (
    <footer className="text-center bg-dark text-white py-4">
      <p>Coded with ❤ by Naveen</p>
      <div className="d-flex justify-content-center flex-wrap">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="m-2"
            style={{ textAlign: "center", width: "80px" }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              style={{ width: "40px", height: "40px" }}
            />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>{tech.name}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
