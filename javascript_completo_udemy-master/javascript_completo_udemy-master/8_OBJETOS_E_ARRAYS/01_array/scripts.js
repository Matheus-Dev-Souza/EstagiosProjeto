/* let arr = [1, 4, 5, 6, 7];
let nomes = ['Matheus', 'João', 'Aléxia'];
let bool = [true, false, true];

let misturado = [1, 'Matheus', true];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado); */

document.getElementById('showArraysBtn').addEventListener('click', function() {
    let arr = [1, 4, 5, 6, 7];
    let nomes = ['Matheus', 'João', 'Aléxia'];
    let bool = [true, false, true];
    let misturado = [1, 'Matheus', true];
    
  
    document.getElementById('arrOutput').textContent = JSON.stringify(arr);
    document.getElementById('nomesOutput').textContent = JSON.stringify(nomes);
    document.getElementById('boolOutput').textContent = JSON.stringify(bool);
    document.getElementById('misturadoOutput').textContent = JSON.stringify(misturado);
  
    document.getElementById('arraysContainer').classList.remove('hidden');
  });
  
  console.log('arr');