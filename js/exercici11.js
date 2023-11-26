/* Obtenir la data actual del sistema i mostrar
  // Obtenir la data actual del sistema i mostrar:
// 1- Avui és dd del mes mm de l'any yyyy
// 2- El nombre de setmana actual de l'any
// 3- % de dies transcorreguts de l'any és nn,nn%
// 4- % de dies que que queden en l'any nn,nn%
// 5- Ara són les hh:mm:ss
// 6- % del dia transcorregut nn,nn%
// 7- % de dia que queda nn,nn%

*/

function mostraInfo(){
    let data = new Date();
    let dataSegona = new Date('2023-01-01');
    let diesEntreDos = data.getTime() - dataSegona.getTime();
    let passaADies = Math.round((diesEntreDos/(1000*60*60*24))/7)+1;
    let diesAny = Math.round(diesEntreDos/(1000*60*60*24));
    let totalDiesAny = (((diesAny +1)/365)*100).toFixed(2);
    // let horesEntreDos = ;
    // let horesDia = ;
    // let totalHoresDia =;

    
    
    document.write(`Avui és ${data.getDate()} del mes ${data.getMonth()+1} de l'any ${data.getFullYear()}<br>`);
    document.write(`El nombre de la setmana actual de l'any ${passaADies}<br>`);
    document.write(`% de dies transcorreguts de l'any és ${totalDiesAny}% <br>`);
    document.write(`% de dies que queden en l'any ${100 - totalDiesAny}% <br>`);
    document.write(`Ara són les ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}<br>`);
   // document.write(`% del dia transcorregut ${}`);
   // document.write(`% del dia que queda ${}`);
 

}

/* 
Els codis de barres poden ser de 8 --> EAN8 I DE 13 --> EAN13 digits. EL digit més a la dreta és el de control i es calcula segons una fórmula: 2593856(2) --> numero de control

Per calcular : Començant per la dreta i sense incloure el digit de control, les posicions (imparells es *3, parells *1) i es sumen la diferencia fins el proper 

*/

function codiDeBarres(){

    let codi = prompt("Introdueix un codi de barres");
    let girat = "";
    let resultat = 0;
    let multiple = 10;
    let acumulador = 0;
    

   let transformat = afegeixZeros(codi);

   console.log(transformat); //aixo es un xivato

    for (let i = transformat.length-2; i >= 0; i--) {
          if (i%2==0){
            resultat = resultat + transformat[i]*3;
        } else {
            resultat = resultat + transformat[i]*1;
        }
    }
    console.log("resultat al acabar "+ resultat);

    while (acumulador< resultat){
        let multiplicador = 1;
        acumulador += (multiple * multiplicador);
        multiplicador++;
    }
    
    

    let nombreOk = acumulador - resultat;
    console.log (nombreOk);
    
    if (nombreOk == transformat.charAt(transformat.length-1)){
        
        console.log(`${codi} --> Correcte`);
    } else {
        console.log(`${codi} --> Incorrecte`);
    }
    

}

function afegeixZeros(text) {

    let codi = text; 

    if (codi.length < 8) {
        while (codi.length<8 && codi.length != 8){
            codi = '0'+ codi;
        }
    }
     if (codi > 8 && codi.length < 13 && codi.length != 8 && codi.length != 13){
        while (codi.length < 13){
            codi = '0'+ codi;
        }
     }
    if (codi.length > 13) {
        console.log("Codi incorrecte");
    }

    return codi;
}

// function miraDigitControl(numero,transformat) {

//     let text = transformat;
//     let codi = numero; 
//     let resultat = 0;

//     for (let i = text.length; i >= 0; i--){
//         if ( i%2==0){
//            resultat = text[i];
//         }
//     }
//     return resultat;
// }