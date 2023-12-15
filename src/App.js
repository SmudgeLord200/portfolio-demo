import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import MainLayout from './components/MainLayout';

function App() {
  let theme = createTheme(); //TODO: change this
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      {/* <MainLayout> */}
        <Header />
        <About />
        <Project />
        <Skills />
        <Contact />
      {/* </MainLayout> */}
    </ThemeProvider>
  );
}

export default App;
