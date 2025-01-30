/**
 * @param {Function} classe
 * @returns {void}
 */
export function Totalizavel(classe){
    if(typeof classe.prototype.total !== "function")
        throw new Error("Objeto nao implementa função 'total()' ");
}