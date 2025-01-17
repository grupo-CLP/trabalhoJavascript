import { MenuEntidade } from './MenuEntidade.js';
import { DAOVenda } from '../Data/DAOVenda.js';
import { DAOProduto } from '../Data/DAOProduto.js';
import { Venda } from '../entidades/Venda.js';
import { Produto } from '../entidades/Produto.js';

export class MenuVenda extends MenuEntidade{

    constructor(){
        super();
        daoVenda = DAOVenda.getInstance();
        daoProduto = DAOProduto.getInstance();
    }

    mostrarTitulo(){
        console.log("MENU VENDAS");
    }

    listar(){
        console.log(this.daoVenda.toString());
    }

    adicionar(){
        venda = new Venda()
        let produto = null;

        qtde = 0;

        while(true){
            while(true){
                try{
                    produto = daoProduto.buscar(prompt("Digite o nome do produto: \n"));
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

        daoVenda.adicionar(venda);
    }

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
        daoVenda.remover(id);
    }
}