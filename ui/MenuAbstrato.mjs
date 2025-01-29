import readlineSync from 'readline-sync';

export class MenuAbstrato{

    constructor(){
        if(this.constructor == MenuAbstrato)
            throw new Error("Classes abstratas não podem ser instanciadas\n");
    }

    mostrarMenu(){
        var opcao = 0;
        
        do{
            console.log("\n\n");
            this.mostrarTitulo();
            this.mostrarOpcoes();
            opcao = this.executarOpcao(Number(readlineSync.question("INFORME A SUA OPCAO: \n")));
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