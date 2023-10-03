/*Exercicis fets a classe el dia 2 de classe */


function multiplicar() {

    let dades = prompt("Introdueix un número");
    
    while(true) {
        if (dades < 0 || dades > 10) {
            console.error("El número ha de ser major que 0 i menor que 10");
            dades = prompt("Introdueix un número");
        } else {
            console.clear();
            console.log(`Taula del ${dades}`);
            for (let i= 0; i <= 10; i++) {
                console.log(`${dades} x ${i} = ${dades * i}`);
            }
            break;

        }
    }
}

function fibonacci() {
    let a = 1;
    let b = 1;
    let suma = 1;
    let quants = document.getElementById("numero").value;
    console.clear();
    for (let i = 0 ; i < quants; i++) {
        if (i > 1) {    
        suma = a + b; 
        a = b; 
        b = suma; 
        }

        console.log(`fibo [${ i + 1 }] = ${suma}`);
    }

}