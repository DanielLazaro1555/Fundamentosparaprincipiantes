// Imprime "Hola Mundo" en la consola.
console.log('Hola Mundo');

// Declara una variable llamada `numberOfLines` y la inicializa en 1.
let numberOfLines = 1;

/**
 * Función: aumentarNumeroDeLinea
 * Incrementa el valor de la variable `numberOfLines` en 3.
 */
function aumentarNumeroDeLinea() {
    numberOfLines += 3; // Incrementa `numberOfLines` por 3 unidades.
}

// Llama a la función `aumentarNumeroDeLinea()` para aumentar el número de líneas.
aumentarNumeroDeLinea();
// Imprime el valor actual de `numberOfLines` junto con un mensaje.
console.log('Línea #', numberOfLines);

// Llama a la función `aumentarNumeroDeLinea()` nuevamente.
aumentarNumeroDeLinea();
// Imprime el valor actual de `numberOfLines` nuevamente junto con un mensaje.
console.log('Línea #', numberOfLines);

// Llama a la función `aumentarNumeroDeLinea()` por tercera vez.
aumentarNumeroDeLinea();
// Imprime el valor actual de `numberOfLines` por tercera vez junto con un mensaje.
console.log('Línea #', numberOfLines);
