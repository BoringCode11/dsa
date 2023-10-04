/*
  ! Exercise 3
  ? Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
*/

function weeklyTemps() {
  this.dataStore = []

  this.add = function (temps) {
    this.dataStore.push(temps)
  }

  this.averageMonthly = function () {
    const arr = this.dataStore
    let total = 0

    for (let i = 0; i < this.dataStore.length; i++) {

      for (let j = 0; j < this.dataStore[i]; j++) {
        console.log(this.dataStore[i][j]);
      }
    }
  }

  this.averageWeeks = function () {
    const arr = this.dataStore
  }
}
