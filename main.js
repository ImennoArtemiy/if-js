/* eslint-disable */
const filterBtn = document.getElementById('filterBtn-js');
const filter = document.getElementById('filter-js');

filterBtn.addEventListener('click', () => {
  filter.style.display = 'block';
})

const adultCount = document.getElementById('adultCount');
const childrenCount =document.getElementById('childrenCount');
const roomCount = document.getElementById('roomCount');
const minusBtn = document.querySelectorAll('.minus-filter-btn');
const plusBtn = document.querySelectorAll('.plus-filter-btn');
const childAgeBlock = document.querySelectorAll('.filter-childAgeBlock');

//Adults

minusBtn[0].addEventListener('click', () => {
  if (adultCount.textContent !== `${0}`) {
    adultCount.textContent = `${adultCount.textContent - 1}`;
  }
  if (adultCount.textContent === `${0}`) {
    minusBtn[0].style.border = '1px solid #CECECE';
    minusBtn[0].style.color = '#CECECE';
  }
  if(adultCount.textContent !== `${30}`) {
    plusBtn[0].style.border = '1px solid #3077C6';
    plusBtn[0].style.color = '#3077C6';
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusBtn[0].addEventListener('click', () => {
  if(adultCount.textContent !== `${30}`) {
    adultCount.textContent = `${Number(adultCount.textContent) + 1}`;
  }
  if (adultCount.textContent !== `${0}`) {
    minusBtn[0].style.border = '1px solid #3077C6';
    minusBtn[0].style.color = '#3077C6';
  }
  if (adultCount.textContent === `${30}`) {
    plusBtn[0].style.border = '1px solid #CECECE';
    plusBtn[0].style.color = `#CECECE`;
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

//Children
if (childrenCount.textContent === `${0}`) {
  minusBtn[1].style.border = '1px solid #CECECE';
  minusBtn[1].style.color = '#CECECE';
}

minusBtn[1].addEventListener('click', () => {
  if (childrenCount.textContent !== `${0}`) {
    childrenCount.textContent = `${childrenCount.textContent - 1}`;
    const deleteChildSelect = document.querySelector('.filter-indicateAge');
    childAgeBlock[0].removeChild(deleteChildSelect);
  }
  if (childrenCount.textContent === `${0}`) {
    minusBtn[1].style.border = '1px solid #CECECE';
    minusBtn[1].style.color = '#CECECE';
  }
  if(childrenCount.textContent !== `${10}`) {
    plusBtn[1].style.border = '1px solid #3077C6';
    plusBtn[1].style.color = '#3077C6';
  }
  if (Number(childrenCount.textContent) === 0) {
    childAgeBlock[0].style.display = 'none';
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusBtn[1].addEventListener('click', () => {
  if(childrenCount.textContent !== `${10}`) {
    childrenCount.textContent = `${Number(childrenCount.textContent) + 1}`;

      const childrenSelectElement = document.createElement('select');
      for (let year = 0; year < 18; year++) {
        childrenSelectElement.innerHTML += `<option>${year} years old</option>`;
      }
      childrenSelectElement.classList.add('filter-indicateAge');
      childAgeBlock[0].appendChild(childrenSelectElement);
    }

  if (childrenCount.textContent !== `${0}`) {
    minusBtn[1].style.border = '1px solid #3077C6';
    minusBtn[1].style.color = '#3077C6';
  }
  if (childrenCount.textContent === `${10}`) {
    plusBtn[1].style.border = '1px solid #CECECE';
    plusBtn[1].style.color = `#CECECE`;
  }
  if (Number(childrenCount.textContent) !== 0) {
    childAgeBlock[0].style.display = 'block';
  }

  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

//Room

minusBtn[2].addEventListener('click', () => {
  if (roomCount.textContent !== `${0}`) {
    roomCount.textContent = `${roomCount.textContent - 1}`;
  }
  if (roomCount.textContent === `${0}`) {
    minusBtn[2].style.border = '1px solid #CECECE';
    minusBtn[2].style.color = '#CECECE';
  }
  if(roomCount.textContent !== `${30}`) {
    plusBtn[2].style.border = '1px solid #3077C6';
    plusBtn[2].style.color = '#3077C6';
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})

plusBtn[2].addEventListener('click', () => {
  if(roomCount.textContent !== `${30}`) {
    roomCount.textContent = `${Number(roomCount.textContent) + 1}`;
  }
  if (roomCount.textContent !== `${0}`) {
    minusBtn[2].style.border = '1px solid #3077C6';
    minusBtn[2].style.color = '#3077C6';
  }
  if (roomCount.textContent === `${30}`) {
    plusBtn[2].style.border = '1px solid #CECECE';
    plusBtn[2].style.color = `#CECECE`;
  }
  filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`;
})



const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const homesBody = document.getElementById('homes-body');

homesBody.innerHTML = data.map(i =>
  `<div class="homes__column">
    <img src="${i.imageUrl}" alt="House in Russia">
    <p class="homes__text -blue-text">${i.name}</p>
    <p class="homes__text -gray-text">${i.city}, ${i.country}</p>
</div>`).join('');
