/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno. */
var teclado = require("prompt-sync")();
var array = new Array(5);
for (var x = 1; x <= 5; x++) {
    array[x] = parseFloat(teclado("Digite a nota ".concat(x, ": ")));
}
var media = 5;
for (var z = 0; z <= 5; z++) {
    media /= array[z];
}
console.log("A m\u00E9dia das tr\u00EAs notas \u00E9: ".concat(media));
