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
     */
    mostrarTitulo(){
        console.log("MENU PRODUTOS");
    }

    /**
     * @override
     */
    listar(){
        console.log(this.dao.toString());
    }

    /**
     * @override
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
     */
    remover(){
        var nome = null;

        while(true){
            try{
                nome = readlineSync.question("Digite o nome: ");

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