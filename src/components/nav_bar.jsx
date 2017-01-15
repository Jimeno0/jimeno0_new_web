import React, { Component } from 'react';
import scrollToY from '../helpers/scroll_animation';

class NavBar extends Component {
  componentDidMount() {
    const navBar = document.querySelector('.nav-container');
    const navBarPos = navBar.getBoundingClientRect();
    // const navBarTop = navBarPos.top;
    const navBarTop = navBar.offsetTop;

    function handleScroll() {
      const scrolled = window.scrollY;
      if (scrolled >= navBarTop) {
        navBar.classList.add('nav-fixed');
      } else {
        navBar.classList.remove('nav-fixed');
      }
    }
    window.addEventListener('scroll', handleScroll);
  }
  handleGoTo(event) {
    const sectionClass = event.currentTarget.dataset.section;
    const section = document.querySelector(`section.${sectionClass}`);
    const scrollTo = section.offsetTop;
    scrollToY(scrollTo);
  }
  render() {
    const sections = ['about', 'projects', 'skills'];
    const sectionsNodes = sections.map(section => (
      <a key={section} data-section={section} onClick={e => this.handleGoTo(e)} >
        {section.toUpperCase()}
      </a>
    ));
    return (
      <div className="nav-container">
        <nav>
          <a className="home" data-section="home" onClick={e => this.handleGoTo(e)}>
            <img src="src/images/jimeno0_logo.svg" alt="logo" />
          </a>
          {sectionsNodes}
          <a href="https://medium.com/@jimeno0">BLOG</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
