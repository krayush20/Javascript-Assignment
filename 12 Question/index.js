let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()+1
let date = today.getDate()
let hours = today.getHours()
let minutes = today.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
