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
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    );
  }
}
