class personagem {
    #vida
    constructor (mana, vida, forca) {
    this.mana = mana,
    this.forca = forca,
    this.#vida = vida 
}
getVida(){
    return this.#vida
}
setVida(novavida){
    this.#vida = novavida;
}
Atacar(){
    console.log("Ataque")
    const dano = this.forca;
    const vidaatual = onpointerenter.getVida();
    onpointerenter.setVida(vidaatual - dano);
        console.log(`${this.constructor.name}atacou causando ${dano}de dano. vida do oponente agora é ${onpointerenter.getVida()}.`);
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