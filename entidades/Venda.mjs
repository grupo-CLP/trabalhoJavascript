import { Totalizavel } from "./Totalizavel.mjs";
import { Entidade } from "./Entidade.mjs";

export class Venda extends Entidade{

    ItemVenda = class ItemVenda{
        /**
         * @param {Produto} produto
         * @param {Number} qtd
         */
        constructor(produto, qtd){
            this.produto = produto;
            this.qtd = qtd;
            this.valor = produto.getValor();
        }
        
        /**
         * @returns {Produto}
         */
        getProduto(){
            return this.produto;
        }

        /**
         * @returns {String}
         */
        toString(){
            return `${this.produto.getNome()} ${this.valor} x ${this.qtd} ${this.valor * this.qtd}`;
        }
    }

    constructor(){
        super();
        this.dataHora = new Date().toLocaleString();
        this.itens = [];
        Totalizavel(Venda);
    }

    /**
     * @returns {String}
     */
    getDataHora(){
        return this.dataHora;
    }

    /**
     * @returns {ItemVenda[]}
     */
    getItens(){
        return this.itens;
    }

    /**
     * @param {Produto} produto
     * @param {Number} qtd
     * @returns {void}
     */
    adicionarItem(produto, qtd){
        this.itens.push(new this.ItemVenda(produto, qtd));
    }

    /**
     * @param {Number | String} posicao_ou_nome
     * @returns {void}
     */
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
     * @returns {String}
     */
    toString(){
        var stringBuilder = `${super.toString()} Data-Hora: ${this.dataHora}`;

        for(var itemVenda of this.itens)
            stringBuilder += `\n ${itemVenda.toString()}`;
        stringBuilder += `\nTOTAL ${this.total()}`;

        return stringBuilder;
    }

    /**
     * @override
     * @returns {Number}
     */
    total(){
        var t = 0.0;

        for(var itemVenda of this.itens)
            t += itemVenda.valor * itemVenda.qtd;
        
        return t;
    }


}