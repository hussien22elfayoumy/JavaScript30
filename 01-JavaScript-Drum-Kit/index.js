const keys = document.querySelectorAll('.key');
const soundes = document.querySelectorAll('audio');

window.addEventListener('keydown', (e) => {
  const code = e.keyCode;

  soundes.forEach((sound) => {
    if (+sound.dataset.key === code) {
      sound.play();
    }
  });
});
