const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 pt-14 bg-[#003b44]">
      <div className="w-auto text-center bg-[#101828] border-6 rounded-[10px] border-[#03a6a6] border-double shadow-[0px_0px_10px_4px_#03a6a6] font-mono text-[#00b0ff] p-6 rounded-t-[130px] rounded-bl-[130px]">
        <h1 className="text-4xl font-bold mb-4 text-[#0cbe43]">🚀 Sobre mí 🚀</h1>
        <p className="text-lg">
          ¡Hola! Soy <span className="font-semibold text-[#0cbe43]">Facundo</span>,
          estudiante de <strong className="text-[#0cbe43]">Analista en Sistemas</strong> en la{" "}
          <span className="font-semibold text-[#0cbe43]">UBA</span> y{" "}
          <strong className="text-[#0cbe43]">Full Stack Developer</strong> 👨‍💻. Me apasiona el{" "}
          <strong>Diseño Web</strong> 🎨 y disfruto aprendiendo nuevas tecnologías
          que me permitan llevar mis ideas al siguiente nivel.
        </p>
        <p className="mt-4 text-lg">
          Además, tengo un gran interés en la <strong className="text-[#0cbe43]">Electrónica</strong> ⚡ y la{" "}
          <strong className="text-[#0cbe43]">Reparación de Computadoras</strong> 🛠️, lo que me ha dado una
          perspectiva técnica valiosa y un enfoque práctico a la hora de
          desarrollar soluciones digitales. Me encanta trabajar en proyectos que
          desafíen mi creatividad y me permitan fusionar el{" "}
          <strong className="text-[#0cbe43]">Diseño y la Tecnología</strong> 🔗 en productos innovadores.
        </p>
        <p className="mt-4 text-lg">
          Estoy en constante evolución 🔄 y siempre busco nuevas oportunidades para
          crecer profesionalmente. Si tienes una idea 💡, proyecto 🏗️ o simplemente
          quieres conectar 🤝, estaré encantado de conversar.{" "}
          <strong className="text-[#0cbe43]">¡No dudes en ponerte en contacto conmigo! 📩</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
