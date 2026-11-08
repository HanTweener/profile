import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Guarantee from './components/Guarantee'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <CustomCursor />
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Guarantee />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
