var objetos_ppt = ["piedra", "papel", "tijeras"];

function juego (jugador1, jugador2) {
    switch(true){

    case jugador1 == jugador2:
        console.log(`El jugador 1 ha empatado con ${objetos_ppt[jugador2]} con el jugador 2`);
        break;

    case jugador1 == 0 && jugador2 ==2:
    case jugador1 == 1 && jugador2 ==0:
    case jugador1 == 2 && jugador2 ==1:
        console.log(`El jugador 1 ha ganado con ${objetos_ppt[jugador1]} a ${objetos_ppt[jugador2]} del jugador2`);
        break;

    default:
        console.log(`El jugador 2 ha ganado con ${objetos_ppt[jugador2]} a ${objetos_ppt[jugador1]} del jugador1`);

}
}