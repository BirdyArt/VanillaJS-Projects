const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

  document.body.style.backgroundColor = getRandomHex();
  color.textContent = getRandomHex();
});

const getRandomHex = () => {
  let myhex = '#';
  for (i = 0; i < 6; i++) {
    myhex += hex[Math.floor(Math.random() * 16)];
  }
  return myhex;
}