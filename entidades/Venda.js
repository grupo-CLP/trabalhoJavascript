import { Totalizavel } from "./Totalizavel.js";
import { Entidade } from "./Entidade.js"

export class Venda extends Entidade{
    constructor(){
        this.dataHora = new Date().toLocaleString();
        this.itens = [];
    }
}

Totalizavel(Venda);