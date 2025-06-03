const menu = ['Inicio', 'Sobre mi', 'Proyectos', 'Contactos'];

const NavBar = ({setFace})=>{
  return(
    <div className="w-full h-full flex justify-between px-2 items-center tracking-widest cursor-pointer">
      {/*Logo */}
      <h1 className="hover:scale-110 font-extrabold">Facundo</h1>
      {/*menu */}
      <div> 
        <ul>
          {menu.map((item, index)=>{
            return(
              <li 
                key={index} 
                className="inline-block px-4 hover:scale-110"
                onClick={()=>setFace(index)}
              >
                {item}
              </li>
            )
          })}      
        </ul>
      </div>
    </div>
  )
};

export default NavBar;