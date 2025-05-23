const input = document.querySelector('input');
const pressedKeys = [];
const magicWord = 'cat';

window.addEventListener('click', () => {
  input.focus();
});

input.addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase();
  pressedKeys.push(...val);
  e.target.value = '';

  if (pressedKeys.length > magicWord.length) {
    pressedKeys.splice(0, pressedKeys.length - magicWord.length);
  }

  if (pressedKeys.join('').includes(magicWord)) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🐱', '⚡️', '💥', '✨', '💫', '🌸', '🐱', '🐱'],
    });
    pressedKeys.length = 0;
  }
});
