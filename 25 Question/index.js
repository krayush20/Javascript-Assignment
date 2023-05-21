function BMIcalculator(weight, height){
    let bmi = weight/(height*height)
    if (bmi<18.5) {
        console.log("Underweight");
    }else if(bmi>=18.5 && bmi<24.9){
        console.log("Normal weight");
    }else if(bmi>24.9 && bmi<29.9){
        console.log("Overweight");
    }
     else {
        console.log(("Obese"));
    }
}

// Usage
BMIcalculator(55,1.7) //weight in kgs and height in meters