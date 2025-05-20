const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const API =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchCities = (cities, value) => {
  return (filterdCites = cities.filter(
    (city) =>
      city.city.toLowerCase().includes(value) ||
      city.state.toLowerCase().includes(value)
  ));
};

const highlight = (name, searchValue) => {
  return name
    .toLowerCase()
    .replaceAll(searchValue, `<span class="hl">${searchValue}</span>`);
};

const displayCities = (cities, searchValue) => {
  const filterCities = searchCities(cities, searchValue);

  const html = filterCities
    .map((city) => {
      const cityName = highlight(city.city, searchValue);
      const stateName = highlight(city.state, searchValue);
      return `
					<li >
						<span class="name">${cityName}, ${stateName}</span>
						<span class="population">${city.population}</span>
					</li>
				`;
    })
    .join('');

  suggestions.innerHTML = html;
};

async function init() {
  const res = await fetch(API);
  const cities = await res.json();

  searchInput.addEventListener('input', (e) => {
    displayCities(cities, e.target.value.toLowerCase());
  });
}

init();
