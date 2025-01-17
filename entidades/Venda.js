import { Totalizavel } from "./Totalizavel.js";
import { Entidade } from "./Entidade.js"
//falta MUCHA coisa!!!
export class Venda extends Entidade{
    constructor(){
        this.dataHora = new Date().toLocaleString();
        this.itens = [];
    }
}

//isso aqui ta errado inclusive
Totalizavel(Venda);