import Home from "./components/Home/home"
import NavBar from "./components/NabBar/NavBar"

const App = ()=> {
  return (
    <div className='w-full h-screen m-0 p-0'>
      <div className="fixed w-full h-14 bg-[#181818]">
        <NavBar/>
      </div>
      <div className="w-full h-screen pt-14 bg-[#002d35]">
        <Home/>
      </div>
    </div>
  )
}

export default App
