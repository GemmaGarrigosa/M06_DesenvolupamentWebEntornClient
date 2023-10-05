/* Programa que transforma les temperatures de Celius a Farenheit i al inrevés */

function transformaTemperatura() {
    let tipus = prompt('Introdueix un tipus');
    let resultat = 0;
   

    console.clear();

    if (tipus == 'C' || tipus == 'F') {

        let temperatura = parseInt(prompt('Introdueix una temperatura'));

        if (tipus == 'C') {
            
            resultat = (9/5) * temperatura + 32;
            console.log(`${temperatura} graus Celsius són ${resultat} graus Farenheit`);
        }else {
        
            resultat = (temperatura - 32) / (9/5);
            console.log(`${temperatura} graus Farenheit són ${resultat} graus Celsius`);
        }

    } else {

        console.warn('El tipus ha de ser C o F');
    }
}

/* Programa que demana un número a l'usuari i convertir-lo a binari, octal i hexadecimal 
utilitzant bucles, divisions i residus */

/*Com passar un número decimal a binari:
    -----------------------------------------
    d/2, el % es guarden i a la inversa fins que d sigui 0 

      Com passar un número octal a decimal

    d/8, el % es guarden i a la inversa també fins que d sigui 0

      Com passar un número hexadecimal a decimal

    */

function transformaNumero() {
    let numero = parseInt(prompt('Introdueix un número'));
    console.clear();
   // transformaABinari(numero);
   // transformaAHexadecimal(numero);
  //  transformaAOctal(numero);
    let decimal = transformaTotal(numero,2);
    let hexadecimal = transformaTotal(numero,8);
    let octal = transformaTotal(numero,16);
    
   

   console.log(`decimal ${decimal}  hexadecimal ${hexadecimal} octal ${octal}`)

}

function transformaABinari(numero){
    let resultatBinari = '';
    
    while (numero != 0) {
        if (numero == 0) { break;}
        resultatBinari = String(numero%2) + resultatBinari;  
        numero = Math.floor(numero/2);  
    }
    console.log(resultatBinari); 
}

function transformaAHexadecimal(numero) {
    let resultatHexadecimal = '';
    
    while (numero != 0) {
        if (numero == 0) { break;}
        resultatHexadecimal = String(numero%8) + resultatHexadecimal;    
        numero = Math.floor(numero/8);
    }
    console.log(resultatHexadecimal); 

}

function transformaAOctal(numero) {
    let resultatOctal = '';

    let posicions=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    while (numero !=0) {
        if (numero==0) {break;}
        resultatOctal = posicions[numero%16]+resultatOctal;
        numero = Math.floor(numero/16);
   
    }
}

function transformaTotal(numero, base) {
    let resultatTotal = '';

    let posicions=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    while (numero !=0) {
        if (numero==0) {break;}
        resultatTotal = posicions[numero%base]+resultatTotal;
        numero = Math.floor(numero/base);
        
        
    }
        return resultatTotal;
}