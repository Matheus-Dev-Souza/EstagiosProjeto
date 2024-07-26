function sumEvenNumbers(numbers){
    let sum = 0;

    for (let num of numbers){
        if(num % 2 === 0){
            sum += num;
        }
    }
    return sum;
}
let exampleArray = [1, 2, 3, 4, 5, 6, -8, -10];
let evenSum = sumEvenNumbers(exampleArray);

console.log(evenSum);