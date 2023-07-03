function viajar(destino) {
    if (destino === 'Brasil') {
        console.log('Gire a la derecha');
    } else if (destino === 'Argentina') {
        console.log('Gire a la Izquierda');
    } else if (destino === 'Chile') {
        console.log("Pucha la wea' fome");
    } else {
        console.log('Camino incorrecto');
    }
}

//viajar('Marruecos');


function puedeManejar(edad) {
    if (edad >= 18) {
        console.log('Si puede');
    }else{
        console.log("Tai' muy chamaco");
    }
}

puedeManejar(46);