
class Carro {
    constructor(modelo, marca, ano, cor, preco, ipvaPago, revisoesEmDia){
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.cor = cor
        this.preco = parseFloat(preco)
        this.ipvaPago = ipvaPago
        this.revisoesEmDia = revisoesEmDia
    }

    calcularIpva() {
        let percentualIpva = 0.03
        let precoIpva = this.preco * percentualIpva
        console.log(`O preço do ipva do carro ${this.marca} ${this.modelo} é R$ ${precoIpva}`)
    }

    verificarIpvaPago() {
        if (this.ipvaPago == true) {
            console.log("O IPVA está pago.")
        } else {
            console.log("O IPVA não está pago.")
        }
    }

    verificarRevisoesEmDia() {
        if (this.revisoesEmDia == true) {
            console.log(`O carro ${this.modelo} da marca ${this.marca} está com todas as revisões em dia.`)
        } else {
            console.log(`O carro ${this.modelo} da marca ${this.marca} precisa de revisão pois nem todas foram feitas.`)
        }
    }

}

let carro1 = new Carro ("Kicks", "Nissan", 2017, "Prata", 81000, true, true)
let carro2 = new Carro ("Focus", "Ford", 2016, "Branco", 62000 ,true, false)

console.log("-----------------------------Kicks-----------------------------------------")

for (const propriedade in carro1) {
    console.log(carro1[propriedade])
}

carro1.verificarIpvaPago()
carro1.verificarRevisoesEmDia()
carro1.calcularIpva()


console.log("-----------------------------Focus-----------------------------------------")

for (const propriedade in carro2) {
    console.log(carro2[propriedade])
}

carro2.verificarIpvaPago()
carro2.verificarRevisoesEmDia()
carro2.calcularIpva()

