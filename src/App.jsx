import AboutUs from "./components/AboutUs";
import Contact from "./components/contact/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <AboutUs />
      <WorkExperience />
      <PersonalProjects />
      <Contact />
    </div>
  );
};

export default App;
