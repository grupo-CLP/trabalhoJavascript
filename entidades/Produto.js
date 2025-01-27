import { Entidade } from "./Entidade.js"

export class Produto extends Entidade{
    constructor(nome, valor){
        if(typeof nome === undefined && valor === undefined){
            super();
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
    
    toString() {
        return `${super.toString}Nome: ${this.nome}\tValor: ${this.valor.toFixed(2)}`;
    }
}