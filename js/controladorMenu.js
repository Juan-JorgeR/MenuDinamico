let menuEstaVisible = false;
let menuDinamico = document.querySelector('#menuDinamico');

function mostrarMenu() {
    menuDinamico.style.visibility = 'visible';
}
function ocultarMenu() {
    menuDinamico.style.visibility = 'hidden';
}
function manejadorVisualizacionMenu() {
    //if(menuEstaVisible) {
     //   ocultarMenu();
   // }
  //  else {
        mostrarMenu();
      //  menuEstaVisible = true;
    //}
    console.log("nmnsdm");
}
function inicio() {
    let flechaMenu = document.querySelector('#flechaMenuDinamico');
    flechaMenu.addEventListener('onclick', manejadorVisualizacionMenu, false);
}

window.addEventListener('load', inicio, false);