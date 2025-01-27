import { MenuEntidade } from './MenuEntidade.js';
import { DAOVenda } from '../Data/DAOVenda.js';
import { DAOProduto } from '../Data/DAOProduto.js';
import { Venda } from '../entidades/Venda.js';
//produto é usado sim, apenas nao explicitamente
import { Produto } from '../entidades/Produto.js';

export class MenuVenda extends MenuEntidade{

    constructor(){
        super();
        this.daoVenda = DAOVenda.getInstance();
        this.daoProduto = DAOProduto.getInstance();
    }

    /**
     * @override
     */
    mostrarTitulo(){
        console.log("MENU VENDAS");
    }

    /**
     * @override
     */
    listar(){
        console.log(this.daoVenda.toString());
    }

    /**
     * @override
     */
    adicionar(){
        venda = new Venda()
        let produto = null;

        qtde = 0;

        while(true){
            while(true){
                try{
                    produto = this.daoProduto.buscar(prompt("Digite o nome do produto: \n"));
                    qtde = Number(prompt("Digite a quantidade: \n"));
                    
                    if(produto == null || qtde <= 0)
                        throw new Error("Favor informar os dados corretamente\n");
                    else
                        break;
                } catch(err){
                    console.log(err.message);
                }
            }
                venda.adicionarItem(produto, qtde);
        
                maisItens = Number(prompt("Deseja adicionar outro produto à venda (1 - SIM/0 - NAO)? \n"));
        
                if(maisItens != 1)
                    break;
            
        }
        console.log("\n\nNOTA FISCAL\n" + venda.toString());

        this.daoVenda.adicionar(venda);
    }

    /**
     * @override
     */
    remover(){
        id = 0;

        while(true){

            try{
                id = Number(prompt("Digite a quantidade: \n"));

                if (id <= 0.0)
                    throw new Error("Favor informar os dados corretamente\n");
                else 
                    break;

            } catch(err) {
                console.log(err.message);
            }
        }
        this.daoVenda.remover(id);
    }
}