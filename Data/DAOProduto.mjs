import { Produto } from "../entidades/Produto.mjs";
import { DAO } from "./DAO.mjs";

export class DAOProduto{
    static #instance = new DAOProduto();
    static #dao = new DAO();

    /**
     * @returns {DAOProduto}
     */
    static getInstance(){
        return DAOProduto.#instance;
    }

    /**
     * @param {Produto} produto 
     */
    adicionar(produto){
        DAOProduto.#dao.adicionar(produto);
    }

    /** 
     * @param {Number | String} id_nome
     * @returns {Produto}
     */
    buscar(id_nome){
        if(!isNaN(parseFloat(id_nome)))
            return DAOProduto.#dao.buscar(id_nome);
        else
            for(let produto of DAOProduto.#dao.getDados())
                if (produto.getNome() == id_nome)
                    return produto;
        return null;
    }

    /**
     * @param {Number | String} id_nome
     * @returns {void}
     */
    remover(id_nome){
        if(!isNaN(parseFloat(id_nome)))
            DAOProduto.#dao.remover(id_nome);
        else
            DAOProduto.#dao.setDados(DAOProduto.#dao.getDados().filter(i => i.getNome().toLowerCase() !== id_nome.toLowerCase()));
    }

    /**
     * @returns {String}
     */
    toString(){
        return DAOProduto.#dao.toString();
    }
}