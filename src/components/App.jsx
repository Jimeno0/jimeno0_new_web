import React from 'react';
import Intro from './intro';
import NavButton from './nav_button';
import About from './About';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';

const App = () =>
  <div>
    <Intro />
    <NavButton />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </div>;
export default App;

