/*
Objetivo
Al ingresar a una aplicación, el usuario podrá tomar diferentes rumbos dentro de ella
dependiendo de los datos.
Por ejemplo: cuando un usuario ingresa a un sitio web, se evalúa si está o no registrado y en
base a ello tendrá o no acceso a ciertos recursos que el sitio ofrece.
Otro ejemplo puede ser la diferencia entre aplicar a los productos un descuento o un
recargo.
Para poder tener control sobre la ejecución de nuestro programa existen las estructuras
condicionales. En el desarrollo de esta ejercitación las pondremos en práctica.
Recordemos cómo funcionan las estructuras condicionales…
Pensemos, por ejemplo, si quisiéramos restringir según la mayoría de edad el acceso a un
tobogán de agua extremo. En ese caso, tendríamos que saber si la persona es mayor o menor
de edad. Esto lo podríamos resolver con una condición muy sencilla.

let edad= 20;
if(edad >= 18) {
console.log('Puede ingresar')
}else{
console.log('No puede ingresar')
}

¡Ahora pongamos esto en práctica!

1.
Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes
crear una variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
● Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
● Si es un perfil“administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
● Si es un perfil“asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “Usted sólo tiene permisos de registrar, modificar y
consultar datos”.
● Si es un perfil“invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
● Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”.
Para probar las diferentes respuestas asigna diferentes valores a la variable “perfil”
creada.


let perfiles = ['administrador', 'asistente', 'invitado'];

switch (perfil) {
    case '':
        console.log('Debe especificar el perfil del usuario');
        break;
    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'asistente':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'invitado':
        console.log('Debe especificar un perfil válido');
        break;
default:
    console.log('Debe especificar un perfil válido');
}
 */   

let perfil = ''; // Debes asignar un valor a la variable perfil

switch (perfil) {
        case 'ADMINISTRADOR':
        case 'Administrador':    
        case 'administrador':
            console.log('Usted tiene todos los privilegios de uso del sistema');
            break;
        case 'ASISTENTE':    
        case 'Asistente':
        case 'asistente':
            console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
            break;
        case 'Invitado':
        case 'INVITADO':
        case 'invitado':
            console.log('Usted tiene permisos de solo lectura'); 
            break;
        default:
            console.log('Debe especificar un perfil válido');
  }


/*  1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el
operador condicional ternario, queremos determinar cuánto va a pagar un hogar
según su consumo. Veamos los pasos a seguir…
a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago
actual se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá
ningún aumento.
e. Una vez obtenido el monto del pago por consumo mostrar al usuario este
mensaje: “Debido a que su hogar tuvo un consumo de 450kwh, en
base al ajuste tarifario (hogares con consumo mayor a 300kwh por
mes tendrán un aumento del 20%), cumplimos con informarle que se
ha ajustado el total a pagar, que será de $14400”
X + (0,2 X) = 14400 
1,2x = 14400
x = 12000
*/


let pagoMes = 12000;
let consumoKWH = 450;

let pagoFinal = consumoKWH > 300 ? pagoMes * 0.2 : pagoMes; 

if (consumoKWH > 300) {
    console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH} kwh, que supera el límite de 300 kwh, se ha aplicado un aumento del 20% al total a pagar. El nuevo total a pagar es de $${pagoFinal}.`);
  } else {
    console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH} kwh, que no supera el límite de 300 kwh, no se ha aplicado aumento al total a pagar. El total a pagar es de $${pagoMes}.`);
  }


/*
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario
ingresa una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le
devuelva la misma palabra traducida al idioma inglés. Te recomendamos usar la
estructura switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario
un mensaje que le informe que “La palabra ingresada es incorrecta”.

let palabra = prompt('Ingrese una palabra en español: ')
switch (palabra) {
    case 'perro':
        console.log('dog');
        break;
    case 'gato':
        console.log('cat');
        break;
    case 'puerta':
        console.log('door');
        break;
    case 'ventana':
        console.log('window');
        break;
    case 'mesa':
        console.log('table');
        break;
    default:
    console.log('La palabra ingresada es incorrecta');
break;
}
*/

let palabra = ('perro'); //Ingrese una palabra en español

const traducciones = {
  'perro': 'dog',
  'gato': 'cat',
  'puerta': 'door',
  'ventana': 'window',
  'mesa': 'table'
};

if (traducciones[palabra]) {
  console.log(traducciones[palabra]);
} else {
  console.log('La palabra ingresada es incorrecta');
}

/*
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”,
“restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un
mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar -
restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch
*/
let operador = '/';
let num1 = 10;
let num2 = 5;
let resultado = 0;

if (operador === '+') {
  resultado = num1 + num2;
} else if (operador === '-') {
  resultado = num1 - num2;
} else if (operador === '*') {
  resultado = num1 * num2;
} else if (operador === '/') {
  resultado = num1 / num2;
}

console.log(`El resultado de la operación ${num1} ${operador} ${num2} es ${resultado}`);

/*
Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el
aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta
que:
a. La velocidad debe estar comprendida entre 268 a 278 km/hr.
b. La altura debe estar comprendida entre 150 m a 300 m.
*/
/*
let altura = 200;
let velocidad = 270;
let mensaje = '';

if (velocidad >= 268 && velocidad <= 278) {
  mensaje ="La velocidad es adecuada para aterrizar";
  if (altura >= 150 && altura <= 300) {
    mensaje ="La altura es adecuada para aterrizar";
  } else {
    mensaje ="La altura no es adecuada para aterrizar";
  }
} else {
  mensaje="La velocidad no es adecuada para aterrizar";
}

if (mensaje == "La velocidad es adecuada para aterrizar" && mensaje == "La altura es adecuada para aterrizar")
    console.log("Puede aterrizar");
else {
    console.log("No puede aterrizar");
}*/

let altura = 200;
let velocidad = 270;
let velocidadAdecuada = false;
let alturaAdecuada = false;

if (velocidad >= 268 && velocidad <= 278) {
  velocidadAdecuada = true;
  console.log("La velocidad es adecuada para aterrizar");
  if (altura >= 150 && altura <= 300) {
    alturaAdecuada = true;
    console.log("La altura es adecuada para aterrizar");
  } else 
  console.log("La altura no es adecuada para aterrizar");
  } else
  console.log("La velocidad no es adecuada para aterrizar");


if (velocidadAdecuada && alturaAdecuada) {
  console.log("Puede aterrizar");
} else {
  console.log("No puede aterrizar");
}