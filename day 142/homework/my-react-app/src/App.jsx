import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
function App() {
  return (
    <div className="flex-row flex  justify-center space-x-10 w-[100vw]">
      <Home/>
      <About/>
      <Contact/>
      <Login/>
      <Register/>
    </div>
  )
}

export default App
