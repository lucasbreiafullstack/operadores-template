// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
const diferencaIdade = minhaIdade - idadeAmiga

console.log("A sua idade é maior que a do seu amigo?", minhaIdade > idadeAmiga)
console.log("A diferença de idade é:", diferencaIdade)

//EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d 
b && a && !d
a || d
c && !d
