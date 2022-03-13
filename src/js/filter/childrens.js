const filterBtn = document.getElementById('filterBtn-js')
const childrenCount = document.getElementById('childrenCount')
const minusButtons = document.querySelectorAll('.minus-filter-btn')
const plusButtons = document.querySelectorAll('.plus-filter-btn')
const childAgeBlock = document.querySelectorAll('.filter-childAgeBlock')
const selectsContainer = document.getElementById('selectsContainer')
const minChildrenValue = '0'
const maxChildrenValue = '10'

function childrenMinusButtonClick () {
  return minusButtons[1].addEventListener('click', () => {
    if (childrenCount.textContent !== minChildrenValue) {
      childrenCount.textContent = `${childrenCount.textContent - 1}`
      const deleteChildSelect = document.querySelector('.filter-indicateAge')
      selectsContainer.removeChild(deleteChildSelect)
    }
    if (childrenCount.textContent === minChildrenValue) {
      minusButtons[1].classList.add('disableBtn')
    }
    if(childrenCount.textContent !== maxChildrenValue) {
      plusButtons[1].classList.remove('disableBtn')
      plusButtons[1].classList.add('enableBtn')
    }
    if (Number(childrenCount.textContent) === Number(minChildrenValue)) {
      childAgeBlock[0].classList.add('-invisibleBlock')
    }
    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

function childrenPlusButtonClick () {
  return plusButtons[1].addEventListener('click', () => {

    if(childrenCount.textContent !== maxChildrenValue) {
      childrenCount.textContent = `${Number(childrenCount.textContent) + 1}`

      const childrenSelectElement = document.createElement('select')
      for (let year = 0; year < 18; year++) {
        childrenSelectElement.innerHTML += `<option class="childAgeOption">${year} years old</option>`
      }
      childrenSelectElement.classList.add('filter-indicateAge')
      selectsContainer.appendChild(childrenSelectElement)
    }

    if (childrenCount.textContent !== minChildrenValue) {
      minusButtons[1].classList.remove('disableBtn')
      minusButtons[1].classList.add('enableBtn')
    }
    if (childrenCount.textContent === maxChildrenValue) {
      plusButtons[1].classList.remove('enableBtn')
      plusButtons[1].classList.add('disableBtn')
    }
    if (Number(childrenCount.textContent) !== Number(minChildrenValue)) {
      childAgeBlock[0].classList.remove('-invisibleBlock')
      childAgeBlock[0].classList.add('-visibleBlock')
    }

    filterBtn.textContent = `${adultCount.textContent} Adults — ${childrenCount.textContent} Children — ${roomCount.textContent} Room`
  })
}

export {childrenMinusButtonClick, childrenPlusButtonClick}
