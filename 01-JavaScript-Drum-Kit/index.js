window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0; // reset the time if there is double click
  audio.play();
  key.classList.add('playing');
});

window.addEventListener('keyup', (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;
  key.classList.remove('playing');
});
