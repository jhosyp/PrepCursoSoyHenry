/*

// AND &&
function mayorYMenor(num) {
    if (num > 5 && num < 10 && num%2===0) {
        console.log(true);
    }else{
        console.log(false);
    }
}


mayorYMenor(2);
mayorYMenor(7);
mayorYMenor(6);

// OR || 
function operadorOr(str) {
    if (str === 'Jhosy' || str.length < 3) {
        console.log(true);
    }else{
        console.log(false);
    }
}

operadorOr('Jhosy');
operadorOr('Mia');


// NOT !
function negacion(permiso) {
    if (permiso === true) {
        console.log('EJOOOOOOO!!!!');
    }else if (!permiso) {
        console.log('Chale');
    }else{
        console.log("Puta la wea'");
    }
}

negacion(true);
negacion(false);
negacion('No se');
*/

//Combo
function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) {
        console.log('Okis');
    }else{
        console.log('Muy mal');
    }
}

condicionCompleja(6);
condicionCompleja(16);
condicionCompleja(3);