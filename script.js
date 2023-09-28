//Ejercicio 1: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function algoritmo1(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return console.log(`La letra ${letra} aparece ${contador} veces en tu frase "${frase}".`);
}
algoritmo1(prompt('Inserta una frase:'), prompt('Inserta una letra para comprobar cuantas veces aparece:'));

///////Ejercicio 1b: solucion alternativa que no distingue entre mayúscula/minúscula
function algoritmo1b(frase, letra) {
    let contador = 0;
    let fraseMinusculas = frase.toLowerCase(); //almaceno fraseMinusculas como nueva variable para que en el prompt pueda referirme a la frase original y no la convertida en minusculas
    for (let i = 0; i < frase.length; i++) {
        if (fraseMinusculas[i] === letra) {
            contador++;
        }
    }
    return console.log(`La letra ${letra} aparece ${contador} veces en tu frase "${frase}".`);
}
algoritmo1b(prompt('Inserta una frase:'), prompt('Inserta una letra para comprobar cuantas veces aparece:'));

///////Ejercicio 1c: solucion alternativa con arrays. contador también podría ser un string*
function algoritmo1c(frase, letra) {
    let contador = [];
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador.push(frase[i]);  //*si usara un string: contador += frase[i]
        }
    }
    return console.log(`La letra ${letra} aparece ${contador.length} veces en tu frase "${frase}".`);
}
algoritmo1c(prompt('Inserta una frase:'), prompt('Inserta una letra para comprobar cuantas veces aparece:'));





//Ejercicio 2: Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

let siguientesNums = 50;  //Defino la variable fuera de la funcion para poder acceder a ella en el prompt, aunque realmente no haría falta pues no es un valor que vayamos a modificar
function algoritmo2(num) {
    for (let i = 0; i <= siguientesNums; i++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
        num++;
    }
}
algoritmo2(Number(prompt(`Inserta un número. Te devolveré los números impares de entre los siguientes ${siguientesNums} números.`)));

///////Ejercicio2b: usando bucle while
function algoritmo2b(num) {
    let i = 0;
    while (i <= 50) {
        if (num % 2 !== 0) {
            console.log(num);
        }
        num++;
        i++;
    }
}
algoritmo2b(Number(prompt(`Inserta un número. Te devolveré los números impares de entre los siguientes 50 números.`)));