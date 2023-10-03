// ! elements can be inserted and accessed in an array using [] 
// ! JS arrays are indexed at 0
// ! first element -> array[0]
// ! last element -> array[array.length - 1]

// * adding elements using a loop
const addNums = (n) => {
  const nums = []

  for (let i = 0; i < n; i++) {
    nums[i] = i + 1
  }
  return nums
}

// * accessing array elements(manually)
const numbers = addNums(5)
const firstNum = numbers[0]
const lastNum = numbers[numbers.length - 1]

const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
// console.log(sum); // 15

// * accessing array elements using a loop
const summation = (array) => {
  let total = 0

  // for-loop is controlled using the array length property(JS arrays are dynamic, and can change in size)
  for (let i = 0; i < array.length; i++) {
    const element = array[i] // accessing element at current index
    total += element
  }
  return total
}

console.log(summation(numbers));