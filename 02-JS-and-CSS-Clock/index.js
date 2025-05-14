const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
displayDate(); // ignore the layout freez when first open the app

setInterval(() => {
  displayDate();
}, 1000);

function displayDate() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();
  secHand.style.transform = `rotate(${90 + 6 * sec}deg)`;
  minHand.style.transform = `rotate(${90 + 6 * min}deg)`;
  hourHand.style.transform = `rotate(${90 + (360 / 24) * hour}deg)`;
}
