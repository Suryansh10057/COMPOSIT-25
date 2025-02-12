import { useEffect } from "react";
import Particles from "particles.js";

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        shape: {
          type: "circle",
          stroke: { width: 2, color: "#fff" },
          polygon: { nb_sides: 7 },
        },
        opacity: { value: 1, anim: { enable: false } },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 250,
          color: "#fff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          random: true,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div className="background-container">
      <div id="particles-js" className="particles-container"></div>
      <div className="stars"></div>
      <div className="twinkle"></div>
    </div>
  );
};

export default ParticlesBackground;