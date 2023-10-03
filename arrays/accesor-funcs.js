// Accessor functions -> functions that you can use to access elements of an array

// ! searching for a value -> array.indexOf(element)
// ? checks to see if the argument passed is found in array, if the argument is in the array it will return the index position(of the argument), otherwise '-1'

const names = ['David', 'Cynthia', 'Raymond', 'David', 'Clayton']

const findName = (array, name) => {
  const postion = array.indexOf(name)

  return postion > -1
    ? `found ${name} at position ${postion}`
    : `${name} not found in the array`
}

// console.log(findName(names, 'David'));
// console.log(findName(names, 'david'));

// ! array.lastIndexOf(element) -> return the last occurrence of the given argument, otherwise -1
const checkMultipleOccurences = (array, name) => {
  const first = array.indexOf(name)
  const last = array.lastIndexOf(name)

  // if there are no multiple occurences, end the function
  if (first === last) return

  console.log(`first element: ${name}, position: ${first}`);
  console.log(`last element: ${name}, position: ${last}`);
}
// checkMultipleOccurences(names, 'Cynthia');


// ! string representation of an array -> array.join(separator), array.toString()
// both methods return a comma separated string, unless if you pass a delimeter as an argument to join() method
const createString = (array) => {
  return array.join()
  // return array.toString()
}
// console.log(createString(['lesedi', 'bale']));

// ! Creating new arrays from existing arrays
// ? concat() -> allows you to put together two or more arrays to create new array
const xx = ['Mike', 'Clayton', 'Terril', 'Danny',]
const yy = ['Raymond', 'Cynthia', 'Bryan']
const zz = xx.concat(yy) // combined array
// console.log(xx);
// console.log(yy);
// console.log(zz);

// ? splice(start, num_elements) -> allows you to create a new array from a subset of an existing array
const devDept = ['Mike', 'Clayton', 'Terril', 'Danny', 'Raymond', 'Cynthia', 'Bryan']
const cisDept = devDept.splice(2, 3)
// console.log(cisDept);

// * other uses of splice() include, modifying an existing array by adding/removing elements

