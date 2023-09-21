const prompt= require('prompt-sync')()

var array = JSON.parse(prompt('Digite um array de números: '))

for(var index = 0; index < array.length; index++){
    console.log(`8 * ${array[index]} = ${8 * array[index]}`);
}