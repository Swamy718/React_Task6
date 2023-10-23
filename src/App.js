import logo from './logo.svg';
import './App.css';
import About_me from './components/About_me';
import { HashRouter, Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Nav_Bar from './components/Nav_Bar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
       <HashRouter>
        <Nav_Bar/>
        <Routes>
          <Route path="/" element={<About_me/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
        <Contact/>
       </HashRouter>

    </div>
  );
}

export default App;
