class personagem {
constructor (mana, vida, forca) {
    this.mana = mana,
    this.força = forca,
    this.vida = vida 
}

}
class guerreiro extends personagem {
constructor (mana, vida, forca){
    super (mana, vida, forca )
    } 
atacar(){
    console.log("Atacando")
}

 }
class mago extends personagem {
    constructor (mana, vida, forca){
        super (mana, vida, forca )
    }
    usarMagia(){
        console.log("UsandoMagia")
     }
        
    }


    class arqueiro extends personagem {
        constructor (mana, vida, forca){
            super (mana, vida, forca )
        }
        atirar(){
            console.log("Atirando")
        }

}