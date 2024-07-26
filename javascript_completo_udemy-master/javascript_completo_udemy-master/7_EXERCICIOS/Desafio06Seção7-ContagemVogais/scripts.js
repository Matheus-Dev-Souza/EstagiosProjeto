function countVowels(str){
    const vowels = 'aeiouAEIOU';

    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count ++;
        }
    }
    return count;
}

let exempleString = 'Hello, World!';
let vowelCount = countVowels(exempleString);

console.log(vowelCount);