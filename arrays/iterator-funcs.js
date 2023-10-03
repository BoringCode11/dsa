// ! Iterator functions -> apply a function to each element of an array(returning a value, set of values, or a new array)

// ? Non-Array Generating iterator functions
// * forEach(function): performs a side-effect
const nums = [1, 2, 3, 4, 5]

const square = (num) => {
  console.log(`${num}: ${num * num}`)
}
// nums.forEach(square)


// * every(): applies a boolean function to each element and returns true if every element evaluates to 'true'
const evenNums = [2, 4, 6, 8, 10]
const allEven = evenNums.every(num => num % 2 === 0)

// if (allEven) {
//   console.log(`all numbers are even`);
// } else {
//   console.log(`not all numbers are even`);
// }

// * some() -> applies a boolean function and returns true if at least one element evaluates to 'true', else 'false'
const names = ['David', 'Scott', 'Weedo']
const someStartJ = names.some(name => name.at(0) === 'J')
// console.log(someStartJ);


// * reduce() -> applies a function to an accumulator and the successive elements of an array, yeilding a single value
const vals5 = [1, 2, 3, 4, 5]

const add = (acc, element) => {
  return acc + element
}
const sum = vals5.reduce(add)


// using reduce to perform string concatination
const words = ['the', 'quick', 'brown', 'fox']
const string = words.reduce((acc, word) => {
  return acc + ' ' + word
})


// ? Iterator functions that return a new array
// * map() -> applies a function to each element, returns a new array
// using numbers
const grades = [77, 65, 81, 92, 89]

const newGrades = grades.map((grade) => grade += 5)
// console.log(newGrades);

// using strings
const str = ['for', 'your', 'information']

const acronym = str.map(word => {
  return word.at(0).toUpperCase()
}).join('')


// * filter() -> applies a boolean function and every element that evaluates to true will be added to the new array
const numsFilter = []
for (let i = 0; i < 12; i++) {
  nums[i] = i + 1
}

const isEven = num => {
  return num % 2 === 0
};
const isOdd = num => {
  return num % 2 !== 0
};

const evenNumbers = nums.filter(isEven)
const oddNumbers = nums.filter(isOdd)
// console.log(evenNumbers);
// console.log(oddNumbers);


// filtering-out failed grades
const stdGrades = []

for (let i = 0; i < 10; i++) {
  stdGrades[i] = Math.floor(Math.random() * 100) + 1
}
console.log(stdGrades);

const passing = grd => {
  return grd > 49
}

const passingGrades = stdGrades.filter(passing)
// console.log(passingGrades);