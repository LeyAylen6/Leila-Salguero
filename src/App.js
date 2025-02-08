import './App.css';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/index'
import Contact from './components/Contact/index'
import Skills from './components/Skills/index'
import WorkExperience from './components/WorkExperience/index.jsx'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Skills />
      <WorkExperience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
