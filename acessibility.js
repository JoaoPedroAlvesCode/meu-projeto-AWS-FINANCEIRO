function initAccessibility() {
  let currentFontSize = 100; // porcentagem
  const htmlEl = document.documentElement;

  const btnDecrease = document.getElementById('acc-font-decrease');
  const btnReset = document.getElementById('acc-font-reset');
  const btnIncrease = document.getElementById('acc-font-increase');
  const btnContrast = document.getElementById('acc-contrast');

  if (btnDecrease) {
    btnDecrease.addEventListener('click', () => {
      if (currentFontSize > 80) {
        currentFontSize -= 10;
        htmlEl.style.fontSize = `${currentFontSize}%`;
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      currentFontSize = 100;
      htmlEl.style.fontSize = '100%';
    });
  }

  if (btnIncrease) {
    btnIncrease.addEventListener('click', () => {
      if (currentFontSize < 130) {
        currentFontSize += 10;
        htmlEl.style.fontSize = `${currentFontSize}%`;
      }
    });
  }

  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }
}