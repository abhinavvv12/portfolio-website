import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/stats";
import Education from "./components/Education";
import Achievements from "./components/Acheivements";

function App() {
  return (
    <div className="relative overflow-hidden">

      <div
        className="
        fixed
        top:-200px
        left:-200px
        w:500px
        h:500px
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
      />

      <div
        className="
        fixed
        bottom:-200px
        right:-200px
        w:500px
        h:500px
        rounded-full
        bg-blue-500/10
        blur-3xl
        "
      />

      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;