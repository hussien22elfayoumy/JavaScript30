const pressedKeys = [];
const magicWord = 'cat';

window.addEventListener('keydown', (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(-magicWord - 1, pressedKeys.length - magicWord.length);
  if (pressedKeys.join('').includes(magicWord)) {
    // cornify_add();
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ['🐱', '⚡️', '💥', '✨', '💫', '🌸', '🐱', '🐱'],
    });
  }
});
