import AboutUs from "./components/aboutComponent/AboutUs";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import PersonalProjects from "./components/PersonalProjects";
import Skills from "./components/Skills";
import Studies from "./components/studies/Studies";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <div className="space-y-20">
      <Header />
      <Hero />
      <Skills />
      <AboutUs />
      <Studies />
      <WorkExperience />
      <PersonalProjects />
      <Contact />
    </div>
  );
};

export default App;
