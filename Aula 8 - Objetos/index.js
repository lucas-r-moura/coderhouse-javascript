// Objetos 



// let fruta = {
//     nome: "Laranja",
//     cor: "Laranja",
//     peso: 130,
//     vitamina: "C"
// }

// console.log("peso: " + fruta.peso + " e cor: " + fruta.cor)

// atribuindo novos valores para as chaves
// fruta.peso = 150
// fruta["cor"] = "vermelho"

// console.log("Novo peso: " +  fruta.peso + " e Nova cor: " + fruta.cor)


// NEW e Construtor

// Função construtora:
function xicara (cor, forma, peso, capacidade) {
    this.cor = cor
    this.forma = forma
    this.peso = peso
    this.capacidade = capacidade
}
// usando o new:
const xicara1 = new xicara ("branca", "redonda", "53", "100")
const xicara2 = new xicara ("preta", "quadrada", "120", "200")

console.log(xicara1)
console.log(xicara2)


// Atividade: Refatorando a fruta criada anteriormente:

function fruta (nome, cor, peso, vitamina) {
    this.nome = nome
    this.cor = cor
    this.peso = peso
    this.vitamina = vitamina
}

const fruta1 = new fruta("maça", "vermelha", 180, "E")
const fruta2 = new fruta("banana", "amarela", 80, "D")

console.log(fruta1)
console.log(fruta2)

// Metodos

let quantidadeDeCaracteres = fruta1.nome.length

console.log(quantidadeDeCaracteres)
console.log("Cor em letras maisculas: " + fruta1.cor.toUpperCase())
console.log("Vitamina em letras minusculas: " + fruta1.vitamina.toLowerCase())

for (let propriedade in fruta1){
    
}