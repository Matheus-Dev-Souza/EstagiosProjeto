function reverseString(str){
    let charArray = str.split('');
    let reversedArray = charArray.reverse();
    let reversedString = reversedArray.join('');
    
    return reversedString;
}

let originalString = "OpenAI";
let invertedString = reverseString(originalString);

console.log(invertedString);