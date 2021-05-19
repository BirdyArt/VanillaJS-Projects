// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
document.getElementById('date').textContent = new Date().getFullYear();
// ********** close links ************
const navBtn = document.querySelector('.nav-toggle');
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');

navBtn.addEventListener('click', () => {
  const containerHeight = linksCont.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  containerHeight === 0 ? linksCont.style.height = `${linksHeight}px` : linksCont.style.height = 0;
})
// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav');
  scrollHeight > 500 ? topLink.classList.add('show-link') : topLink.classList.remove('show-link');
})
// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksCont.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight
    }
    if (navHeight < 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left:0, top: position
    });
    linksCont.style.height = 0;
  })
})
