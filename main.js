// Ejercicio Nº 1
// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"

console.log("-----------------Ejercicio 1-----------------");


function alzeimer(nombre){

    switch(nombre) {
        case "Ricardo": console.log(nombre + " es tu tio");
            break;
        case "Roberto": console.log(nombre + " es tu hermano");
            break;
        case "Argentina": console.log(nombre + " es el pais al que perteneces");
            break;
        case "Dinamita": console.log(nombre + " es tu gato");
            break;
        default: console.log(nombre + " no es nada");
    }
}

alzeimer("Ricardo");
alzeimer("Roberto");
alzeimer("Argentina");
alzeimer("Dinamita");
alzeimer("Ramon");


// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100

console.log("-----------------Ejercicio 2-----------------");

const compararNumeros = (num1,num2) => {
    if(num1 == 100 || num2 == 100 || num1+num2 == 100){
        return true;
    }
    return false;
}

console.log(compararNumeros(1,5));
console.log(compararNumeros(50,50));
console.log(compararNumeros(100,5));

// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"

console.log("-----------------Ejercicio 3-----------------");

function extension(string){
    r = string.split(".");
    if(r.length < 2){
        return "No tiene extension";
    }
    return "."+r[1];
}

console.log(extension("index.html"));
console.log(extension("indexhtml"));

// Ejercicio Nº4
// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8
// (faren- 32) * 5 / 9;
// * 9 / 5 + 32;

console.log("-----------------Ejercicio 4-----------------");

const aCentigrados = temperatura => (temperatura - 32)* 5/9;
const aFarenheit = temperatura => (temperatura * 9) / (5 + 32);

console.log(aCentigrados(10));
console.log(aFarenheit(10));


/*  Ejercicio Nº5
    Crear una función que muestre por consola la fecha y hora con el siguiente formato:
    Hoy es : Miercoles
    Hora actual: 10:34
*/

console.log("-----------------Ejercicio 5-----------------");

function fechaYhora(){
    let hora = new Date();
    var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    console.log( `Hoy es : ${dias[hora.getDay()]}
Hora Actual: ${hora.getHours()}:${hora.getMinutes()}`);
}

fechaYhora();