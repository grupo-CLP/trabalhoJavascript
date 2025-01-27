import { MenuEntidade } from "./MenuEntidade.js";
import { DAOProduto } from "../Data/DAOProduto.js";
import { Produto } from "../entidades/Produto.js";


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
        nome = null;
        valor = 0.0;

        while(true){
            try{
                nome = prompt("Digite o nome: ");

                valor = Number(prompt("Digite o valor: "));

                if(nome ==  null || nome == "" || valor <= 0.0)
                    throw new Error("Favor informar os dados corretamente\n");
                else
                    break;
            }catch(err){
                console.log(err.message);
            }

            this.dao.adicionar(new Produto(nome, valor));
        }
    }

    /**
     * @override
     */
    remover(){
        nome = null;

        while(true){
            try{
                nome = prompt("Digite o nome: ");

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