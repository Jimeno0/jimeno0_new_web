import React, { Component } from 'react';

class Intro extends Component {
  goToAbout() {
    console.log('clicked!');
    const about = document.querySelector('section.about');
    window.requestAnimFrame = (function () {
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    }());

    // main function
    function scrollToY(scrollTargetY, speed, easing) {
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use

      var scrollY = window.scrollY || document.documentElement.scrollTop,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;

      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var easingEquations = {
        easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
      };

      // add animation loop
      function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
          requestAnimFrame(tick);

          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
          console.log('scroll done');
          window.scrollTo(0, scrollTargetY);
        }
      }
      // call it once to get started
      tick();
    }
    // scroll it!
    scrollToY(about.offsetTop, 150, 'easeInOutQuint');
  }
  render() {
    return (
      <section className="intro">
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
export default Intro;
