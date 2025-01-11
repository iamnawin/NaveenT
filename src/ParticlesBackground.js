import React from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "#000" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 2 },
          size: { value: 3 },
        },
      }}
    />
  );
}

export default ParticlesBackground;
