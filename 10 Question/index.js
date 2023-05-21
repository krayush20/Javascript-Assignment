let firstVal = 4 > 3 //true
let secondVal = 4 >= 3 //true
let thirdVal = 4 < 3 //false
let fourthVal = 4 <= 3 //false
let fifthVal = 4 == 4 //true
let sixthVal = 4 === 4 //true
let seventhVal = 4 != 4 //false
let eighthVal = 4 !== 4 //false
let ninthVal = 4 != '4' //false
let tenthVal = 4 == '4' //true
let lastVal = 4 === '4' //false
// Comparing "python" and "jargon" length
let python = "python"
let jargon = "jargon"
let falsyStatement = python.length != jargon.length

console.log(`${firstVal} \n${secondVal} \n${thirdVal} \n${fourthVal} \n${fifthVal} \n${sixthVal} \n${seventhVal} \n${eighthVal} \n${ninthVal} \n${tenthVal} \n${lastVal}`)
console.log(falsyStatement);