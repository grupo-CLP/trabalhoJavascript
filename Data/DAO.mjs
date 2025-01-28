import { Entidade } from "../entidades/Entidade.mjs";

export class DAO{
    constructor(){
        this.dados = [];
    }

    getDados(){
        return this.getDados;
    }

    adicionar(entidade){
        if(!(entidade instanceof Entidade))
            throw new Error("entidade passada nao extends classe Entidade");
        this.dados.push(entidade);
    }

    buscar(id){
        for(let dado of this.dados)
            if(dado.getId() == id)
                return dado;
        return null;
    }

    remover(id){
        this.dados = this.dados.filter(item => item.getId == id);
    }

    /**
     * 
     * @override
     */

    toString(){
        string = "";
        for(let dado of this.dados)
            string += `\n${dado.toString()}`;

        return string;
    }
}