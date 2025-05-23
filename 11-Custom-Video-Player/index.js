const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleBtn = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// functions

const togglePlay = function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateBtn = function () {
  const icon = this.paused ? '▶' : '❚❚';

  toggleBtn.innerHTML = icon;
};

const skip = function () {
  const skipValue = this.dataset.skip;
  video.currentTime += +skipValue;
};

const handleRangeUpdate = function () {
  video[this.name] = this.value;
};

const handleProgress = function () {
  const percent = (video.currentTime / video.duration) * 100;

  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
};

// hook up the listenrs
toggleBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));

ranges.forEach((range) => range.addEventListener('input', handleRangeUpdate));

progress.addEventListener('click', scrub);

let mouseDown = false;
progress.addEventListener('mousemove', (e) => {
  if (!mouseDown) return;
  scrub(e);
});

progress.addEventListener('mousedown', () => (mouseDown = true));
progress.addEventListener('mouseup', () => (mouseDown = false));
