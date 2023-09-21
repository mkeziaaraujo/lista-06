const prompt= require('prompt-sync')()

var array = JSON.parse(prompt('Digite um array de números: '))

for(index = 0; index < array.length; index++){
    if(array[index] > 0){
        console.log(array[index])
    }
}

