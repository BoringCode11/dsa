/*
  ! Exercise 1 
  ? Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average
*/

function Grades() {
  this.grades = []
  this.add = add
  this.average = average
}

function add(grade) {
  this.grades.push(grade)
}

function average() {
  let sum = 0

  for (const grd of this.grades) {
    sum += grd
  }
  const average = (sum / this.grades.length).toFixed(2)
  console.log(average)
}

const student = new Grades()
student.add(56)
student.add(76)
student.add(59)

student.average()