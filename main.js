/* eslint-disable */
const filterBtn = document.getElementById('filterBtn-js');
const filter = document.getElementById('filter-js');

filterBtn.addEventListener('click', () => {
  filter.classList.toggle('-visibleBlock');
})

const adultCount = document.getElementById('adultCount');
const childrenCount = document.getElementById('childrenCount');
const roomCount = document.getElementById('roomCount');
const minusButtons = document.querySelectorAll('.minus-filter-btn');
const plusButtons = document.querySelectorAll('.plus-filter-btn');
const childAgeBlock = document.querySelectorAll('.filter-childAgeBlock');

//Adults

const minAdultValue = '0';
const maxAdultValue = '30';

minusButtons[0].addEventListener('click', () => {
  if (adultCount.textContent !== minAdultValue) {
    adultCount.textContent = `${adultCount.textContent - 1}`;
  }
  if (adultCount.textContent === minAdultValue) {
    minusButtons[0].classList.add('disableBtn');
  }
  if(adultCount.textContent !== maxAdultValue) {

    plusButtons[0].classList.remove('disableBtn');
    plusButtons[0].classList.add('enableBtn');
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusButtons[0].addEventListener('click', () => {
  if(adultCount.textContent !== maxAdultValue) {
    adultCount.textContent = `${Number(adultCount.textContent) + 1}`;
  }
  if (adultCount.textContent !== minAdultValue) {
    minusButtons[0].classList.remove('disableBtn');
    minusButtons[0].classList.add('enableBtn');
  }
  if (adultCount.textContent === maxAdultValue) {
    plusButtons[0].classList.add('disableBtn');
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

//Children

const minChildrenValue = '0';
const maxChildrenValue = '10';

minusButtons[1].addEventListener('click', () => {
  if (childrenCount.textContent !== minChildrenValue) {
    childrenCount.textContent = `${childrenCount.textContent - 1}`;
    const deleteChildSelect = document.querySelector('.filter-indicateAge');
    childAgeBlock[0].removeChild(deleteChildSelect);
  }
  if (childrenCount.textContent === minChildrenValue) {
    minusButtons[1].classList.add('disableBtn');
  }
  if(childrenCount.textContent !== maxChildrenValue) {
    plusButtons[1].classList.remove('disableBtn');
    plusButtons[1].classList.add('enableBtn');
  }
  if (Number(childrenCount.textContent) === Number(minChildrenValue)) {
    childAgeBlock[0].classList.add('-invisibleBlock');
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusButtons[1].addEventListener('click', () => {
  if(childrenCount.textContent !== maxChildrenValue) {
    childrenCount.textContent = `${Number(childrenCount.textContent) + 1}`;

      const childrenSelectElement = document.createElement('select');
      for (let year = 0; year < 18; year++) {
        childrenSelectElement.innerHTML += `<option>${year} years old</option>`;
      }
      childrenSelectElement.classList.add('filter-indicateAge');
      childAgeBlock[0].appendChild(childrenSelectElement);
    }

  if (childrenCount.textContent !== minChildrenValue) {
    minusButtons[1].classList.remove('disableBtn');
    minusButtons[1].classList.add('enableBtn');
  }
  if (childrenCount.textContent === maxChildrenValue) {
    plusButtons[1].classList.remove('enableBtn');
    plusButtons[1].classList.add('disableBtn');
  }
  if (Number(childrenCount.textContent) !== Number(minChildrenValue)) {
    childAgeBlock[0].classList.remove('-invisibleBlock');
    childAgeBlock[0].classList.add('-visibleBlock');
  }

  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

//Rooms

const minRoomsValue = '0';
const maxRoomsValue = '30';

minusButtons[2].addEventListener('click', () => {
  if (roomCount.textContent !== minRoomsValue) {
    roomCount.textContent = `${roomCount.textContent - 1}`;
  }
  if (roomCount.textContent === minRoomsValue) {
    minusButtons[2].classList.add('disableBtn');
  }
  if(roomCount.textContent !== maxRoomsValue) {
    plusButtons[2].classList.remove('disableBtn');
    plusButtons[2].classList.add('enableBtn');
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusButtons[2].addEventListener('click', () => {
  if(roomCount.textContent !== maxRoomsValue) {
    roomCount.textContent = `${Number(roomCount.textContent) + 1}`;
  }
  if (roomCount.textContent !== minRoomsValue) {
    minusButtons[2].classList.remove('disableBtn');
    minusButtons[2].classList.add('enableBtn');
  }
  if (roomCount.textContent === maxRoomsValue) {
    plusButtons[2].classList.add('disableBtn');
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})



// const data = [
//   {
//     name: 'Hotel Leopold',
//     city: 'Saint Petersburg',
//     country: 'Russia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//   },
//   {
//     name: 'Apartment Sunshine',
//     city: 'Santa  Cruz de Tenerife',
//     country: 'Spain',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//   },
//   {
//     name: 'Villa Kunerad',
//     city: 'Vysokie Tatry',
//     country: 'Slowakia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//   },
//   {
//     name: 'Hostel Friendship',
//     city: 'Berlin',
//     country: 'Germany',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//   },
//   {
//     name: 'Radisson Blu Hotel',
//     city: 'Kyiv',
//     country: 'Ukraine',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//   },
//   {
//     name: 'Paradise Hotel',
//     city: 'Guadalupe',
//     country: 'Mexico',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//   },
//   {
//     name: 'Hotel Grindewald',
//     city: 'Interlaken',
//     country: 'Switzerland',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//   },
//   {
//     name: 'The Andaman Resort',
//     city: 'Port Dickson',
//     country: 'Malaysia',
//     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//   },
// ];
//
// const homesBody = document.getElementById('homes-body');
//
// homesBody.innerHTML = data.map(i =>
//   `<div class="homes__column">
//     <img src="${i.imageUrl}" alt="House in Russia">
//     <p class="homes__text -blue-text">${i.name}</p>
//     <p class="homes__text -gray-text">${i.city}, ${i.country}</p>
// </div>`).join('');

const urlHomesContent = 'https://fe-student-api.herokuapp.com/api/hotels/popular';

fetch(urlHomesContent)
  .then(data => data.text())
  .then(data => {
    return JSON.parse(data);
  })
  .then(data => {
    console.log(data);
    const homesBody = document.getElementById('homes-body');
    homesBody.innerHTML = data.map(i =>
    `<div class="homes__column">
      <img src="${i.imageUrl}" alt="House in Russia">
      <p class="homes__text -blue-text">${i.name}</p>
      <p class="homes__text -gray-text">${i.city}, ${i.country}</p>
  </div>`).join('');
  });
