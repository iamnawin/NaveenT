import React, { useEffect, useState } from "react";
import "./MatrixLoader.css"; // Add the CSS styles here

const MatrixLoader = ({ onComplete }) => {
  const [numbers, setNumbers] = useState("");

  useEffect(() => {
    // Generate random numbers for the matrix effect
    const generateMatrixNumbers = () => {
      let output = "";
      for (let i = 0; i < 200; i++) {
        output += Math.floor(Math.random() * 10); // Random digits (0-9)
        if (i % 20 === 0) output += "<br>"; // Add line breaks
      }
      return output;
    };

    setNumbers(generateMatrixNumbers());

    // Hide the loader after 3 seconds and call the onComplete callback
    const timer = setTimeout(() => {
      onComplete(); // Notify parent component to show the main content
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onComplete]);

  return (
    <div id="matrix-loader">
      <div
        className="matrix-numbers"
        dangerouslySetInnerHTML={{ __html: numbers }}
      />
    </div>
  );
};

export default MatrixLoader;
