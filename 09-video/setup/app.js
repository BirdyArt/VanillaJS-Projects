// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');
let i = 0;

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('slide');
  i++;
  i % 2 === 0 ? video.play() : video.pause();
});

window.addEventListener('load', () => {
  preloader.classList.toggle('hide-preloader')
})