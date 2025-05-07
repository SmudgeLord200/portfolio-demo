import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Experience from './components/pages/Experience'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import { CustomThemeProvider } from './context/ThemeProvider'
import MainLayout from './components/ui/Layout/MainLayout'

const App = () => {
  return (
    <CustomThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </CustomThemeProvider>
  )
}

export default App
