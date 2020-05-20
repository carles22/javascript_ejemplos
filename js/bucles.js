// Bucle FOR

for (var i = 0; i < 20; i++) {
    console.log("Hola");
}


// *********************************************************


var coches = ["Opel", "Peugeot", "Seat", "Toyota"];

function marcasCoche (coches/* parametro */) {
    console.log(` este fue uno de mis coches, ${coches}`);

}

for (var i = 0, i < coches.length; i++) {
    marcasCoche(coches[i]);

}

// *********************************************************

// función FOR para los arrays

for (var coche of coches) {
    // coche = "Opel"
    marcasCoche(coche);
}

// *********************************************************

/*Operador Ternario, que se utiliza con el IF (hace una reducción de la función if para 
    que esta se pueda meter dentro de una variable) */

var numero = 10;

var resultado = numero === 10 ? "Soy un diez" : "No soy un diez";

// *********************************************************

//WHILE

var edad = 15;

while (edad < 18) {
    console.log("Eres menor de edad");

}
// En este caso anterior, el bucle se ejecutaría infinitamente hasta que la memoria ram petara


var coches = ["Opel", "Peugeot", "Seat", "Toyota"];

function marcasCoche (coches/* parametro */) {
    console.log(` este fue uno de mis coches, ${coches}`);

while(coches.lenght > 0) {  
    var garaje = coches.shift();
    marcasCoche(garaje);

}

// Otro ejemplo utilizando "i" como contador
while(coches.lenght > 1) {  
    var garaje = coches [i];
    marcasCoche(garaje);

    i++;

}


// DO WHILE

do {
    i++;
    console.log("Hola");
} while ( i < 5);


