// 1
function sortArr(arr){
    return arr.toSorted((a, b) => b - a)
}

// 2
function cloneTwoArr(arr1, arr2){
      const result = []

  for (let i = 0; i < arr1.length; i++){
    const value = arr1[i]

    let alreadyInResult = false;
    for (let j = 0; j < result.length; j++){
      if (result[j] === value){
        alreadyInResult = true
        break
      }
    }
    if (alreadyInResult) 
        continue

    for (let k = 0; k < arr2.length; k++){
      if (arr2[k] === value){
        result.push(value)
        break
      }
    }
  }
  return result
}

// 3
function avgArr(matrix) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      sum += matrix[i][j]
      count++
    }
  }
  return sum / count
}

// 4
function removeNumberWithPop(arr, num){
  let count = 0
  let temp = []

  while (arr.length > 0){
    let current = arr.pop()
    if (current === num){
      count++
    } else{
      temp.push(current)
    }
  }

  while (temp.length > 0){
    arr.push(temp.pop())
  }
  return count
}

// Arrow functions - 1
const isLongerThanFive = (str) => str.length > 5

// 2
const checkFirstAndLastChar = (str) => {
  if (str.length === 0) {return "המחרוזת ריקה"}
  return str[0] === str[str.length - 1] ? "התו הראשון והאחרון זהים" : "התו הראשון והאחרון שונים";
}

// 3
const checkLastChar = (str) => {
  if (str.length === 0) return false
  const lastChar = str.charAt(str.length - 1)
  return lastChar === lastChar.toUpperCase() && lastChar !== lastChar.toLowerCase()
}

// Map/forEach - 1
function checkDivisibleByThree(arr){
  if (arr.length !== 8){
    console.log("The array must have 8 digits")
    return
  }

  let found = false;

  arr.forEach((num, index) => {
    if (num % 3 === 0){
      console.log(`The number ${num} in location ${index} is dividing by 3`)
      found = true
    }
  })
  if (!found) {
    console.log("The array is not divisible by 3")
  }
}

// 2
function mapLettersToCase(arr) {
  return arr.map(char => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()){
      return "U";
    }
    if (char === char.toLowerCase() && char !== char.toUpperCase()){
      return "L"
    }
    return "?"
  })
}

// 3
function replaceEvenIndices(arr){
  arr.forEach((value, index) => {
    if (index % 2 === 0){
      arr[index] = index
    }
  })
  return arr
}

// filter - 4
function filterAdults(ages){
  return ages.filter(age => age > 18)
}

// 5
function removeIndexThree(arr) {
  return arr.filter((value, index) => index !== 3);
}

// 6
let names = ["דני", "שרה"];

function addName(name) {
  names = [...names, name];
}

// 7
function mergeArrays(arr1, arr2){
  return [...arr1, ...arr2]
}
