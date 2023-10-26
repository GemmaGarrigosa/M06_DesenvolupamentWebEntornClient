/* Demanar 2 frases a l'usuari i comprova si tenen la mateixa longitut */

function longitutFrase() {
    let frase1 = prompt("Introdueix una frase");
    let frase2 = prompt("Introdueix una frase");

    if (frase1.length == frase2.length) {
        console.log("Tenen la mateixa longitut");   
    } else {
        console.log("No tenen la mateixa longitut");
    }
}

/* Demanar un text i una lletra dir  si la lletra està continguda entre 2 i 4 vegades en el text */


function conteLletra() {
    let text = prompt("Dona'm un text").toLowerCase();
    let lletra = prompt("Dona'm una lletra").toLowerCase();
    let comptador = 0;

    for (let i = 0; i <= text.length; i++) {
        if (text[i] == lletra) {
            comptador++;
        }
    }

    if (comptador <= 4 && comptador >=2) {
        console.log(`La frase conté entre 2 o 4 vegades la lletra ${lletra}`);
    } else {
        console.log(`La frase NO conté entre 2 o 4 vegades la lletra ${lletra}`);
        
    }                  

}

/* Demanar un text a l'usuari i un número mostrar el text sense el caracter en la posició del número
    fent servir el document.write() */

function treuLletra() {
    let frase = prompt("Escriu una frase");
    let posicio = parseInt(prompt("Escriu un número"));
    let fraseNova = "";

    for (let i= 0; i < frase.length; i++){ // menor igual no gemmita
        if (i != posicio){
            fraseNova += `${frase[i]}`;
        }
    }
    document.write(fraseNova);
}

function treuLletraSubstring(){
    let frase = prompt("Escriu una frase");
    let posicio = parseInt(prompt("Escriu un número"));
    let fraseNova = "";

    let primeraPart = frase.substring(0,posicio);
    let segonaPart = frase.substring(posicio);
    fraseNova = concat(primeraPart,segonaPart);
    document.write(fraseNova); 
}

/* Demanar un text a l'usuari i mostrar cosos */

function mostraInfo() {
    let text = prompt("Introdueix un text");
    let vocals = "aàáäeèéëiíìïoòóöuúùü";
    let textEnMajuscules = text.toUpperCase();
    let textEnMinuscules = text.toLowerCase();
    let longitut = text.length;
    let nombreParaules = text.split(" ");
    let posicio = 0;
    let lletres = "";
    let nombreLletres = 0;
    
    for (let i= 0; i < text.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (text[i] == vocals[j]){
                lletres += text[i];
                nombreLletres++;
            }
        }
    }

    document.write(`Majúscules: ${textEnMajuscules} <br/>`);
    document.write(`Minúscules: ${textEnMinuscules} <br/>`);
    document.write(`Longitud: ${longitut} <br/>`);
    document.write(`Nombre de paraules: ${nombreParaules.length}<br/>`);
    document.write(`Les vocals són: ${lletres} <br/>`);
    document.write(`El número de vocals és: ${nombreLletres} <br/>`);
    document.write(`El text reduïnt:<br/>`);
    for (let i= 0; i < text.length; i++) {
    document.write(`${text.substring(posicio)} </br>`)
    posicio++;

    }

}

/* expressions regulars 
    vocals = /[aèé...]/gi  global insensitive
    text.match(vocals); busca coincidencies entre el text i les vocals
    text.match(vocals).length;

    !!! text.match() requereix de expressió regular !!!
*/

function mostraInfoRegEx() {
    let text = prompt("Introdueix un text");
    let vocals = /[aàáäeèéëiíìïoòóöuúùü]/gi;
    let textEnMajuscules = text.toUpperCase();
    let textEnMinuscules = text.toLowerCase();
    let longitut = text.length; 
    let nombreParaules = text.split(" ");
    let posicio = 0;
    
    document.write(`Majúscules: ${textEnMajuscules} <br/>`);
    document.write(`Minúscules: ${textEnMinuscules} <br/>`);
    document.write(`Longitud: ${longitut} <br/>`);
    document.write(`Nombre de paraules: ${nombreParaules.length}<br/>`);
    document.write(`El número de vocals és: ${text.match(vocals)} <br/>`); // mostra amb comes perque fa una llista
    document.write(`El número de vocals és: ${text.match(vocals).length} <br/>`);

    for (let i= 0; i < text.length; i++) {
        document.write(`${text.substring(posicio)} </br>`)
        posicio++;
    
        }

}

/* Demanar una hora a l'usuari en format  hh:mm és el dia de cap d'any i volem saber quants minuts queden per a mitjanit 00:00 */

function capDany() {
    let input = prompt("Introudeix una hora");
    let separat = input.split(":");
    let hores = parseInt(separat[0]);
    let minuts = parseInt(separat[1]);

    hores = hores * 60; // total minuts de les hores 
    let totalMinuts = hores + minuts; 
    let minutsRestants = 1440 - totalMinuts;


    
    if (input === "00:00") {
        document.write("Any nou");
    } else {
    document.write(Math.floor(minutsRestants));
    }

    
}