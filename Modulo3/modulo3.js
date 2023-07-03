//Tipos de variables comunes 
// NUmero 
var num = 30;
var num1 = 3.44;
var num2 = -45;

// String 
var holis = "holis";

// Booleanos 
var hambre = true;
var lleno = false;

// Operadores
//Suma 
console.log(5 + 3);

// Resta 
console.log(15 - 5);

//Multiplicacion
console.log(3 * 4);

// Division 
console.log(30/2);

// Resto
console.log(95 % 4);

//Presedencia 
console.log(3 + 5 * 7 - 8);
console.log((3 + 5) * 5 - 9);

//Union de String 
console.log("Hola" + "Sandra");


///// Operadores de comparacion 
//Mayor que 
console.log(5 > 1);

//Menor que 
console.log(6 < 3);

//Mayor o igual / Menor o Igual
console.log(4 >= 6);
console.log(4 <= 6);

//Igual 
console.log(8 == 8);

// Distinto 
console.log(8 != 8);

// Exactamente igual 
console.log(8 === 8); // si
console.log(8 === "8");

////// Funciones 
function ejemplo(nombre) {
    console.log(nombre); // solo sirve de ayuda, en un codigo completo y rpo no debe estar 
    return nombre;
    console.log(nombre); // NO aparece porque est adespues del return
}

//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 

//Función: sumaTres
var sumaTres = (x) => {
    return x + 3;
  }
