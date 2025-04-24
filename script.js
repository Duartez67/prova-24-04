class personagem {
constructor (mana, vida, forca) {
    this.mana = mana,
    this.força = forca,
    this.vida = vida 
}
Atacar(){
    console.log("Ataque")
}
defender(){
    console.log("Defesa")
}


Magia(){
    console.log("Magia")
}
defender(){
    console.log("Defesa")
}


Atirar(){
    console.log("Atirar")
}
defender(){
console.log("Defesa")
}


}
class guerreiro extends personagem {
constructor (mana, vida, forca){
    super (mana, vida, forca )
    } 
atacar(){
    console.log("Atacando")
}
defender(){
    console.log("Defendendo")
}
 }
class mago extends personagem {
    constructor (mana, vida, forca){
        super (mana, vida, forca )
    }
    usarMagia(){
        console.log("Usando Magia")
     }
        defender(){
            console.log("Defendendo")
        }
    }


    class arqueiro extends personagem {
        constructor (mana, vida, forca){
            super (mana, vida, forca )
        }
        atirar(){
            console.log("Atirando")
        }
        Defender(){
            console.log("Defendendo")
        }

}