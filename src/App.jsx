import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Work from "./components/Work"

import './App.css'


function App() {


  return (
    <>
    <Navbar/>
    <section><Home/></section>
    <section> <About/></section>
    <section><Skills/></section>
    <section> <Work/></section>
    <section>
<Contact/></section>
    </>
  )
}

export default App
