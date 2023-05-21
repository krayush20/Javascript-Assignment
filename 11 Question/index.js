let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()+1
let date = today.getDate()
let day = today.getDay()
let hours = today.getHours()
let minutes = today.getMinutes()
let secondsElapsed = Date.now()
console.log(`${year} \n${month} \n${date} \n${day} \n${hours} \n${minutes} \n${secondsElapsed}`);