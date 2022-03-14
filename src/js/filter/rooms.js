const filterBtn = document.getElementById('filterBtn-js')
const roomCount = document.getElementById('roomCount')
const minusButtons = document.querySelectorAll('.minus-filter-btn')
const plusButtons = document.querySelectorAll('.plus-filter-btn')
const minRoomsValue = '1'
const maxRoomsValue = '30'

function roomMinusButtonClick () {
  return minusButtons[2].addEventListener('click', () => {
    if (roomCount.textContent !== minRoomsValue) {
      roomCount.textContent = `${roomCount.textContent - 1}`
    }
    if (roomCount.textContent === minRoomsValue) {
      minusButtons[2].classList.add('disableBtn')
    }
    if(roomCount.textContent !== maxRoomsValue) {
      plusButtons[2].classList.remove('disableBtn')
      plusButtons[2].classList.add('enableBtn')
    }
    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

function roomPlusButtonClick () {
  return plusButtons[2].addEventListener('click', () => {
    if(roomCount.textContent !== maxRoomsValue) {
      roomCount.textContent = `${Number(roomCount.textContent) + 1}`
    }
    if (roomCount.textContent !== minRoomsValue) {
      minusButtons[2].classList.remove('disableBtn')
      minusButtons[2].classList.add('enableBtn')
    }
    if (roomCount.textContent === maxRoomsValue) {
      plusButtons[2].classList.add('disableBtn')
    }
    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

export {roomMinusButtonClick, roomPlusButtonClick}




