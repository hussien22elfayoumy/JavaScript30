const keys = document.querySelectorAll('.key');
const soundes = document.querySelectorAll('audio');

window.addEventListener('keydown', (e) => {
  const code = e.keyCode;
  keys.forEach((key) => {
    key.classList.remove('playing');
    if (+key.dataset.key === code) {
      key.classList.add('playing');
    }
  });

  soundes.forEach((sound) => {
    if (+sound.dataset.key === code) {
      sound.play();
    }
  });
});
