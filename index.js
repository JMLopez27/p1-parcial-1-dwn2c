//crear una clase con un molde
let disco = new Disco();

//validacion de el nombre del disco
function validarString(msg){
    let str;
    do{
        str = prompt(msg).trim();
        //validar que no sea numero
    }while (!isNaN(str));
    return str;
}
//validacion para numeros
function validarNumber(msg){
    let num;
    do{
        num = parseInt(prompt(msg));
        //validamos que sea un numero
    }while (isNaN(num) || (num < 1) || (num > 999));
    return num;
}

//validacion para duracion de pistas
function validarNumberPistas(msg){
    let num;
    do{
        num = parseInt(prompt(msg));
        //validamos que sea un numero
    }while (isNaN(num) || (num < 0) || (num > 7200));
    return num;
}

function cargarDisco(){

    let nombreDisco = validarString("Ingrese el nombre del disco");
    let autor = validarString("Ingrese el nombre de la banda o autor");
    let codigo = validarNumber("Ingrese el código del disco");
    
    disco.nombreDisco = nombreDisco;
    disco.autor = autor;
    disco.codigo = codigo;

    do{
        pistas = validarString("Ingrese el nombre de la pista");
        duracionPistas = validarNumberPistas("Ingresa la duración de la pista");
        let datosPistas = new Pistas(pistas,duracionPistas);
        disco.agregarPistas(datosPistas);
    }while(confirm("¿Desea cargar más pistas?"));

}

function mostrar(){
    document.querySelector("body").append(disco.mostrar())
}