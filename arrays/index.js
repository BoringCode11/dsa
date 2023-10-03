// ! Creating an Array

// ! Array declaration
// const numbers = [] // length: 0
// console.log(numbers.length);
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length); // 5

// ! Array constructor: with elements
// const numbers = new Array(1, 2, 3, 4, 5)
// console.log(numbers.length); // 5

// ! if you call the Array constructor with one integer element, it will create an array of that size
// const nums = new Array(10)
// console.log(nums.length); // 10: empty elements(undefined)

// ! in JS, array elements don't have to be of the same type
// const object = ['name', 120, true]

// ! checking if a value is an Array -> Array.isArray(value)
// const xx = [1, 2, 3, 4, 5]
// const yy = 'this is a string'
// console.log(Array.isArray(xx)); // true
// console.log(Array.isArray(yy)); // false

// ! accessing and adding elements into an array -> ('./accessing-adding.js')


// ! Creating Arrays from string -> string.split(separator)
// this func breaks up the string using a delimeter
const string = 'the quick brown fox jumped over the lazy dog'

const stringToArray = (string) => {
  const words = string.split(' ')

  for (let i = 0; i < words.length; i++) {
    console.log(`Word ${i}: ${words[i]}`);
  }
  return words
}

// stringToArray(string)


// ! Aggregate Array Operations
// * assign an array to other array (shallow-copy)
// ? both identifier will point to the same reference
// const numbers = [1, 2, 3, 4, 5]
// const otherNums = numbers
// otherNums[0] = 100 // change both arrays
// console.log(numbers); // [100, 2, 3, 4, 5]
// console.log(otherNums); // [100, 2, 3, 4, 5]

// * deep copy: each element from the original array is copied to new array
const deepCopy = (array) => {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i] // get element at current idx
    newArray[i] = element
  }
  return newArray
}

const numbers = [1, 2, 3, 4, 5]
const otherNums = deepCopy(numbers)

otherNums[0] = 100
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(otherNums); // [100, 2, 3, 4, 5]

// ! Accessor functions -> './accesor-funcs.js'

// ! Mutator functions -> './mutator-funcs.js'

// ! Iterator functions -> './iterator-funcs.js'