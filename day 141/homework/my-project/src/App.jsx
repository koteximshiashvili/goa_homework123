import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import './App.css'

function App() {
  return (
    <div className="flex-row flex  justify-center space-x-10 w-[100vw]">
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
