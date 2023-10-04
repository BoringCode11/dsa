// ! 2D arrays -> structured like spreadsheet with columns and rows(nested arrays)

// ? creating a 2d array
// const array = []
// const rows = 5
// for (let i = 0; i < rows; i++) {
//   array[i] = []
// }
// console.log(array);

// creating a 2d array with initial values
function matrix(rows, cols, initial) {
  const result = []

  for (let i = 0; i < rows; i++) {
    const columns = []
    for (let j = 0; j < cols; j++) {
      columns[j] = initial
    }
    result[i] = columns
  }
  console.log(result);
}

// ? Processing 2d array elements
const grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89, 10, 50]
];


for (let row = 0; row < grades.length; row++) {
  let total = 0

  for (let col = 0; col < grades[row].length; col++) {
    total += grades[row][col]
  }

  const average = (total / grades[row].length).toFixed(2)

  console.log(`Student: ${row + 1}, Average: ${average}`);
}