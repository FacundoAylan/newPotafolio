const menu = ['Inicio', 'Sobre mi', 'Proyectos', 'Contactos'];

const NavBar = ({setFace})=>{
  return(
    <div className="w-full h-full flex justify-between px-2 items-center text-[#0EC143] tracking-widest cursor-pointer">
      {/*Logo */}
      <div>
        <h1 className="hover:scale-110">Facundo</h1>
      </div>
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