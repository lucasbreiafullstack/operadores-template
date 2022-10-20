//PRÁTICA GUIADA

let saldo = 15 + 22.40
console.log("Saldo:", saldo);

saldo = saldo - 12.34
console.log("Saldo Atualizado:", saldo);

saldo = saldo / 3
console.log("Valor por irmão:", saldo);

saldo = saldo * 3.42
console.log("Valor investido:", saldo);

saldo = saldo % 3
console.log("Resto para o chiclete:", saldo);

const ms1 = 2*2+2
console.log("MS1:", ms1);

const ms2 = 2*(2+2)
console.log("MS2:", ms2);

const comparacaoIgual = 5 === 5 
console.log("5 === 5:", comparacaoIgual);

const comparacaoDiferente = 5 !== 5
console.log("5 !== 5:", comparacaoDiferente);

const comparacaoTipo1 = 5 !== "5"
console.log("5 !== 5:", comparacaoTipo1);

const comparacaoTipo2 = "5" === "cinco"
console.log("5 !== cinco:", comparacaoTipo2);

const comparacaoTipo3 = typeof 5 === typeof 20
console.log("Typeof 5 === Typeof 20:", comparacaoTipo3);

const comparacaoTipo4 = typeof "5" === typeof "cinco"
console.log("Typeod 5 === typeof cinco:", comparacaoTipo4)

let num1 = 2
let num2 = 8
let resultado

resultado = num1 === num2
console.log("O primeiro é igual ao o segundo?", resultado);

resultado = num1 <= num2
console.log("O primeiro é menor ou igual ao o segundo?", resultado);

resultado = num1 > num2
console.log("O primeiro é maior que  o segundo?", resultado);

resultado = num1 < num2
console.log("O primeiro é menor que o segundo?", resultado);

const a = 'Quero dirigir um Celta 2012';
const b = 'Sou maior de idade';
const c = 'Consigo comprar o Celta por 22.000 reais';
const d = 'Consigo alugar o Celta';
const e = 'Cenho carteira de motorista';

a
!b
b && !e
b && (c || d)
(b && e) && !a


