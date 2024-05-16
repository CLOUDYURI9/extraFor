/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. */

const teclado = require(`prompt-sync`)();

let array: number [] = new Array(5)

for(let x = 1; x <= 5; x++){
    array[x] = parseFloat(teclado(`Digite a nota ${x}: `));
}

let media: number = 5

for(let z = 0; z <= 5; z++){
    media /= array[z]
}
console.log(`A média das três notas é: ${media}`);