const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 20;

hero.addEventListener('mousemove', function (e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk * 2 - walk; // -40 to 40
  const yWalk = (y / height) * walk * 2 - walk; // -40 to 40

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255,255,255,0.3)
	
	
	`;
});
