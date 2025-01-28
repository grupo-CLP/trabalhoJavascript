import { Totalizavel } from "./Totalizavel.mjs";
import { Entidade } from "./Entidade.mjs";
//falta MUCHA coisa!!!

export class Venda extends Entidade{

    ItemVenda = class ItemVenda{
        constructor(produto, qtd){
            this.produto = produto;
            this.qtd = qtd;
            this.valor = produto.getValor();
        }

        getProduto(){
            return this.produto;
        }

        toString(){
            return `${this.produto.getNome()} ${this.valor} x ${this.qtd} ${this.valor * this.qtd}`;
        }
    }

    constructor(){
        super();
        Totalizavel(Venda);
        this.dataHora = new Date().toLocaleString();
        this.itens = [];
    }

    getDataHora(){
        return this.dataHora;
    }

    getItens(){
        return this.itens;
    }

    adicionarItem(produto, qtd){
        this.itens.push(new this.ItemVenda(produto, qtd));
    }

    removerItem(posicao_ou_nome){
        if(typeof posicao_ou_nome === 'number')
            this.itens.splice(posicao_ou_nome, 1);

        /**
         * @overload
         */
        if(typeof posicao_ou_nome === 'string'){
            this.itens = this.itens.filter(i => i.getProduto.getNome().toLowerCase() !== posicao_ou_nome.toLowerCase());
        }        
    }

    /**
     * @override
     */
    toString(){
        stringBuilder = `Data-Hora: ${super.toString()}`;

        for(let itemVenda of this.itens)
            stringBuilder += `\n ${itemVenda.toString()}`;
        stringBuilder += `\nTOTAL ${total()}`;

        return stringBuilder;
    }

    /**
     * @override
     */
    total(){
        t = 0.0;

        for(let itemVenda of this.itens)
            t += itemVenda.valor * itemVenda.qtd
        
        return t;
    }


}