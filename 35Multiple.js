function squareDigits(num){
    let papa = num.toString().split('')
    let etrArray = []
    papa.forEach((a) => {etrArray.push(parseInt(a**2).toString())})
    return parseInt(etrArray.join(""));
  }

console.log(squareDigits(3212))