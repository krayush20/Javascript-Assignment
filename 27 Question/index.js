function primeNums(){
    let primeNums = []
    for(let i=2;i<101;i++){
        let prime = true
        for(let j=2;j<Math.sqrt(i);j++){
            if(i%j===0){
                prime = false
                break
            }else{prime = true}
        }
        if(prime){
            primeNums.push(i)
        }
    }
    console.log(primeNums);
}

// Usage
primeNums()