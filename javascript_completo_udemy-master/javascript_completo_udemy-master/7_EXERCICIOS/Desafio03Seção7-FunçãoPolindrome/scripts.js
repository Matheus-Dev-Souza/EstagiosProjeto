function isPalindrome(palavra) {
  let palavraIndaVolta = palavra.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let comprimento = palavraIndaVolta.length;

  for (let i = 0; i < comprimento / 2; i++) {
    if (palavraIndaVolta[i] !== palavraIndaVolta[comprimento - 1 -i]){
      return false;
    }
}
   return true;
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('tenet'));
console.log(isPalindrome(' A man, a plan, a canal, Panama '));
console.log(isPalindrome('12321'));