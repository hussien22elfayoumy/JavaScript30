const images = document.querySelectorAll('img');

const revealImages = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) entry.target.classList.add('active');
};

const imageObserver = new IntersectionObserver(revealImages, {
  root: null,
  threshold: 0.2,
});

images.forEach((img) => {
  imageObserver.observe(img);
});
