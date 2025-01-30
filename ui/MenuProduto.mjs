import { MenuEntidade } from "./MenuEntidade.mjs";
import { DAOProduto } from "../Data/DAOProduto.mjs";
import { Produto } from "../entidades/Produto.mjs";
import readlineSync from 'readline-sync';


export class MenuProduto extends MenuEntidade{
    
    constructor(){
        super();
        this.dao = DAOProduto.getInstance();
    }

    /**
     * @override
     * @returns {void}
     */
    mostrarTitulo(){
        console.log("MENU PRODUTOS");
    }

    /**
     * @override
     * @returns {void}
     */
    listar(){
        console.log(this.dao.toString());
    }

    /**
     * @override
     * @returns {void}
     */
    adicionar(){
        var nome = "";
        var valor = 0.0;

        while(true){
            try{
                nome = readlineSync.question("Digite o nome: ");

                valor = Number(readlineSync.question("Digite o valor: "));

                if(nome ==  null || nome == "" || valor <= 0.0)
                    throw new Error("Favor informar os dados corretamente\n");
                else
                    break;
            }catch(err){
                console.log(err.message);
            }
        }
        this.dao.adicionar(new Produto(nome, valor));
    }

    /**
     * @override
     * @returns {void}
     */
    remover(){
        var nome = null;

        while(true){
            try{
                nome = readlineSync.question("Digite o nome ou ID: ");

                if(nome == null || nome == "")
                    throw new Error("Favor informar o nome corretamente\n");
                else
                    break;
            }catch(err){
                console.log(err.message);
            }
        }
        this.dao.remover(nome);
    }
}