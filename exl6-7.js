const prompt= require('prompt-sync')()

var array = JSON.parse(prompt('Digite um array de números: '))

// for(var index = 0; index < array.length; index++){
//  var sum = array[index] + array[index++]
// }
// var average = sum / array.length

// console.log(` A média de todos os números é: ${average}`)
let sum = 0
for(var index = 0; index < array.length; index++){
    sum += array[index]
}
const average = sum / array.length
console.log(` A média de todos os números é: ${average}`)