const addPlates = document.querySelector('.add-items');
const platesList = document.querySelector('.plates');
const plates = JSON.parse(localStorage.getItem('plates')) || [];

function addPlate(e) {
  e.preventDefault();
  // create an plate object
  const plateName = this.querySelector('[name=plate').value;
  const plate = {
    plateName,
    done: false,
  };

  // push to the plates array
  plates.push(plate);

  addNewPlate(plates, platesList);

  // presist the data to local storage
  localStorage.setItem('plates', JSON.stringify(plates));

  // Empty the form
  this.reset();
}

addPlates.addEventListener('submit', addPlate);

function togglePlateStatus(e) {
  if (!e.target.matches('input')) return;
  const isChecked = e.target.checked;
  const index = e.target.dataset.index;

  plates[index].done = isChecked;
  localStorage.setItem('plates', JSON.stringify(plates));
}

platesList.addEventListener('click', togglePlateStatus);

function renderAllThePlates(plates = [], platesList) {
  const html = plates
    .map(
      (plate, i) => `
			<li>
				<input type="checkbox" data-index="${i}" id="item-${i}" ${
        plate.done ? 'checked' : ''
      }/>
				<label for="item-${i}">${plate.plateName}</label>
			</li>
	`
    )
    .join('');

  platesList.innerHTML = html;
}

function addNewPlate(plates = [], platesList) {
  const lastPlateIdx = plates.length - 1;

  const html = `
			<li>
				<input type="checkbox" data-index="${lastPlateIdx}" id="item-${lastPlateIdx}" ${
    plates[lastPlateIdx].done ? 'checked' : ''
  }/>
				<label for="item-${lastPlateIdx}">${plates[lastPlateIdx].plateName}</label>
			</li>
	`;

  platesList.innerHTML += html;
}

// render all plates if there any in localstorage
renderAllThePlates(plates, platesList);
