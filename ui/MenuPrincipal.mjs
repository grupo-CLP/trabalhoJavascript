import { MenuAbstrato } from "./MenuAbstrato.js";
import { MenuProduto } from "./MenuProduto.mjs";
import { MenuVenda } from './MenuVenda.mjs';

export class MenuPrincipal extends MenuAbstrato{
    constructor(){
        super();
        this.menuProduto = new MenuProduto();
        this.menuVenda = new MenuVenda();
    }

    /**
     * @override
     */
    executarOpcao(opcao){
        switch(opcao){
            case 0:
                return 0;

            case 1:
                menuProduto.mostrarMenu(scanner);
                break;

            case 2:
                menuVenda.mostrarMenu(scanner);
                break;

            default:
                console.log("OPCAO INVALIDA\n");
        }

        return 1;
    }

    /**
     * @override
     */
    mostrarOpcoes(){
        console.log((
            "0 -> FECHAR PROGRAMA\n" +
            "1 -> PRODUTO\n" +
            "2 -> VENDA\n"));
    }

    /**
     * @override
     */
    mostrarTitulo(){
        console.log("MENU PRINCIPAL\n")
    }
}