import './App.css';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Highlights from './components/Highlights';
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer'
import Skills from './components/Skills/index'
import WorkExperience from './components/WorkExperience/index.jsx'
import OpenToWork from './components/OpenToWork';
import SectionDivider from './components/SectionDivider';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <SectionDivider />
      <Highlights />
      <Skills />
      <WorkExperience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Contact />
      <OpenToWork />
      <Footer />
    </div>
  );
}

export default App;
