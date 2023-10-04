/*
  ! Exercise 4
  ? Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.
*/

function letters() {
  this.letters = []

  this.add = function (letter) {
    this.letters.push(letter)
  }

  this.displayWord = function () {
    const word = this.letters.reduce((acc, letter) => {
      return acc += letter
    }, '')
    return word;
  }
}

const l = new letters()
l.add('l')
l.add('e')
l.add('s')
l.add('e')
l.add('d')
l.add('i')

console.log(l.displayWord());