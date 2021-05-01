  const btns = document.querySelectorAll('.btn');
  const displayNum = document.querySelector('.number');
  let count = 0;

  btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
      count < 0 ? displayNum.style.color = 'red' : displayNum.style.color = 'green';
      displayNum.textContent = count;
  })
});