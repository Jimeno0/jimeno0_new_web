import React, { Component } from 'react';

export default class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleClick() {
    this.setState({ open: !this.state.open });
    const modal = document.querySelector('ul.menu-modal');
    const burgerButton = document.querySelector('button.c-hamburger');
    modal.classList.toggle('active');
    burgerButton.classList.toggle('is-active');
  }
  handleGoTo(event) {
    const sectionClass = event.currentTarget.dataset.section;
    const section = document.querySelector(`section.${sectionClass}`);
    const scrollTo = section.offsetTop;
    window.scrollTo(0, scrollTo);
    this.handleClick();
  }
  renderIcon() {
    if (this.state.open) {
      return (<img src="src/images/cross_icon.png" alt="menu icon" />);
    }
    return (<img src="src/images/menu.png" alt="menu icon" />);
  }
  render() {
    return (
      <div className="menu-button-component">
        <img src="src/images/hexagon_menu.svg" alt="hexagon button bkg" />
        <button onClick={() => this.handleClick()} className="c-hamburger">
          <span>toggle menu</span>
        </button>
        <ul className="menu-modal">
          <li data-section="about" onClick={e => this.handleGoTo(e)}>ABOUT</li>
          <li data-section="projects" onClick={e => this.handleGoTo(e)}>PROJECTS</li>
          <li data-section="skills" onClick={e => this.handleGoTo(e)}>SKILLS</li>
          <li data-section="intro" onClick={e => this.handleGoTo(e)}>CONTACT</li>
          <li><a href="https://medium.com/@jimeno0">BLOG</a></li>
        </ul>
      </div>
    );
  }
}
