export class Entidade{
    
    constructor(){
        if(this.constructor == MenuAbstrato)
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        this.id = +new Date();
    }

    getId(){
        return this.id;
    }

    toString(){
        return `ID: ${this.id}\t`;
    }
}