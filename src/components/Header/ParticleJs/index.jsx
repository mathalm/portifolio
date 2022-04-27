import React from 'react';
import Particles from "react-tsparticles";
function ParticleJs() {
   // Função do Particle
   const particlesInit = (main) => {
    //console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    //console.log(container);
  };
  return ( 
    <Particles
        z-index='0'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#062555",
            },
          },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 0,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 70,
                duration: 0,
              },
            },
          },
          particles: {
            color: {
              value: "#3cbe5c",
            },
            links: {
              color: "#5d8d51",
              distance: 140,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
            />
   );
}

export default ParticleJs;