import { Venda } from '../entidades/Venda.mjs';
import { DAO } from './DAO.mjs';

export class DAOVenda{
    static #instance = new DAOVenda();
    static #dao = new DAO();

    static getInstance(){
        return DAOVenda.#instance;
    }

    adicionar(venda){
        DAOVenda.#dao.adicionar(venda);
    }

    buscar(id){
        return DAOVenda.#dao.buscar(id);
    }

    remover(id){
        DAOVenda.#dao.remover(id);
    }

    toString(){
        return DAOVenda.#dao.toString();
    }
}