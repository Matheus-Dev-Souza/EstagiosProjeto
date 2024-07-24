function faixaEtaria(idade){
  if (idade < 12){
    return 'Criança';
  } else if (idade >= 12 && idade <= 24){
    return 'Jovem';
  } else {
    return 'Adulto';
  }
}

const crianca = faixaEtaria(8);
const adulto = faixaEtaria(30);

console.log(crianca);
console.log(adulto);