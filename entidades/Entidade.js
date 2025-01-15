export class Entidade{
    constructor(){
        this.id = +new Date();
    }

    getId(){
        return this.id;
    }

    toString(){
        return `ID: ${this.id}\t`;
    }
}