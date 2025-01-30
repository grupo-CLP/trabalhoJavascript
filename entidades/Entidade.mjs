export class Entidade{
    
    constructor(){
        if(this.constructor == Entidade)
            throw new Error("Classes abstratas não podem ser instanciadas\n");
        this.id = +new Date();
    }

    /**
     * @returns {Number}
     */
    getId(){
        return this.id;
    }

    /**
     * @returns {String}
     */
    toString(){
        return `ID: ${this.id}\t`;
    }
}