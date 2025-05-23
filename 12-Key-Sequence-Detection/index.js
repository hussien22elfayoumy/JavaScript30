const input = document.querySelector('input');
const pressedKeys = [];
const magicWord = 'cat';

/* window.addEventListener('keydown', (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(-magicWord - 1, pressedKeys.length - magicWord.length);
  if (pressedKeys.join('').includes(magicWord)) {
    // cornify_add();
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ['🐱', '⚡️', '💥', '✨', '💫', '🌸', '🐱', '🐱'],
    });
  }
}); */

window.addEventListener('click', () => {
  input.focus();
});

// Listen to input value (mobile-friendly)
input.addEventListener('input', (e) => {
  const val = e.target.value.toLowerCase(); // normalize case
  pressedKeys.push(...val);
  e.target.value = ''; // reset to keep it clean for next key

  // Keep array length trimmed
  if (pressedKeys.length > magicWord.length) {
    pressedKeys.splice(0, pressedKeys.length - magicWord.length);
  }

  if (pressedKeys.join('').includes(magicWord)) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🐱', '⚡️', '💥', '✨', '💫', '🌸', '🐱', '🐱'],
    });
    pressedKeys.length = 0; // reset
  }
});
