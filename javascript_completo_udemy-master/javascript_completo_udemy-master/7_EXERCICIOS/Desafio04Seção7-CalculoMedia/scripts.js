function calcuteAverage(numbers){
    if (numbers.length === 0)
        return 0;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }

    const average = sum / numbers.length;
    return average;
}

const nums = [1, 2, 3, 4, 5];
const avg = calcuteAverage(nums);
console.log('A média é: ${avg}');