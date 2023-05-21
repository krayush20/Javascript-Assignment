function patternA(num){
    for(let i=1;i<=num;i++){
        let row = ""
        for (let j = 1; j<=i; j++) {
            row+="*"
        }
        console.log(row);
    }
}

function patternB(num){
    for(let i=1;i<=num;i++){
        let row = ""
        for (let j = 1; j<=num; j++) {
            row+="*"
        }
        console.log(row);
    }
}

function patternC(num) {
    for (let i = 1; i <= num; i++) {
      let row = "";
      // Add spaces before the asterisks
      for (let j = 1; j <= num - i; j++) {
        row += " ";
      }
      // Add asterisks
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
      }
      console.log(row);
    }
  }

//Usage
patternA(3)
patternB(3)
patternC(3)