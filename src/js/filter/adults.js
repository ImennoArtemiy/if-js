const filterBtn = document.getElementById('filterBtn-js');
const adultCount = document.getElementById('adultCount')
const minusButtons = document.querySelectorAll('.minus-filter-btn')
const plusButtons = document.querySelectorAll('.plus-filter-btn')
const minAdultValue = '1'
const maxAdultValue = '30'

function adultMinusButtonClick () {
  return  minusButtons[0].addEventListener('click', () => {
    if (adultCount.textContent !== minAdultValue) {
      adultCount.textContent = `${adultCount.textContent - 1}`
    }
    if (adultCount.textContent === minAdultValue) {
      minusButtons[0].classList.add('disableBtn')
    }
    if(adultCount.textContent !== maxAdultValue) {

      plusButtons[0].classList.remove('disableBtn')
      plusButtons[0].classList.add('enableBtn')
    }
    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

function adultPlusButtonClick () {
  return plusButtons[0].addEventListener('click', () => {
    if(adultCount.textContent !== maxAdultValue) {
      adultCount.textContent = `${Number(adultCount.textContent) + 1}`
    }
    if (adultCount.textContent !== minAdultValue) {
      minusButtons[0].classList.remove('disableBtn')
      minusButtons[0].classList.add('enableBtn')
    }
    if (adultCount.textContent === maxAdultValue) {
      plusButtons[0].classList.add('disableBtn')
    }
    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

export {adultMinusButtonClick, adultPlusButtonClick}
