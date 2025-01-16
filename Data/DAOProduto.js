import { DAO } from "./DAO.js";

class DAOProduto{
    static #instance = new DAOProduto();
    static #dao = new DAO();
}

console.log(DAOProduto.instance);