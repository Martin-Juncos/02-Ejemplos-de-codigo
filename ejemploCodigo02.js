/*
// Imprimir en la Consola
console.log("Hola, mundo!");

// Advertencias y Errores
console.warn("Esta es una advertencia.");
console.error("Este es un error.");

// Inspección de Objetos
const persona = { nombre: "Juan", edad: 30 };
console.log(persona);

// Medir Tiempos de Ejecución
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
  // Simulando un proceso largo
}
console.timeEnd("Tiempo de ejecución");

// var
var nombre = "Juan";
nombre = "Pedro"; // Reasignación permitida

// let
let edad = 25;
if (true) {
  let edad = 30; // Esto es una nueva variable dentro del bloque
  console.log(edad); // Imprime 30
}
console.log(edad); // Imprime 25

// const
const pi = 3.14;
// pi = 3.14159; // Esto causará un error

// Usando var en una Función
function saludo() {
  var mensaje = "Hola";
  console.log(mensaje); // 'Hola'
}
console.log(mensaje); // Error: mensaje no está definido

//Usando let en un Bloque
let contador = 0;
for (let i = 0; i < 5; i++) {
  contador++;
}
console.log(i); // Error: i no está definido

// Usando const para Constantes
const colores = ["rojo", "verde", "azul"];
colores.push("amarillo"); // Permitido
colores = []; // Error: no se puede reasignar

// Ámbito Global
var globalVar = "Soy global";
function mostrarGlobal() {
  console.log(globalVar); // Accede a la variable global
}
mostrarGlobal(); // Imprime: Soy global

// Ámbito Local
function saludo() {
  var localVar = "Hola";
  console.log(localVar); // Imprime: Hola
}
saludo();
console.log(localVar); // Error: localVar no está definida fuera de la función

// Hoisting
var nombre = "Juan";
console.log(nombre);

function saludar() {
  return "Hola";
}
console.log(saludar());

// Consideraciones con let y const
console.log(num); // Error: Cannot access 'num' before initialization
let num = 25;

// typeof en JavaScript
function saludo() {
  return "Hola";
}
console.log(typeof saludo);

// Tipos de Datos en JavaScript
let saludo = "Hola";
console.log(typeof saludo);

let age = 30;
console.log(typeof age);
let price = 19.99;
console.log(typeof price);

let esMayorDeEdad = true;
console.log(typeof esMayorDeEdad);

let auto = null;
console.log(typeof auto);

let sinValor;
console.log(typeof sinValor);

let simbolo1 = Symbol("id");
let simbolo2 = Symbol("id");
console.log(typeof simbolo1);
console.log(simbolo1 === simbolo2);

let person = {
  nombre: "Juan",
  edad: 25,
};
console.log(typeof person);
console.log(person.nombre);

// Conversión Implícita
let numero = 42;
let texto = " años";
let resultado = numero + texto;
console.log(resultado);

// Conversión Explícita
let num1 = 123;
let str = String(num1);
console.log(str);

let strNum = "456";
let num2 = Number(strNum);
console.log(num2);

let vacio = "";
let booleano = Boolean(vacio);
console.log(booleano); // false

// Operadores de Asignación
let x = 5;
console.log(x);
x += 4;
console.log(x);
x -= 3;
console.log(x);
x *= 4;
console.log(x);
x /= 4;
console.log(x);
x %= 3;
console.log(x);

// Operadores de Comparación
console.log(5 == "5");
console.log(5 != "4");
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== "5");
console.log(10 > 5);
console.log(10 >= 10);
console.log(3 < 7);
console.log(4 <= 4);
console.log(3 > 2 > 1); // ?

// Sentencias Condicionales en JavaScript
let edadConducir = 18;

if (edadConducir >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

let nota = 85;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Condicional switch
let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Bucle for...in
let user = { nombre: "Juan", edad: 30 };
for (let propiedad in user) {
  console.log(propiedad + ": " + user[propiedad]);
}
// Bucle for...of
let numeros = [1, 2, 3];
for (let numero of numeros) {
  console.log(numero);
}
// Bucle while
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Atencion!
}
// Bucle do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// Funciones Parámetros por defecto
function saludar(nombre = "Amigo") {
  console.log("Hola, " + nombre);
}
saludar();
saludar("Juan");
// Parámetro REST
function sumar(...numeros) {
  return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumar(1, 2, 3));
// Operador SPREAD
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Funciones Arrow
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3));

// Ámbitos de una función
function padre() {
  let nombre = "Juan";
  function hijo() {
    console.log(nombre); // Puede acceder a la variable del padre
  }
  hijo();
}
padre();

// Callbacks
function procesarEntrada(usuario, callback) {
  console.log("Procesando entrada de " + usuario);
  callback();
}
function finalizar() {
  console.log("Finalizado.");
}
procesarEntrada("Juan", finalizar);
// Closures
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
  };
}
const cout = crearContador();
cout();
cout();

// Arrays en JavaScript
var empleada = ["Majo", 22, true];

// Acceder a Elementos del Array
var hobbies = ["surfear", "dibujar", "escribir"];
console.log(hobbies[1]);

// Manipular Arrays
hobbies.push("escalar", "codear");
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

hobbies.unshift("correr");
console.log(hobbies);

hobbies.shift();
console.log(hobbies);

// Métodos del Array
const palabras = ["espejo", "frio", "invierno", "color"];
const result = palabras.filter((palabra) => palabra.length >= 6);
console.log(result);

const arreglo = [1, 2, 3, 4];
const nuevoArreglo = arreglo.map((numero) => numero * 2);
console.log(nuevoArreglo);

const suma = [10, 20, 30].reduce((a, b) => a + b);
console.log(suma);

// Objetos en JavaScript
var userData = {
  nombre: "Maria",
  edad: 28,
  profesion: "Astronauta",
};
console.log(userData);
// Acceso a Propiedades
console.log(userData.nombre);
console.log(userData["edad"]);
// Métodos
var personaEducada = {
  nombre: "Luján",
  saludo: function () {
    return "¡Buen día, " + this.nombre + "!";
  },
};
console.log(personaEducada.saludo());

// Asincronismo
// setTimeout
console.log("Inicio");
setTimeout(function () {
  console.log("¡Hola, llegas a tiempo!");
}, 1000);
console.log("Final");

// Promesas en JavaScript
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación exitosa");
  }, 1000);
});
console.log(promesa);
promesa.then((resultado) => {
  console.log(resultado);
});
// Manejo de Errores
let promesaFallida = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error en la operación");
  }, 1000);
});
console.log(promesaFallida);
promesaFallida
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
// Promise.all
let promesa1 = Promise.resolve("Promesa 1 resuelta");
let promesa2 = Promise.resolve("Promesa 2 resuelta");
Promise.all([promesa1, promesa2]).then((resultados) => {
  console.log(resultados);
});

// Fetch API
fetch("https://api.escuelajs.co/api/v1/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Solicitud con Opciones
fetch("https://api.escuelajs.co/api/v1/users/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nicolas",
    email: "nico@gmail.com",
    password: "1234",
    avatar: "https://picsum.photos/800",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Éxito:", data))
  .catch((error) => console.error("Error:", error));

//  async/await
async function obtenerDatos(url) {
  try {
    const respuesta = await fetch(url);
    console.log(respuesta);
    if (!respuesta.ok) {
      throw new Error("Error en la solicitud");
    }
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
const url = "https://jsonplaceholder.typicode.com/users";
obtenerDatos(url);
*/
