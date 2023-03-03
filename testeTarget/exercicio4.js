var SP = 67836.43
var RJ = 36678.66
var MG = 29229.88
var ES = 27165.48
var Outros = 19849.53
var total = SP + RJ + MG + ES + Outros

let percentualSP = ((SP/total) * 100).toFixed(2)
let percentualRJ = ((RJ/total) * 100).toFixed(2)
let percentualMG = ((MG/total) * 100).toFixed(2)
let percentualES = ((ES/total) * 100).toFixed(2)
let percentualOutros = ((Outros/total) * 100).toFixed(2)

console.log(percentualSP + '%')
console.log(percentualRJ + '%')
console.log(percentualMG + '%')
console.log(percentualES + '%')
console.log(percentualOutros + '%')