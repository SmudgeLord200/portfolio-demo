import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from './components/ScrollToTop';

const RootDiv = styled('div')({
  display: 'flex',
  maxHeight: '100%',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
})

const ContentDiv = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
})

function App() {
  let theme = createTheme(); //TODO: change this
  theme = responsiveFontSizes(theme);
  const [scrollTarget, setScrollTarget] = useState(undefined);

  return (
    <RootDiv
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}>
      <ContentDiv>
        <div id="back-to-top-anchor" />
        <ThemeProvider theme={theme}>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <ScrollToTop scrollTarget={scrollTarget}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTop>
        </ThemeProvider>
      </ContentDiv>
    </RootDiv>
  );
}

export default App;
