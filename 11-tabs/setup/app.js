const tabBtns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.about-content');

tabBtns.forEach((btn,i) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((btn,i) => {
      btn.classList.remove('active');
      content[i].classList.remove('active');
    })
    btn.classList.add('active');
    content[i].classList.add('active');
  })
})