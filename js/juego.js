/*
    JUEGO: Piedra, Papel, Tijera
    ----------------------------
*/

// VARIABLES
//piedra = 0, papel = 1, tijera = 2
var elementos_del_juego = ["piedra", "papel", "tijera"];


// FUNCIONES

fuction game(jugador01, jugador02) {
    // comprobar empate
    if(jugador01 == jugador02){
        console.log(`EMPATE por ${elementos_del_juego[jugador01]}`);
    }
    // ganador jugador01
    else if (jugador01 == 0 && jugador02 == 2 || jugador01 == 1 && jugador02 == 0 
            || jugador01 == 2 && jugador02 == 1) {
        console.log(`GANA JUGADOR01, porque ${elementos_del_juego[jugador01]} gana a 
        ${elementos_del_juego[jugador02]}`);
    }
        // || significa "o"

        // ganador jugador01
    else { 
    console.log(`GANA JUGADOR02, porque ${elementos_del_juego[jugador02]} gana a 
    ${elementos_del_juego[jugador01]}`);
}

}


// VER en Consola
console.log("piedra \= 0, papel \= 1, tijera \=2");