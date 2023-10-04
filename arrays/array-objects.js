function Point(x, y) {
  this.x = x
  this.y = y
}

function createPoints(num) {
  const result = []

  const getRandomPos = () => {
    return Math.floor(Math.random() * 90) + 1
  }

  for (let i = 0; i < num; i++) {
    const point = new Point(getRandomPos(), getRandomPos())
    result.push(point)
  }
  return result;
}

const points = createPoints(5)

const displayPoints = points => {
  for (const point of points) {
    const { x, y } = point
    console.log(`${x}, ${y}`);
  }
}

// displayPoints(points)

// ! Arrays in Objects
function weekTemps() {
  this.dataStore = []

  this.add = function (temp) {
    this.dataStore.push(temp)
  }

  this.average = function () {
    let sum = 0
    for (let i = 0; i < this.dataStore.length; i++) {
      sum += this.dataStore[i]
    }
    return (sum / this.dataStore.length).toFixed(3)
  }
}

const thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
// console.log(thisWeek.average());