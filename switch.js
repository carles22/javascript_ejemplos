

var objetos_ppt = ["piedra", "papel", "tijeras"]


function juego (jugador_1, jugador_2) {

    switch (jugador_1,jugador_2) {

    case jugador_1 == jugador_2:
        console.log(`El jugador 1 ha empatado con el jugador 2 al haber sacado ambos ${objetos_ppt[jugador_1]}`);
        break;

    case jugador_1 == 0 && jugador_2 == 2 || jugador_1 == 1 && jugador_2 == 0 || jugador_1 == 2 && jugador_2 == 1:
        console.log(`El jugador 1 gana con ${objetos_ppt[jugador_1]} a ${objetos_ppt[jugador_2]} del jugador 2`);
        break;

    default
        console.log(`El jugador 2 gana con ${objetos_ppt[jugador_1]} a ${objetos_ppt[jugador_2]} del jugador 1`);
      
}
}
