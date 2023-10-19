// A partir de la piràmide anterior, crear una taula html que dibuixi un romb com aquest.

function rombo() {
    let columnes = parseInt(prompt("Introdueix el nombre de columnes"));
    if (columnes%2==0){
        columnes++;
    }

    let t = document.createElement("table");
    let red = 1;
    

    for (let i = 1; i <= columnes; i++) {
        let white = (columnes - red)/2;
        let tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 1; j <= white; j++) {
            modificaTaula(tr,"white");
            
        }
        for (let j = 1; j <= red; j++) {
            modificaTaula(tr,"red");

        }
        
        for (let j = 1; j <= white; j++) {
            modificaTaula(tr,"white");

        }
        if (i < (columnes /2)) {
        red = red + 2;
        } else {
            red = red -2;
        }
    }
    document.body.appendChild(t);
 }


//Funció que passa els estils a les columnes de la taula
function modificaTaula (tr,color){
    let td= document.createElement("td");
    td.style.width="20px";
    td.style.height= "20px";
    td.style.border = "solid black 1px"
    td.style.backgroundColor = color;
    tr.appendChild(td);
}

/* Demanar a l'usuari un nom d'arxiu i pintar per consola la seva extensió */

function escriuExtensio() {
    let arxiu = prompt("escriu un nom d'arxiu");

    let resultat = arxiu.split(".");

    console.log(resultat[resultat.length-1]);
    console.log (`Fent servir el pop:  ${resultat.pop()}`);
}

/* Demanar a l'usuari una frase i mostrar si la frase té el mateix número de "a" que de "b"*/

function quantesAB() {
    let frase = prompt("escriu una frase").toLowerCase();
    let comptaA = 0;
    let comptaB = 0;

    for (let i = 0; i <= frase.length-1; i++) {
        if (frase.charAt(i) == "a"){
            comptaA++;
        } else if (frase.charAt(i)== "b"){
            comptaB++;
        } else {
            continue;
        }
    }

    console.log(`La frase conté ${comptaA} -> a's i conté ${comptaB}-> b's `);
}