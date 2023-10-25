import {opciones} from './opciones.js';

let menuEstaVisible = false;
let menuDinamico = document.querySelector('#menuDinamico');
let flechaMenu = document.querySelector('#flechaMenuDinamico');

function mostrarMenu() {
    menuDinamico.style.visibility = 'visible';
    menuDinamico.style.transition = "0.2s";
    flechaMenu.style.transform = "rotate(180deg)";
    flechaMenu.style.transition = "0.5s"
}
function ocultarMenu() {
    menuDinamico.style.visibility = 'hidden';
    menuDinamico.style.transition = "0.2s";
    flechaMenu.style.transform = "rotate(90deg)";
    flechaMenu.style.transition = "0.5s"
}
function manejadorVisualizacionMenu() {
    if(menuEstaVisible) {
        ocultarMenu();
        menuEstaVisible = false;
    }
    else {
        mostrarMenu();
        menuEstaVisible = true;
    }
}
function generarMenu() {
    let listaOpciones = document.createElement('ul');
    let opcion;
    let contenidoOpcion;

    for(let opc of opciones) {
        opcion = document.createElement('li');
        opcion.setAttribute("id",opc.id);
        opcion.setAttribute("class",opc.class);
        contenidoOpcion = document.createTextNode(opc.nombre);
        opcion.appendChild(contenidoOpcion);
    
        listaOpciones.appendChild(opcion);
    }
    
    menuDinamico.appendChild(listaOpciones);
}

function inicio() {
    generarMenu();
    flechaMenu.addEventListener('click', manejadorVisualizacionMenu, false);
    flechaMenu.style.transform = "rotate(90deg)";
}

window.addEventListener('load',inicio,false);