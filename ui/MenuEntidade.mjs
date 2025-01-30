import { MenuAbstrato } from "./MenuAbstrato.mjs";

export class MenuEntidade extends MenuAbstrato{

    constructor(){
        super();
        if(this.constructor == MenuEntidade)
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        this.id = +new Date();
    }

    /**
     * @returns {void}
     */
    listar(){
        throw new Error("Metodo deve ser implementado\n");
    }

    /**
     * @returns {void}
     */
    adicionar(){
        throw new Error("Metodo deve ser implementado\n");
    }

    /**
     * @returns {void}
     */
    remover(){
        throw new Error("Metodo deve ser implementado\n");
    }

    /**
     * @override
     * @param {Number} opcao 
     * @returns {Number}
     */
    executarOpcao(opcao){
        switch(opcao){
            case 0:
                return 0;
            
            case 1:
                this.listar();
                break;

            case 2:
                this.adicionar();
                break;

            case 3:
                this.remover();
                break;
            
            default:
                console.log("OPCAO INVALIDA\n");
        }

    }

    /**
     * @override
     * @returns {void}
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