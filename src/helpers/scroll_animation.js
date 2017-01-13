// requestAnimFrame compatibility crossbrowsers
window.requestAnimFrame = (() =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  ((callback) => { window.setTimeout(callback, 1000 / 60); })
)();

// main function
const ScrollToY = (scrollTargetYparam, speedParam, easingParam) => {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const scrollTargetY = scrollTargetYparam || 0;
  const speed = speedParam || 2000;
  const easing = easingParam || 'easeOutSine';
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easingEquations = {
    easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine(pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint(pos) {
      const newPos = pos / 0.5;
      if ((newPos) < 1) {
        return 0.5 * Math.pow(newPos, 5);
      }
      return 0.5 * (Math.pow((newPos - 2), 5) + 2);
    }
  };

  // add animation loop
  function tick() {
    currentTime += 1 / 60;

    const p = currentTime / time;
    const t = easingEquations[easing](p);

    if (p < 1) {
      window.requestAnimFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }
  // call it once to get started
  tick();
};

export default ScrollToY;
