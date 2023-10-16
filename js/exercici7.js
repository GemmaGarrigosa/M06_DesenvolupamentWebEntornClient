
/*Programa on demanem el nombre de files i columnes i ens crea una taula amb la posició de la fila i de la columna*/

function taulaDinamica() {
    let files = parseInt(prompt("Introdueix el nombre de files"));
    let columnes = parseInt(prompt("Introdueix el nombre de columnes"));
    

    let t = document.createElement("table");
    t.style.margin = "10px";
    

    for (let i = 1; i <= files; i++) {
        let tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 1; j<= columnes; j++){
            let td = document.createElement("td");
            td.style.border = "1px solid black"; // afegint estils
            td.style.padding = "10px";
            tr.appendChild(td);
            let txt = document.createTextNode(`${i}.${j}`);
            td.appendChild(txt);
        }
    }

    document.body.appendChild(t);
}

/* Programa en el que creem una taula dinàmica demanant files i columnes samb les taules de multiplicar com aquesta:
1 2 3 4 5 
2 4 5 8 10
3 ...
4 ...
5 ...
*/

function taulaDeMultiplicar() {
    let files = parseInt(prompt("Introdueix el nombre de files"));
    let columnes = parseInt(prompt("Introdueix el nombre de columnes"));
    

    let t = document.createElement("table");
    t.style.margin = "10px";
    

    for (let i = 1; i <= files; i++) {
        let tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 1; j<= columnes; j++){
            let td = document.createElement("td");
            td.style.border = "3px solid black"; // afegint estils
            td.style.color = "blue";
            td.style.padding = "10px";
            td.style.textAlign = "center";
            tr.appendChild(td);
            let txt = document.createTextNode(i * j);
            td.appendChild(txt);
        }
    }

    document.body.appendChild(t);

}

/* Programa que demana el numero de columnes de la taula i també el número de cel·les de color de la darrera fila
 i pintar una piramide pero que realment el que fem es printar una taula 
 
 caldrà calcular el nº de files --> (nº de columnes / 2 ) + 1
 */

 function piramide() {
    let columnes = parseInt(prompt("Introdueix el nombre de columnes"));
    let files = (columnes/2) +1; 

    let t = document.createElement("table");
    let red = 1;
    

    for (let i = 1; i <= files; i++) {
        let white = (columnes - red)/2;
        let tr = document.createElement("tr");
        t.appendChild(tr);
        for (let j = 1; j <= white; j++) {
            let td = document.createElement("td");
            td.style.width="20px";
            td.style.height= "20px";
            td.style.backgroundColor = "white";

            tr.appendChild(td);
        }
        for (let j = 1; j <= red; j++) {
            let td = document.createElement("td");
            td.style.width="20px";
            td.style.height= "20px";
            td.style.backgroundColor = "red";
            td.style.border = "1px solid black";
            
            tr.appendChild(td);
        }
        
        for (let j = 1; j <= white; j++) {
            let td = document.createElement("td");
            td.style.width="20px";
            td.style.height= "20px";
            td.style.backgroundColor = "white";
            

            tr.appendChild(td);
        }
        red = red + 2;
    }
    document.body.appendChild(t);
 }
