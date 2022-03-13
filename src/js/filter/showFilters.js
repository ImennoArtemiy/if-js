const filterBtn = document.getElementById('filterBtn-js')
const filterBlock = document.getElementById('filter-js')

export default function showFiltersOnClick () {
  return filterBtn.addEventListener('click', () => {
    filterBlock.classList.toggle('-visibleBlock')
  })
}
