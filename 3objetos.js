// definición de las características de un buque para un sistema de rastreo y  monitorización de la flota mercante

var buque_mercante = {

    tipo : "Granelero",
    eslora: 250
    manga: 42
    puntal: 36
    tonelaje_bruto_GT: 50.000
    velocidad_crucero_kn: 20
    astillero_construccion: "SMG"
    
    derrota: function velocidad () {
        var posicion_x_ini;
        var posicion_y_ini;
        var posicion_x_fin;
        var posicion_y_fin;
        var tiempo_ini;
        var tiempo_fin;

        var velocidad_x = (((posicion_x_fin)-(posicion_x_ini))/((tiempo_fin)-(tiempo_ini)));
        var velocidad_y = (((posicion_y_fin)-(posicion_y_ini))/((tiempo_fin)-(tiempo_ini)));

        console.log(`El buque: ${this.tipo} se desplaza a una velocidad horizontal de: ${velocidad_x} nudos
        y vertical de; ${velocidad_y} nudos`);
    }
}


// control de stock en almacén de mobiliario

var mesa = {

    apoyo : "patas"
    material : "madera aglomerada"
    anchura : 100
    profundidad : 75
    altura : 80
    anchura_caja : 105
    profundidad_caja : 90
    altura_caja : 85
    calidad : "media"
    modelo : "sfeg_175"

unidades_stock : function stock_sfeg_175 () {

    var unidades_ini_sfeg_175;
    var unidades_vendidas_sfeg_175;
    var unidades_fabricadas_sfeg_175;

    console.log(unidades_ini_sfeg_175 + unidades_fabricadas_sfeg_175 - unidades_vendidas_sfeg_175);
    
}


// definición de bicicleta para consulta de especificaciones en página web

var bicicleta = {

    tipo : "mountain bike"
    modelo : "orbea_xtreM"
    orquilla : "hidráulica"
    suspension_trasera : true
    frenos : "disco_hidráulicos"
    propulsion_electrica : false
    precio: 2250
    

}