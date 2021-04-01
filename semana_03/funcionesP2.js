//FUNCIONES_P2
//Sesion modulo_02 semana_03 marzo_18 2021



/*Ejercicio #1
Escribir un programa que obtenga el precio de un producto, y calcule
el precio total, ya que tambien se va a cobrar el costo de envio,
unicamente si el precio del producto es mayor o igual a 399$ */

var producto = "celular";
var precio = 100;

function compra(precio, producto){
    var total = 0;

    if (precio <= 500){
        total = precio + 50;

        console.log("FACTURA \n  Costo del " + producto 
        + " es: " + precio + "$ \n  Costo del envio: 50$\n" 
        + "  El total a pagar es: " + total + "$" );
    }
    else if (precio > 500 ){
        total = precio;

        console.log("FACTURA \n  Costo del " + producto 
        + " es: " + precio + "$ \n"  + "  El total a pagar es: " + total + "$");
    }
}
compra(precio, producto);
compra(1200, "pet");



//AMBITO DE UNA FUNCION

//Var
function ambitoVar (){
    const i = 1;
    if(i==1){
        var one = "ONE";
        
    }
    console.log(one);
}
ambitoVar();    //OK
//console.log(one);  --> ERROR


//Let
function ambitoLet(){
    const i = 2;
    if(i==2){
        let two= "TWO";   
    }
    console.log(two);
}
//ambitoLet(); --> ERROR
//console.log(two); --> ERROR


function ambitoLet(){
    const i = 2;
    if(i==2){
        let two= "TWO";  
        console.log(two); 
    }
}
ambitoLet();    //OK


var mensaje = "texto";
function apple(){   
    var mensaje = "texto_02";
    console.log(mensaje);
}
console.log(mensaje);   //OK
apple();    //OK
console.log(mensaje);   //OK