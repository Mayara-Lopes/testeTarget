// function inverteString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// inverteString('hello');

var palavra = prompt('Digite sua palavra')
var palavraInvertida = ""

for (let i = palavra.length - 1; i>= 0; i--) {
    palavraInvertida += palavra[i];
    
}
console.log(palavraInvertida)