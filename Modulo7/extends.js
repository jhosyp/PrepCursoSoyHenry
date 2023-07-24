class Person { 
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    };

    saludar(){ 
        console.log('Hola mi nombre es ' + 
        this.nombre + 
        ' y tengo ' + 
        this.edad + 
        ' años.');
    };
};

let marcos = new Person('Marcos', 25);
marcos.saludar();

class Programador extends Person{
    constructor(nombre, edad, experiencia){
        super(nombre, edad);
        this.experiencia = experiencia;
    };

    codear(){
        console.log('Hola soy ' + 
        this.nombre + 
        ' y tengo ' + 
        this.experiencia + 
        ' años de experiencia');
    }
}

let paola = new Programador('Paola', 24, 5);
paola.codear();


