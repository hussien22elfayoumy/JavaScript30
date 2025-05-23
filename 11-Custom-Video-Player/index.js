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
  console.log(video.currentTime);
  video.currentTime += +skipValue;
};

// hook up the listenrs
toggleBtn.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('click', togglePlay);

skipButtons.forEach((skipButton) => skipButton.addEventListener('click', skip));
