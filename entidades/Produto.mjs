import { Entidade } from "./Entidade.mjs"

export class Produto extends Entidade{
    constructor(nome, valor){
        super();
        if(nome === undefined && valor === undefined){
            this.nome = "";
            this.valor = 0.0;
        }else if (typeof nome === "string" && typeof valor === "number"){
            this.nome = nome;
            this.valor = valor;
        } else {
            throw new Error("Invalid arguments passed to constructor");
        }
    }

    getNome(){
        return this.nome;
    }

    getValor() {
        return this.valor;
    }
    
    setNome(nome) {
        this.nome = nome;
    }
    
    setValor(valor) {
        this.valor = valor;
    }
    
    /**
     * @override
     */
    toString() {
        return `${super.toString()}Nome: ${this.nome}\tValor: ${this.valor.toFixed(2)}`;
    }
}