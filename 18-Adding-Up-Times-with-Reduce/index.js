const videos = [...document.querySelectorAll('.videos li')];

const totalSeconds = videos
  .map((video) => video.dataset.time)
  .map((time) => {
    const [mins, secs] = time.split(':');
    const seconds = +mins * 60 + +secs;

    return seconds;
  })
  .reduce((acc, curr) => acc + curr, 0);

const hours = Math.floor(totalSeconds / 3600);
const mins = Math.floor((totalSeconds % 3600) / 60);
const seconds = Math.floor(totalSeconds % 60);
console.log(hours, mins, seconds);
