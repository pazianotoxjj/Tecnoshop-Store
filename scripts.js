const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  // Remove classe "active" atual
  document.querySelector('.item.active')?.classList.remove('active');
  document.querySelector('.dot.active')?.classList.remove('active');

  // Atualiza o índice
  if (direction > 0) {
    active = (active + 1) % total;
  } else {
    active = (active - 1 + total) % total;
  }

  // Adiciona classe "active" no novo item
  items[active].classList.add('active');
  dots[active].classList.add('active');

  // Atualiza o número (opcional)
  numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Inicia o carrossel automático
timer = setInterval(() => {
  update(1);
}, 5000);



// Botões de navegação
prevButton.addEventListener('click', () => {
  update(-1);
});

nextButton.addEventListener('click', () => {
  update(1);
});



