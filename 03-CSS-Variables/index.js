const inputs = document.querySelectorAll('.controls input');

const handleChange = function () {
  //Get the suffix for each value (e.g., 'px' or '%') from the data-sizing attribute
  const suffix = this.dataset.sizing || ''; // `this` refers to the input element that triggered the event

  // Change the css variables
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
};

inputs.forEach((input) => {
  input.addEventListener('change', handleChange);
});
