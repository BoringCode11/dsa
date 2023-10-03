// ! Mutator functions -> allow you to modify the contents of an array without referencing an individual element(mutates/changes the original array)

// ? push(...args), unshift(...args): Adding elements to an array
const nums1 = [1, 2, 3, 4, 5]
// nums1.push(6, 7) // adds an element to the end of a array
// console.log(`Add to end: ${nums1}`);
// nums1.unshift(0) // adds an element to the start of a array
// console.log(`Add to beginning: ${nums1}`);


// ? pop(), shift(): Removing elements from an array
const nums2 = [1, 2, 3, 4, 5]
nums2.pop() // removes and returns the last element: 5
// console.log(nums2);
nums2.shift() // removes and returns the first element: 1
// console.log(nums2);

// ? splice(start, num_elements, ...elements): adding/removing elements in the middle of an array
const vals = [1, 2, 3, 4, 7, 8, 9]
vals.splice(4, 0, ...[5, 6]) // adds [5,6] after 4
// console.log(vals);

const vals2 = [1, 2, 3, 4, 10, 60, 80, 5, 6, 7, 8, 9]
vals2.splice(4, 3) // remove 10,60,80 from the array
// console.log(vals2);


// ? reverse(), sort() -> putting array elements in order
const vals3 = [5, 4, 3, 2, 1]
// console.log(vals3); // original
vals3.reverse()
// console.log(vals3); // mutated

// * sort()
// * sort() sorts data lexicographically(assuming elements are string)
// ? with string
const names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"]
names.sort()
// console.log(names); // works correctly

// ? with numbers -> pass an ordering function(sort elements numerically)
const vals4 = [5, 2, 1000, 12, 22, 76, 23, 31, 1]

const compare = (val1, val2) => {
  return val1 - val2
}

// vals4.sort() // wont work correctly
vals4.sort(compare) // works correctly
// console.log(vals4); 
