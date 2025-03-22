import AboutUs from "./components/aboutComponent/AboutUs";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";
import Studies from "./components/studies/Studies";
import WorkExperience from "./components/WorkExperience";
import ParticlesComponent from "./components/particles/Particles";

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Particles como fondo */}
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />

      {/* Contenido principal */}
      <div className="relative z-10 space-y-20">
        <Header />
        <Hero />
        <Skills />
        <AboutUs />
        <Studies />
        <WorkExperience />
        <PersonalProjects />
        <Contact />
      </div>
    </div>
  );
};


export default App;
