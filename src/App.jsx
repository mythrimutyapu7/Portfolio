import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Certifications from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';
import ContactStrip from './components/ContactStrip/ContactStrip';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <ContactStrip />
    </>
  );
}

export default App;
