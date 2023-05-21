function table(num){
    if(Number.isInteger(num)){
        for(let i=1;i<11;i++){
            console.log(`${num} * ${i} = ${num*i}`);
        }
    }else{
        console.log("Give valid input.");
    }
}

// Usage
table(2)