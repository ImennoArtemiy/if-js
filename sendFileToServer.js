/* eslint-disable */
const fileInpEl = document.getElementById('fileInp')
const openBtnEl = document.getElementById('openBtn')
const uploadBtnEl = document.getElementById('uploadBtn')
const previewBlock = document.getElementById('previewBlock')


openBtnEl.addEventListener('click', () => fileInpEl.click())

fileInpEl.addEventListener('change', () => {
  const file = fileInpEl.files[0]
  const reader = new FileReader();

  previewBlock.innerHTML = ''

  reader.onload = ev => {
    const source = ev.target.result;
    previewBlock.insertAdjacentHTML('afterbegin', `
                        <img src="${source}" alt="${file.name}" />
                        <div class="preview-info">
                            <span>${file.name}</span>
                        </div>
                      `)
  }
  reader.readAsDataURL(file)
})

uploadBtnEl.addEventListener('click', () => {
  const files = fileInpEl.files
  const formData = new FormData()

  formData.append('file', files[0])

  if (files.length === 0) {
    return
  }

  fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => console.log(response))
})
