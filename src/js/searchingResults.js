import bubbleSort from './functions/functionBubbleSort.js'

const searchFormBtn = document.getElementById('searchFormBtn')
const availableHotelsWrap = document.getElementById('availableWrap')

const drawAvailableHotels = (data) => {
  const availableHotelsBody = document.getElementById('availableHotels-body')
  return  availableHotelsBody.innerHTML = data.map(i =>
    `<div class="homes__column">
      <img src="${i.imageUrl}" alt="House in Russia">
      <p class="homes__text -blue-text">${i.name}</p>
      <p class="homes__text -gray-text">${i.city}, ${i.country}</p>
  </div>`).join('')
}

const submitForm = () => {
  const childrenTagSelect = document.querySelectorAll('.filter-indicateAge')
  const textToFind = document.getElementById('textToFind').value
  const childrenYearsArr = []

  for (let i = 0; i < childrenTagSelect.length; i++) {
    childrenYearsArr.push(childrenTagSelect[i].options.selectedIndex)
  }

  fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${textToFind}&adults=${adultCount.textContent}&children=${childrenYearsArr.toString()}&rooms=${roomCount.textContent}`)
    .then(data => data.text())
    .then(data => {
      return JSON.parse(data)
    })
    .then(data => {
      bubbleSort(data)
      drawAvailableHotels(data)
    })
    .then(() => {
      availableHotelsWrap.classList.remove('-invisibleBlock')
    })
}

function searchBtnOnClick () {
  return searchFormBtn.addEventListener('click', submitForm)
}

export default searchBtnOnClick
