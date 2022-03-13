import bubbleSort from './functions/functionBubbleSort.js'

const urlHomesHotelsPopular = 'https://fe-student-api.herokuapp.com/api/hotels/popular'

const drawHomesBodyBlock = (data) => {
  const homesBody = document.getElementById('homes-body')
  return  homesBody.innerHTML = data.map(i =>
    `<div class="homes__column">
      <img src="${i.imageUrl}" alt="House in Russia">
      <p class="homes__text -blue-text">${i.name}</p>
      <p class="homes__text -gray-text">${i.city}, ${i.country}</p>
  </div>`).join('')
}

const serverRequest = () => {
  fetch(urlHomesHotelsPopular)
    .then(data => data.text())
    .then(data => {
      return JSON.parse(data)
    })
    .then(data => {
      bubbleSort(data)
      drawHomesBodyBlock(data)
      return JSON.stringify(data)
    })
    .then(data => sessionStorage.setItem('hotels', data))
}

const sessionDataHotels = sessionStorage.getItem('hotels')

function homeBlockDrawing () {
  if (sessionDataHotels) {
    const data = JSON.parse(sessionDataHotels);
    drawHomesBodyBlock(data);
  } else {
    serverRequest();
  }
}

export default homeBlockDrawing
