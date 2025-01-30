import { Entidade } from "../entidades/Entidade.mjs";

export class DAO{
    constructor(){
        this.dados = [];
    }

    /**
     * @returns {Entidade[]}
     */
    getDados(){
        return this.dados;
    }
    
    /**
     * @param {Entidade[]} dados
     */
    setDados(dados){
        this.dados = dados;
    }

    /**
     * @param {Entidade} entidade 
     * @returns {void}
     */
    adicionar(entidade){
        if(!(entidade instanceof Entidade))
            throw new Error("entidade passada nao extends classe Entidade");
        this.dados.push(entidade);
    }

    /**
     * 
     * @param {Number} id 
     * @returns {Entidade[]}
     */
    buscar(id){
        for(var dado of this.dados)
            if(dado.getId() == id)
                return dado;
        return null;
    }

    /**
     * @param {Number} id 
     * @returns {void}
     */
    remover(id){
        this.dados = this.dados.filter(item => item.getId() !== id);
    }

    /**
     * @override
     * @returns {String}
     */
    toString(){
        var string = "";
        for(var dado of this.dados)
            string += `\n${dado.toString()}`;

        return string;
    }
}