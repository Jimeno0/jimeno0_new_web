import React, { Component } from 'react';
import scrollToY from '../helpers/scroll_animation';

class NavBar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', handleScroll);
    const navBar = document.querySelector('nav');
    const navBarPos = navBar.getBoundingClientRect();
    const navBarTop = navBarPos.top;
    const navBarPadding = navBar.style.padding;

    function handleScroll() {
      const scrolled = window.scrollY;
      if (scrolled >= navBarTop) {
        navBar.classList.add('nav-fixed');
      } else {
        navBar.classList.remove('nav-fixed');
      }
    }
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
      <nav>
        {sectionsNodes}
        <a href="https://medium.com/@jimeno0">BLOG</a>
      </nav>
    );
  }
}

export default NavBar;
