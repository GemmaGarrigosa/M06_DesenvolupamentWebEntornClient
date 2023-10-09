/* Programa que cobra 10 centims/minuts per despenjar + 5 cèntims/minuts de trucada. Demana hores, minuts i segons i calcula el cost de la trucada. */

function calcularPreu() {
    let hores = parseInt(prompt("Quantes hores?"));
    let minuts = parseInt(prompt("Quants minuts?"));
    let segons = parseInt(prompt("Quants segons?"));

    //Calculem quants segons són les hores i els minuts

    hores = hores * 3600;
    minuts = minuts * 60;
    

    resultat = (hores + minuts + segons)*0.05;
    resultat = resultat /60;
    resultat = resultat + 0.10;
    
    console.log(`Cost total ${resultat}€`);
}

/*
Donat un color a l'usuari rgb (0-255) passar-lo a hexadecimal #FF0A01. Utilitzar les llibreries de Javascript 
si la quantitat és menos de 16 posem un 0 abans

numero1.toString(16) --> t'ho torna a hexadecimal

*/

function colorAHexadecimal() {
    let red = parseInt(prompt("Introdueix el vermell"));
    let green = parseInt(prompt("Introdueix el verd"));
    let blue = parseInt(prompt("Introdueix el blau"));

    console.log(`(${red},${green},${blue}) = #${aHexadecimal(red)}${aHexadecimal(green)}${aHexadecimal(blue)}`);
    
}
//Funció que retorna el hexadecimal del valor donat
function aHexadecimal(num){
    let number = num;

    number = number.toString(16);
    if (number.length <2){
        number = `0${number}`;
    }

    return number;
}

/* Programa que demana 2 numeros, preu i diners lliurats, hem de mostrar el canvimínim que es tornarà amb el menor número de bitllets i monedes */

function canviMinim() {
    let preu = parseInt(prompt("Introdueix el preu"));
    let diners = parseInt(prompt("Introdueix amb què has pagat"));
    let total = diners - preu;

    // bitllets... 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01

    let bitllets = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]; 
    let quantitat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let tipus = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]; 
    

    console.log("---------------------------------");
    console.log(`preu = ${preu}  calers = ${diners}`);
    for (let i = 0; i <= bitllets.length; i++) {
        


        console.log(`${quantitat} de ${tipus}`);
    }

   console.log(`Total canvi ${total} `);
}
