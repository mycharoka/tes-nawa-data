function getTheBus(families, famMembers) {
  // let famStorage = new Array(families)
  let members = famMembers.replace(/\s/g, '')
  let famStorage = []

  for (let index = 0; index < members.length; index++) {
    famStorage.push(members[index])
  }
  

  if (famStorage.length !== families) return "Input must be equal with count of family"

  let convertType = famStorage.map(val => {
    return parseInt(val, 10)
  })
  
  
  let arrSum = convertType.reduce((prev, curr) => prev + curr, 0)
  

  if (arrSum % 4 == 0) {
    return `Bus required : ${arrSum / 4}`
  } else if (arrSum % 4 != 0) {
    return `Bus required : ${Math.ceil(arrSum / 4)}`
  }
}


// console.log(getTheBus(8, "2 3 4 4 2 1 3 1"))
// console.log(getTheBus(5, "1 2 4 3 3"))
// console.log(getTheBus(5, "1 5"))