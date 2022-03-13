export default function bubbleSort (array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i].name > array[i + 1].name) {
        const buff = array[i].name
        array[i].name = array[i + 1].name
        array[i + 1].name = buff
      }
    }
  }

  return array
}
