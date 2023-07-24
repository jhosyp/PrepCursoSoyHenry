/**
Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] > 3) {
            arregloModificado.push(false)
        }else{
            arregloModificado.push(this[i])
        } 
    }
    return arregloModificado;
};
var arreglo = [4,5,6,1,2,3];
var newArreglo = arreglo.mayoresQueTres();

console.log(newArreglo);
 * 
 */

class Latam{
    constructor(){
        this.paises = [];
    };    
}

Latam.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
};

let continente = new Latam();
continente.agregarPais('México');
console.log(continente.paises);