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

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  pressedKeys.push(e.target.value);
  pressedKeys.splice(
    -(magicWord.length - 1),
    pressedKeys.length - magicWord.length
  );
  if (pressedKeys.join('').includes(magicWord)) {
    e.target.value = '';
    // cornify_add();
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ['🐱', '⚡️', '💥', '✨', '💫', '🌸', '🐱', '🐱'],
    });
  }
});

window.addEventListener('click', () => input.focus());
