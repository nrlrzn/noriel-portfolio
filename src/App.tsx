import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import NavBar from './components/pages/NavBar';
import SocialMedia from './components/pages/Socials';

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <SocialMedia />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
