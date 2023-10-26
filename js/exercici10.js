/* Generar un nº entre el 1-100 i es tracta d'endevinarlo. Cada intent es dirà major o menor segons si l'intent sigui més gran o més petit. 
Si s'introdueix un valor invàlid es mostrarà "invàl·lid" i es comptarà l'intent. Si introdueix un 0 = GAME OVER
Resultat -> "L'has endevinat en n intents"
*/

function endevinaNombre() {
    let nombre = Math.floor(Math.random() * 100);
    let intents = 0;
    console.log(`El nombre a endevinar és ${nombre}`);

    while (true) {
        let input = parseInt(prompt("Introdueix un nombre"));

        if (Number.isInteger(input)) { //mira si és enter

            if (input == 0) {
                document.write("GAME OVER");
                break;
            }
            if (input <= 100 && input >= 1) {

                if (input > nombre) {
                    console.log("menor");
                    intents++;
                } else if (input == nombre) {
                    intents++;
                    console.log(`L'has endevinat en ${intents} intents`);
                    break;
                } else {
                    console.log("major");
                    intents++;
                }
            }
            console.log("Invàl·lid");
            intents++;
        }
        console.log("Invàl·lid");
        intents++;
    }
}

/* Demanar 2 numeros de 2000 a 2050 i dir quin és el primer any del rang que comença en dimecres (dia 1 de gener de l'any)*/

function primerDimecres(){
    let primer = parseInt(prompt("Introdueix el primer any"));
    let segon = parseInt(prompt("Introdueix el segon any"));

    for (let i = primer; i <= segon; i++){
        let data = new Date(`${i}-01-01`);
        let dia = data.getDay();
        
        if(dia ===3){
            console.log(`l'any ${i} comença en dimecres`);
            return;
        }
    }
    console.log("cap any comença en dimecres");

}

/* Demanar una paraula i dir si és pentavocàlica (té les 5 vocals)*/

function pentaVocalica() {
    let text = prompt("Introdueix una paraula");
    let comptador = 0;
    let a = /[aàáä]/gi;
    let e = /[eèéë]/gi;
    let i = /[iíìï]/gi;
    let o = /[oòóö]/gi;
    let u = /[uúùü]/gi;

    if (text.match(a)!= null){ 
        comptador++;
    }
    if (text.match(e)!= null){
        comptador++;
    }
    if (text.match(i)!= null){
        comptador++;
    }
    if (text.match(o)!= null){
        comptador++;
    }
    if (text.match(u)!= null){
        comptador++;
    }

    if (comptador == 5){
        console.log("Si és pentavocàlica");
    } else {
        console.log("No és pentavocàlica");
    }

}

/*PENTAVOCALICA SOLID */ 

function pentaVocalicaSOLID() {
    let text = prompt("Introdueix una paraula");
    let vocals = [/[aàáä]/gi,/[eèéë]/gi,/[iíìï]/gi,/[oòóö]/gi,/[uúùü]/gi];

    for (let i= 0; i < vocals.length; i++){
        if (text.match(vocals[i])== null){
            console.log("No és pentavocàlica");
            return;
        }
    }
        console.log("Si és pentavocàlica");
}