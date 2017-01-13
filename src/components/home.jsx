import React, { Component } from 'react';
import scrollToY from '../helpers/scroll_animation';

class Home extends Component {
  goToAbout() {
    const about = document.querySelector('section.about');
    scrollToY(about.offsetTop, 150, 'easeInOutQuint');
  }
  render() {
    return (
      <section className="home">
        <div>
          <div>
            <h1>Hi, I'm <a href="www.github.com/jimeno0">Jimeno0</a></h1>
            <h3>A full stack developer</h3>
          </div>
          <img className="logo" src="src/images/jimeno0_logo.svg" alt="logo" />
        </div>
        <svg onClick={() => this.goToAbout()} width="44px" height="24px" viewBox="259 410 44 24">
          <polyline
            id="Path-2" stroke="#979797" strokeWidth="2" fill="none"
            points="260 411 280.968527 431.968527 301.775324 411.16173"
          />
        </svg>
      </section>
    );
  }
}
export default Home;
