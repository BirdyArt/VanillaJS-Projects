const sidebar = document.querySelector('.sidebar');
const toggler = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
})