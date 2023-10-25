import {opciones} from './opciones.js';


function generarMenu() {
    let menuDinamico = document.querySelector('#menuDinamico');
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

window.addEventListener('load',generarMenu,true);