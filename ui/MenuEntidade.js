import { MenuAbstrato } from "./MenuAbstrato.js";

export class MenuEntidade extends MenuAbstrato{

    constructor(){
        if(this.constructor == MenuAbstrato){
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        }
    }

    listar(){
        throw new Error("Metodo deve ser implementado\n");
    }

    adicionar(){
        throw new Error("Metodo deve ser implementado\n");
    }

    remover(){
        throw new Error("Metodo deve ser implementado\n");
    }

    /**
     * @override
     */
    executarOpcao(opcao){
        switch(opcao){
            case 0:
                return 0;
            
            case 1:
                listar();
                break;

            case 2:
                adicionar();
                break;

            case 3:
                remover();
                break;
            
            default:
                console.log("OPCAO INVALIDA\n");
        }

    }

    /**
     * @override
     */
    mostrarOpcoes(){
        console.log(
            "0 -> VOLTAR\n"+
            "1 -> LISTAR\n"+
            "2 -> ADICIONAR\n"+
            "3 -> REMOVER\n"
        );
    }
}