let even =[], odd=[];
for(let i=2;i<101;i++){
    if (i%2===0) {
        even.push(i)
    }
    else{odd.push(i)}
}
console.log(`Even: ${even} \nOdd: ${odd}`);