const inputs = [...document.querySelectorAll('input')];
const button = document.querySelector('button');
const datafield = document.querySelector('.datafield');

button.addEventListener('click', (e) => {
  e.preventDefault();
  let x = [];
  inputs.forEach((input, index) => {
    x.push(input.value);
  });

  datafield.innerHTML += x.map((item) => `<td>${item}</td>`).join('');
})