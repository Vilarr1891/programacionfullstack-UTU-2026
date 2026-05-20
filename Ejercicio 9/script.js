console.log("Hola Mundo");


let nombre = prompt ("¿Cuál es tu nombre?");
console.log("Hola " + nombre); 


let a = Number(prompt ("introduzca el primer número"));
let b = Number(prompt ("introduzca el segundo número"));
let suma = a + b;
console.log("La suma de " + a + " y " + b + " es: " + suma);


let edad = Number(prompt ("¿Cuál es tu edad?"));
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("No eres mayor de edad.");
}


let Numero1 = Number(prompt ("Introduce un número"));
if (Numero1 % 2 === 0) {
    console.log("El número " + Numero1 + " es par.");
} else {
    console.log("El número " + Numero1 + " es impar.");
}


let numero1 = Number(prompt ("Introduce el primer número"));
let numero2 = Number(prompt ("Introduce el segundo número"));
let numero3 = Number(prompt ("Introduce el tercer número"));
let mayor = Math.max(numero1, numero2, numero3);
console.log("El número mayor es: " + mayor);


let nota = Number(prompt ("Introduce tu nota"));
if (nota >= 7)
    console.log("Tu calificación es: Muy Bien");
else if (nota >= 5)
    console.log("Tu calificación es: aceptable");
else if (nota >= 0)
    console.log("Tu calificación es: insuficiente");


for (let i = 1; i <= 10; i++) {
    console.log("Contador: " + i);
}


console.log("Números pares del 1 al 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let contraseña = prompt ("Introduce la contraseña");
if (contraseña === "1234") {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}