/* Programa que et busca el número mes proper a 100*/

function apropar() {
    let a = parseInt(prompt("introdueix un número"));
    let b = parseInt(prompt("introdueix un altre número"));
    let restaPrimerNumero = Math.abs(100 - a);  // la distància sigui positiu o negatiu referent a 100 sempre serà la mateixa
    let restaSegonNumero =  Math.abs(100 - b); 

    console.clear();

    if (restaPrimerNumero == restaSegonNumero) {
        console.log("Els dos nombres estàn igual d'aprop a 100")
    } else {
        if (restaPrimerNumero > restaSegonNumero) {
            console.log(`El més proper és: ${b}`);
        } else {
            console.log(`El més proper és: ${a}`);
        }
    }

}

// Programa que et crea una data amb un segon més

function fesData() {
    let hora = parseInt(prompt("Introdueix l'hora"));
    let minut = parseInt(prompt("Introdueix un minut"));
    let segon = parseInt(prompt("Introdueix un segon"));
    
    // versió amb Getters i Setters

    let dataSet = new Date(); // agafem el dia del sistema
    dataSet.setHours(hora);
    dataSet.setMinutes(minut);
    dataSet.setSeconds(segon+1);

    console.log(`Hora ${dataSet.getHours()}:${dataSet.getMinutes()}:${dataSet.getSeconds()} `);

    // Versió hardcodejada

    let data = new Date(2023, 9, 10, hora, minut, segon +1 );

    console.log(`Hora ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `);


}

//Programa que et diu si una data és vàlida

function esDataValida() {

    let any = parseInt(prompt('Introdueix un any'));
    let mes = parseInt(prompt('Introdueix un mes'));
    let dia = parseInt(prompt('Introdueix un dia'));

    fecha = new Date(any,mes,dia);

    if (any == fecha.getFullYear() && mes == fecha.getMonth() && dia == fecha.getDate()) { // si l'objecte Date no ho corregeix, és vàlida
        console.log ('Data vàlida');
    } else {
        console.log('Data no vàlida');
    }

}

// Funció que et demana un nombre de dies, i t'ho transforma en anys, mesos i dies 

function transformaData() {
    let days = parseInt(prompt('Introdueix dies'));

    let totalAnys = Math.floor(days /365 );
    let totalMesos = Math.floor((days % 365) /30);
    let totalDies = Math.floor((days % 365) % 30);

    console.log(`Anys: ${totalAnys} Mesos: ${totalMesos} Dies: ${totalDies}`);
}

