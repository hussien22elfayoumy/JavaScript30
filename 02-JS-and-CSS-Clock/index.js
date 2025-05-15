const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const audio = document.querySelector('audio');
displayDate(); // ignore the layout freez when first open the app

setInterval(() => {
  displayDate();
}, 1000);

function displayDate() {
  const date = new Date();

  const sec = date.getSeconds();

  secHand.style.transform = `rotate(${(sec / 60) * 360 + 90}deg)`;

  const min = date.getMinutes();
  minHand.style.transform = `rotate(${(min / 60) * 360 + 90}deg)`;

  const hour = date.getHours();
  hourHand.style.transform = `rotate(${(hour / 12) * 360 + 90}deg)`;
  console.log(sec, min, hour);
  if (hour === 0 || hour === 24) {
    audio.play();
  }
}
