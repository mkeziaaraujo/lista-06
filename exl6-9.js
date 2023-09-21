const prompt = require('prompt-sync')();

var array = JSON.parse(prompt("Digite um array de strings: "));

var maxLengthWord = "";

for(var index = 0; index < array.length; index++){
  if(array[index].length > maxLengthWord.length){
    maxLengthWord = array[index];
  } 
}
 console.log(`A maior string do array é: ${maxLengthWord}`)