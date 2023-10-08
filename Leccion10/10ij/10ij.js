function actualizar(calculation){
  document.querySelector('.js-result').innerHTML = calculation;
  localStorage.setItem('calculation', JSON.stringify(calculation));
};

let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
