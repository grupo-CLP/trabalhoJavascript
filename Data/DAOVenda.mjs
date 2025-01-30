import { Venda } from '../entidades/Venda.mjs';
import { DAO } from './DAO.mjs';

export class DAOVenda{
    static #instance = new DAOVenda();
    static #dao = new DAO();

    /**
     * @returns {DAOVenda}
     */
    static getInstance(){
        return DAOVenda.#instance;
    }

    /**
     * @param {Venda} venda 
     * @returns {void}
     */
    adicionar(venda){
        DAOVenda.#dao.adicionar(venda);
    }

    /**
     * @param {Number} id 
     * @returns {}
     */
    buscar(id){
        return DAOVenda.#dao.buscar(id);
    }

    /**
     * @param {Number} id 
     */
    remover(id){
        DAOVenda.#dao.remover(id);
    }
    
    /**
     * @returns {String}
     */
    toString(){
        return DAOVenda.#dao.toString();
    }
}