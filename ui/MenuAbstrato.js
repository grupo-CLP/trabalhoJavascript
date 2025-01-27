export class MenuAbstrato{

    constructor(){
        if(this.constructor == MenuAbstrato){
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        }
    }

    mostrarMenu(){
        let opcao = 0;
        
        do{
            console.log("\n\n");
            mostrarTitulo();
            mostrarOpcoes();
            opcao = executarOpcao(Number(prompt("INFORME A SUA OPCAO: \n")));
        }while(opcao != 0);
    }


    executarOpcao(opcao){
        throw new Error("Metodo deve ser implementado\n");
    }

    mostrarOpcoes(){
        throw new Error("Metodo deve ser implementado\n");
    }

    mostrarTitulo(){
        throw new Error("Metodo deve ser implementado\n");
    }
}