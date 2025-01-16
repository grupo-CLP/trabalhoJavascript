import { MenuEntidade } from './MenuEntidade.js';

export class MenuVenda extends MenuEntidade{

    constructor(){
        //instanciar DAOs
    }

    mostrarTitulo(){
        console.log("MENU VENDAS");
    }

    listar(){
        //implementar dps
    }

    adicionar(){
        //instanciar uma venda
        produto == null;

        qtde = 0;

        while(true){
            try{
                //produto = daoProduto.buscar(prompt("Digite o nome do produto: \n"));
                qtde = Number(prompt("Digite a quantidade: \n"));
                
                if(produto == null || qtde <= 0)
                    throw new Error("Favor informar os dados corretamente\n");
                else
                    break;
            } catch(err){
                console.log(err.message);
            }
            // add venda no banco
    
            maisItens = Number(prompt("Deseja adicionar outro produto à venda (1 - SIM/0 - NAO)? \n"));
    
            if(maisItens != 1)
                break;
        }

        // printar nota fiscal com venda.toString()

        //add venda ao banco
    }

    remover(){
        
    }
}