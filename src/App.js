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

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Highlights />
      <Skills />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <OpenToWork />
    </div>
  );
}

export default App;
