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





//Ejercicio 2: Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

let siguientesNums = 50;  //Defino la variable fuera de la funcion para poder acceder a ella en el prompt.
function algoritmo2(num) {
    for (let i = 0; i < siguientesNums; i++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
        num++;
    }
}
algoritmo2(Number(prompt(`Inserta un número. Te devolveré los números impares de entre los siguientes ${siguientesNums} números.`)));