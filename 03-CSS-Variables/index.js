const spacingInput = document.querySelector('input[name="spacing"]');
const blurInput = document.querySelector('input[name="blur"]');
const baseInput = document.querySelector('input[name="base"]');

const root = document.querySelector(':root');

spacingInput.addEventListener('change', (e) => {
  console.log(e.target.value);

  root.style.setProperty('--spacing', `${e.target.value}px`);
});

blurInput.addEventListener('change', (e) => {
  console.log(e.target.value);

  root.style.setProperty('--blur', `${e.target.value}px`);
});

baseInput.addEventListener('change', (e) => {
  console.log(e.target.value);
  root.style.setProperty('--base', `${e.target.value}`);
});
