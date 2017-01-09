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
    modal.classList.toggle('active');
  }
  renderIcon() {
    if (this.state.open) {
      return (<img src="src/images/cross_icon.png" alt="menu icon" />);
    }
    return (<img src="src/images/menu.png" alt="menu icon" />);
  }
  renderModal() {

  }
  render() {
    return (
      <div>
        <div className="menu-button">
          <button onClick={() => this.handleClick()}>
            {this.renderIcon()}
          </button>
        </div>
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
