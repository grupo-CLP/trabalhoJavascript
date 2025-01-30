import { Entidade } from "./Entidade.mjs"

export class Produto extends Entidade{
    /**
     * @param {String} nome 
     * @param {Number} valor 
     */
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

    /**
     * @returns {String}
     */
    getNome(){
        return this.nome;
    }

    /**
     * @returns {Number}
     */
    getValor() {
        return this.valor;
    }
    
    /**
     * @param {String} nome
     * @returns {void} 
     */
    setNome(nome) {
        this.nome = nome;
    }
    
    /**
     * @param {Number} valor 
     * @returns {void}
     */
    setValor(valor) {
        this.valor = valor;
    }
    
    /**
     * @override
     * @returns {String}
     */
    toString() {
        return `${super.toString()}Nome: ${this.nome}\tValor: ${this.valor.toFixed(2)}`;
    }
}