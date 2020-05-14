
// IF

var tiempo = "sol";

if(tiempo == "sol") {
    console.lot("Buenos días")
}else if (tiempo == "nublado" ) {
    console.log("Está nublado, no salgas a la calle!")
} else {
    console.log("Buenas noches")
}

//cuidado que aunque se cumpla una condición previa, el resto de else if o else se ejecutan

// SWITCH

var tiempo = "sol";

switch (tiempo) {
    case "sol":
        console.log("Buenos días");
        break;
    case "nublado":
        console.log("No salgas a la calle");
        break;
    case "luna":
        console.log("Buenas noches");
        break;
     
}

switch (tiempo) {
    case "sol" && "tarde":
        console.log("Buenos días");
        break;
    case "nublado":
        console.log("No salgas a la calle");
        break;
    case "luna":
        console.log("Buenas noches");
        break;
        //si ninguno de los anteriores caso es correcto, se puede insertar un valor por defecto (es opcional)
    default:
        console.log("Estamos en Urano (o error)");
}

// ARRAY

var mascotas = ["perro", "gato","serpiente"];

var mascotas_plus =[
    "perro", 4, "bobby"
    "gato", 12, "misha"

];

var nombre = mascotas_plus.index0f("misha");
// resultado 5
var edad = mascotas_plus[nombre - 1]; //mascotas_plus[4] //12
var raza = mascotas_plus[nombre -2];  //mascotas_plus[3] //"gato"






