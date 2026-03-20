import './App.css'
import Navbar from './components/layout/Navbar/Navbar.jsx';
import Hero from './components/sections/Hero/Hero.jsx';
import About from './components/sections/About/About.jsx';
import Skills from './components/sections/Skills/Skills.jsx';
import Projects from './components/sections/Projects/Projects.jsx';
import Contact from './components/sections/Contact/Contact.jsx';
import Footer from './components/layout/Footer/Footer.jsx';

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
