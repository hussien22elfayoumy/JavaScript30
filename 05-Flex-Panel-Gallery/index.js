const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach((panel) => panel.classList.remove('open'));
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.startsWith('flex')) {
    this.querySelector(':first-child').classList.toggle('open');
    this.querySelector(':last-child').classList.toggle('open');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
});

panels.forEach((panel) => {
  panel.addEventListener('transitionend', toggleActive);
});
