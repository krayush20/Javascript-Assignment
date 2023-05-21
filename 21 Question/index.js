const countries = require("../19 Question/countries.js") //From Question 19

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA");
}else{
    countries.push("Ethiopia")
}

console.log(countries);