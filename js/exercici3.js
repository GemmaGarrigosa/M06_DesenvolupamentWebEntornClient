/*Exercicis fets el tercer dia de classe */


// Aprenem a elevar números i mirem quant tarda cadascun 
function elevar() {

    let a = prompt("introdueix un número");
    let b = prompt("introdueix el exponent");
   
    console.time('inici');
   
    let resultat = Math.pow(a,b);
   
 //   console.log(resultat);
    console.timeEnd('inici');
    
    let resultatfor = a;
    console.time('forsito');

    for (let i= 1; i < b; i++) {
        resultatfor = resultatfor * a;
    }
  //  console.log(resultatfor);

    console.timeEnd('forsito');
}

// Busquem la mitja, menor, mitjana i major d'un array
function calculs() {
    let a = parseInt(prompt("introdueix el primer numero"));
    let b = parseInt(prompt("introdueix el segon numero"));
    let c = parseInt(prompt("introdueix el tercer numero"));

    let nombres =[a,b,c];
    nombres.sort((a, b) => a - b);
    let mitja = (nombres[0] + nombres[1] + nombres[2]) / nombres.length;
    let mitjana = nombres[Math.floor(nombres.length/2)];


    console.log(`mitja ${mitja}`);
    console.log(`menor ${nombres[0]}`);
    console.log(`mitjana ${mitjana}`);
    console.log(`major ${nombres[nombres.length-1]}`);
    

}