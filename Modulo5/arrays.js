/////// Arrays 
// para guardar y gestionar info 
/*
var listaCompras = ['Tomate', 'Lechuga', 'Zanahoria'];

var listaDeCompras = [];

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

console.log(listaCompras);
console.log(listaDeCompras);

console.log(listaCompras.length);
*/
/*
var colores = ['amarillo', 'azul'];
//añadir al ultimo
colores.push('rojo');

//añadir al principio
colores.unshift('verde');

//eliminar el ultimo
colores.pop();

//eliminar el primero
colores.shift();


console.log(colores);
*/

/*
var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
var quienEsta = pintores.includes('Juan');
console.log(quienEsta);
*/

/*
var numeros = [ 7, 6, 8, 9, 10];
var cumpleCondicion = numeros.every((num) =>{ //todos cumplen la condicion?
    return num > 5;
});

console.log(cumpleCondicion);
*/

/*
var palabra = 'Joshy'
var palabraSeparada = palabra.split(''); //Separa
console.log(palabraSeparada);

palabraSeparada.pop();
palabraSeparada.push('i')
console.log(palabraSeparada);

palabraSeparada.shift();
palabraSeparada.unshift('Y');
console.log(palabraSeparada);

palabraJunta = palabraSeparada.join(''); //Une
console.log(palabraJunta);

palabra = palabraJunta;
console.log(palabra);
*/

var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num));
/*
numeros.forEach((num) => { //Recorre el arreglo y realiza una accion en cada elemento
    if (num === 3) {
        console.log(num);
    }
});
*/
var masUno = numeros.map(num => {return num + 1});  // recorre el arreglo, raliza una accion en cada elemento y crea un arrey nuevo con las modificaciones
console.log(masUno);
