import React, { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const codigo = [
  `import React from 'react';`,
  `function Portafolio() {`,
  `  return (`,
  `    <main>`,
  `      <h1>Hola, soy Facundo</h1>`,
  `      <h2>Desarrollador Full Stack</h2>`,
  `      <p>Apasionado por la tecnología</p>`,
  `      <h3>Especializado en React y Node.js</h3>`,
  `      <a href="/" target="_blank">GitHub</a>`,
  `      <a href="/" target="_blank">LinkedIn</a>`,
  `    </main>`,
  `  );`,
  `}`,
  `export default Portafolio;`,
];

const PresentacionAnimada = () => {
  const [fase, setFase] = useState("codigo"); // 'codigo' | 'spinner' | 'resultado'

  
  const [lineasCompletadas, setLineasCompletadas] = useState([]);
  const [lineaActual, setLineaActual] = useState("");
  const [index, setIndex] = useState(0);
  const typeSpeed = 15; // Velocidad de escritura en ms por carácter
  
  useEffect(() => {
    if (fase === 'codigo' && index < codigo.length) {
      const tiempoEscritura = codigo[index].length * typeSpeed;

      setLineaActual(codigo[index]);

      setTimeout(() => {
        setLineasCompletadas((prev) => [...prev, codigo[index]]);
        setLineaActual('');
        if (index === codigo.length - 1) {
          setTimeout(() => setFase('spinner'), 500); // Activar spinner después de última línea
        } else {
          setIndex(index + 1);
        }
      }, tiempoEscritura + 200);
    }

    if (fase === 'spinner') {
      setTimeout(() => setFase('resultado'), 500); // Duración del spinner antes de resultado
    }
  }, [index, fase]);

  return (
    <div className="w-full h-full text-green-400 font-mono flex flex-col items-center justify-center transition-all duration-700">
      {fase === "codigo" && (
        <div className="w-full h-full px-2 transition-all duration-1200">
          {lineasCompletadas.map((line, i) => (
            <pre key={i} className="whitespace-pre-wrap opacity-100">
              {line}
            </pre>
          ))}

          {/* Mostrar solo la línea que se está escribiendo */}
          {lineaActual && (
            <pre className="whitespace-pre-wrap opacity-100">
              <Typewriter
                words={[lineaActual]}
                loop={false}
                deleteSpeed={0}
                cursor={true}
                typeSpeed={typeSpeed}
              />
            </pre>
          )}
        </div>
      )}

      {fase === "spinner" && (
        <div className="flex items-center justify-center text-white text-lg flex-col gap-2">
          <div className="animate-spin border-cyan-400 rounded-full h-12 w-12 border-2 border-t-transparent"></div>
          <div className="text-2xl animate-pulse text-cyan-400 mt-4">
            Cargando<span className="dots">...</span>
          </div>
        </div>
      )}

      {fase === "resultado" && (
        <div className="mt-8 text-white text-center transition-opacity duration-1000 opacity-100">
          <h1 className="text-3xl font-bold">Hola, soy Facundo</h1>
          <h2 className="text-xl mt-2">Desarrollador Full Stack</h2>
          <p className="mt-2">Apasionado por la tecnología</p>
          <h3 className="mt-2">Especializado en React y Node.js</h3>
          <div className="mt-4 flex gap-4 justify-center">
            <a
              href="https://github.com/FacundoAylan"
              target="_blank"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/facundo-aylan-582b52257"
              target="_blank"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentacionAnimada;
