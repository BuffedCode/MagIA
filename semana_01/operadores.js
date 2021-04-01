//OPERADORES LOGICOS 
//Sesion modulo_02-semana_01-marzo_04-2021



//Operador Adicion +
var operator1 = 100 ;
var operator2 = 5;
var additionResult = operator1 + operator2;
console.log ("Tu suma es: " + additionResult);

//Operator Substraction -
var subtractionResult =  operator1 - operator2;
console.log( "Tu resta es: " + subtractionResult );

//Operator multiplication *
var multiplicationResult = operator1 * operator2;
console.log ("Tu multiplicacion es: " + multiplicationResult);

//Operator Division /
var divisionResult = operator1 / operator2;
console.log ("Tu division es: " + divisionResult);

//Operator increase ++
divisionResult++;
console.log("Incrementando la variable divisionResult: " + divisionResult);

//Operator exponentiation **
var expResult= operator1**operator2 ;
console.log("Exponenciacion: " + expResult);

//Operator rest (Resto) %
var restResult = operator1%operator2;
console.log ("El modulo es: " + restResult);

//Operator decrement --
restResult--;
console.log("Decreciendo la variable restResult: " + restResult);
restResult--;
console.log("Volviendo a decrecer la variable restResult: " + restResult);

//Operator =
operator1 = operator2;
console.log(operator1);

//Operator +=
operator1 += operator2;
console.log(operator1);


//OPERADORES DE COMPARACION


// Operator egual to ==
var comparison1 = 5;
var comparison2 = "5";
var comparisonResult = comparison1 == comparison2;
console.log("comparacion == es: " + comparisonResult);

//Operator egual value and equal type ===
var comparisonResult_01 = comparison1 === comparison2;
console.log("comparacion === es:" + comparisonResult_01);

//Operator Different to  !=
var comparisonResult_02 = comparison1 != comparison2;
console.log("comparacion != es:" + comparisonResult_02);

//Operator Different value or different type  !==
var comparisonResult_03 = comparison1 !== comparison2;
console.log("comparacion !== es:" + comparisonResult_03);

//Operator Greater to >
var comparisonResult_04 = comparison1 > comparison2;
console.log("comparacion > es:" + comparisonResult_04);

//Operator less to <
var comparisonResult_05 = comparison1 < comparison2;
console.log("comparacion < es:" + comparisonResult_05);

//Operator greater or equal to >=
var comparisonResult_06 = comparison1 >= comparison2;
console.log("comparacion >= es:" + comparisonResult_06);

//Operator less or egual to <=
var comparisonResult_07 = comparison1 <= comparison2;
console.log("comparacion <= es:" + comparisonResult_07);


//LOGICAL OPERATORS
var opeLog_01 = 5;
var opeLog_02 = 20;
var opeLog_03 = 10;


//Operador "AND" && 
var resultOpeLog_01 = (opeLog_01 < opeLog_02) && (opeLog_03 > opeLog_02);
console.log ("El resultado del operador && es: "+resultOpeLog_01)

//Operador "OR" || 
var resultOpeLog_02 = (opeLog_01 < opeLog_02) || (opeLog_03 > opeLog_02);
console.log ("El resultado del operador || es: "+resultOpeLog_02)

//Operador Negacion ! shift 1
var resultOpeLog_03 = !resultOpeLog_02;
console.log ("El resultado del operador !  es: "+resultOpeLog_03);