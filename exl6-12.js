const prompt = require('prompt-sync')()

var number = 25
var binary = (number % 2)

for(;number > 1;){
    binary = (number % 2) + (binary)
}
console.log (binary)