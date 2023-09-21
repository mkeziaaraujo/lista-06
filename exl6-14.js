const prompt = require('prompt-sync')()

var valueN = Number(prompt('Digite um número: '));

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for(var index = 2; index <= valueN; index++){
fibonacci[index] = fibonacci[index - 2] + fibonacci[index - 1];
}

console.log(`A lista de Fibonacci é: ${fibonacci}`)