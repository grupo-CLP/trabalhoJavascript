import { MenuEntidade } from "./MenuEntidade.js";

export class MenuProduto extends MenuEntidade{
    constructor(){
        // instanciar o DAO
    }

    mostrarTitulo(){
        console.log("MENU PRODUTOS");
    }

    listar(){
        //implementar dps
    }

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

            //add no banco de dados
        }
    }

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

        // remover do banco
    }
}