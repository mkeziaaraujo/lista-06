const prompt = require('prompt-sync')()

var array = JSON.parse(prompt('Digite um array de números: '))

var target = Number(prompt('Digite um target: '))

var sum = []

for(var index = 0; index < array.length; index++){
    for (var array = index + 1; array < array.length; array++);
} 
if((sum += array[index]) === target){
    sum.push(index, array)
} else{
    console.log(`Nenhum dos números somados é igual a target`);
}

