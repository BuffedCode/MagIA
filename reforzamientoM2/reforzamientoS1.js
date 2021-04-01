//EJERCICIO DE REFORZAMIENTO SEMANA_01



/*Juan quiere vender sus dulces, pero necesita venderlos aún si no está presente, 
por lo que compr una máquina expendedora y nos pide ayuda para que implementemos su funcionamiento.
Necesitamos diseñar un programa que con 2 datos (el código del dulce a comprar y el dinero que 
vamos a meter en la máquina para pagar) logre decidir si entregar el dulce o no. 
Condiciones:
•Si elcódigo del producto es correcto y el diner es suficiente para comprarlo, imprimir  en pantalla 
que la compra fue exitosa.
Ejemplo:Compra de chocolateexitosa, gracias por su preferencia

•Si el código  del producto es incorrecto y el dinero sobrepasa al valor del dulce, 
imprimirá el mensaje de compra exitosa y en la línea siguiente imprimirá el cambio que  
se deberá entregar al cliente.
Ejemplo:Compra de chicle exitosa, gracias por su preferencia.Tu cambio es de 10.25

•Si el código del producto es incorrecto o no se ingresa el suficiente dinero 
para comprar un dulce en específico, imprimirá un mensaje de error.
Ejemplo:Código incorrecto, ingresa un código validoDinero insuficiente para comprar este producto*/


const prompt=require('prompt-sync')();
var codeCandy = prompt ("Chocolate:xc23     Palette:c4f2    Gum:gt74"    
                        +"Cookie:l3k8     Digit the code for the wished candy:   ");
var money = prompt("Remenber our prices:    Chocolate:12.50     Palette:5.75"    
                    +"Gum:4.25    Cookie:9.10     Introduce your money if you want a candy. NOW!!");

switch(codeCandy){
    case "xc23":
        if(money==12.50){
            console.log("Successful chocolate purchase ♥")
        }
        else if(money<12.50){
            console.log("Insufficient money")
        }
        else if(money>12.50){
            money-=12.50
            console.log("Successful chocolate purchase ♥. Change: "+money)
        }
    break 
        
    case "c4f2":
        if(money==5.75){
            console.log("Successful palette purchase ♥")
        }
        else if(money<5.75){
            console.log("Insufficient momey")
        }
        else if(money>5.75){
            money-=5.75
            console.log("Successful palette purchase ♥. Change: "+money)
        }
    break
        
     case "gt74":
        if(money==4.25){
            console.log("Successful gum purchase ♥")
        }
        else if(money<4.25){
            console.log("Insufficient money")
        }
        else if(money>4.25){
            money-=4.25
            console.log("Successful gum purchase ♥. Change: "+money)
        }
    break 
        
    case "l3k8":
        if(money==9.10){
            console.log("Successful cookie purchase ♥")
        }
        else if(money<9.10){
            console.log("Insufficient money")
        }
        else if(money>9.10){
            money-=9.10
            console.log("Successful cookie purchase ♥. Change: "+money)
        }
    break
        
    default:
        console.log("Wrong code please enter a valid code ☺");
}