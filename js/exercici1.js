let hola = 'Hello World';


function holita() {
    alert(hola);
}

function hoversito() {
    alert('miau');
}

function arrastra() {
    alert('prrrrr');
}

function canviat() {
   let paraula = document.getElementById("canvi").value;
    alert('El text es :' + paraula);
}

function multiplicar() {

    let numero = document.getElementById("numerito").value;
    for (let i= 0; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}