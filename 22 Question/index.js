const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let min = ages[0]
let max = ages[ages.length-1]
let range = max-min;
let median, average, sum=0;

// Median value
if(ages.length%2===0){
    median = ((ages[ages.length/2]) + (ages[ages.length/2 + 1]))/2
}else{
    median = ages[Math.ceil(ages.length/2)]
}

// Average
for(let i=0;i<ages.length;i++){
    sum+=ages[i]
}
average = sum/ages.length

let diff1 = Math.abs(min-average)
let diff2 = Math.abs(max-average)

console.log(`${min} \n${max} \n${median} \n${average} \n${range} \n${diff1} \n${diff2}`);