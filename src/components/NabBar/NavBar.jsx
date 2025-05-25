const menu =['Inicio', 'Sobre mi', 'Proyectos', 'Contactos'];

const NavBar = ()=>{
  return(
    <div className="w-full h-full flex justify-between px-2 text-white items-center font-bold">
      {/*Logo */}
      <div>
        <h1 className="text-neon hover:scale-110">Facundo</h1>
      </div>
      {/*menu */}
      <div> 
        <ul>
          {menu && menu.map((items)=>{
            return(
              <li key={items} className="inline-block px-4 text-neon hover:scale-110">
                {items}
              </li>
            )
          })}      
        </ul>
      </div>
    </div>
  )
};

export default NavBar;