import { DAO } from "./DAO.js";

export class DAOProduto{
    static #instance = new DAOProduto();
    static #dao = new DAO();

    getInstance(){
        return DAOProduto.#instance;
    }

    adicionar(produto){
        DAOProduto.#dao.adicionar(produto);
    }

    buscar(id_nome){
        if(typeof id_nome === 'number')
            return DAOProduto.#dao.buscar(id);
        if(typeof id_nome === 'string')
            for(let produto of DAOProduto.#dao.getDados())
                if (produto.getNome() == id_nome)
                    return produto
        return null;
    }

    remover(id_nome){
        if(typeof id_nome === 'number')
            DAOProduto.#dao.remover(id_nome);
        if(typeof id_nome === 'string'){
            for(let produto of this.dao.getDados()){
                if(produto.getNome() == id_nome)
                    DAOProduto.#dao.remover(id_nome);
            }
            return null;
        }
    }

    toString(){
        return DAOProduto.#dao.toString();
    }
}