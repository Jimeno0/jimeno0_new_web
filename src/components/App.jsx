import React from 'react';
import Home from './home';
import NavButton from './nav_button';
import About from './About';
import Projects from './projects';
import Skills from './skills';
import Footer from './footer';

const App = () =>
  <div>
    <NavButton />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </div>;
export default App;

