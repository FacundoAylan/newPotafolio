import { useState, useEffect } from "react";
import Home from "./components/Home/home";
import NavBar from "./components/NabBar/NavBar";
import AboutMe from "./components/About/About";
import Proyects from "./components/Proyects/Proyects";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  const [face, setFace] = useState(0);
  const [prevFace, setPrevFace] = useState(null);

  const caras = [
    { id: 0, content: <Home /> },
    { id: 1, content: <AboutMe /> },
    { id: 2, content: <Proyects /> },
    { id: 3, content: <Contacts /> },
  ];

  const handleSetFace = (newFace) => {
    if (newFace !== face) {
      setPrevFace(face);
      setFace(newFace);
    }
  };

  return (
    <div className="w-full h-screen m-0 p-0 bg-[#101010]">
      <div className="fixed z-50 w-full h-14 backdrop-blur-md bg-[#101010]/30 border-b-2 border-[#0EC143] text-[#0EC143]">
        <NavBar setFace={handleSetFace} />
      </div>

      <div className="relative w-full h-screen pt-14 overflow-hidden bg-[#003a43] text-white/80">
        {caras.map((cara, index) => {
          const isActive = index === face;
          const isPrevious = index === prevFace;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-600 ease-in-out ${
                isActive
                  ? "scale-100 opacity-100 z-40 clip-path-circle"
                  : isPrevious
                  ? "scale-0 opacity-0 z-30 clip-path-closed"
                  : "opacity-0 z-10"
              }`}
            >
              <div
                className={`w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out ${
                  isActive ? "scale-100" : "scale-0"
                }`}
              >
                {cara.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
