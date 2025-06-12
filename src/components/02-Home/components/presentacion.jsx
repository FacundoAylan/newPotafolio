import React, { useState, useEffect, useRef } from 'react';

const codigo = [
  `import React from 'react';`,
  ``,
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
  ``,
  `export default Portafolio;`
];

const PresentacionAnimada = () => {
  const [lineas, setLineas] = useState([]);
  const [fase, setFase] = useState('codigo'); // 'codigo' | 'spinner' | 'resultado'
  const indexRef = useRef(0);

  useEffect(() => {
    if (fase === 'codigo') {
      const escribir = () => {
        const currentIndex = indexRef.current;
        if (currentIndex < codigo.length) {
          setLineas((prev) => [...prev, codigo[currentIndex]]);
          indexRef.current += 1;
          setTimeout(escribir, 200);
        } else {
          setTimeout(() => setFase('spinner'), 4000);
        }
      };
      escribir();
    }
  }, [fase]);
  

  useEffect(() => {
    if (fase === 'spinner') {
      const timeout = setTimeout(() => {
        setFase('resultado');
      }, 1000); // duración del spinner
      return () => clearTimeout(timeout);
    }
  }, [fase]);

  return (
    <div className="w-full h-full text-green-400 font-mono flex flex-col items-center justify-center transition-all duration-700">
      {fase === 'codigo' && (
        <div className=" w-full h-full px-2 transition-all duration-1200">
          {lineas.map((line, index) => (
            <pre
              key={index}
              className="whitespace-pre-wrap opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {line}
            </pre>
          ))}
        </div>
      )}

      {fase === 'spinner' && (
        <div className="flex items-center justify-center text-white text-lg flex-col gap-2">
          <div className="animate-spin border-cyan-400 rounded-full h-12 w-12 border-2 border-t-transparent"></div>
          <div className="text-2xl animate-pulse text-cyan-400 mt-4">Cargando<span className="dots">...</span></div>
        </div>
      )}

      {fase === 'resultado' && (
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
