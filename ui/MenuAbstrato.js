export class MenuAbstrato{

    constructor(){
        if(this.constructor == MenuAbstrato){
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        }
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

    mostrarMenu(){
        let opcao = 0;

        do{
            console.log("\n\n");
            mostrarTitulo();
            mostrarOpcoes();
            console.log("INFORME A SUA OPCAO: \n");
            opcao = executarOpcao();
        }while(opcao != 0);
    }
}