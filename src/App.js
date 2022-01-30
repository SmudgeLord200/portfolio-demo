import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Header />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
