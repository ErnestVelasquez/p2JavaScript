// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('btnCambiarTexto').addEventListener('click', cambiarTexto);
    document.getElementById('btnCambiarColor').addEventListener('click', cambiarColor);
    document.getElementById('btnCambiarAlineacion').addEventListener('click', cambiarAlineacion);
    document.getElementById('btnCrearTexto').addEventListener('click', crearTexto);
    document.getElementById('btnBorrarTexto').addEventListener('click', borrarTexto);
});

// Función cambiarTexto
function cambiarTexto() {
    document.getElementById("titulo").innerText = "Hola Mundo con JavaScript";
}

// Función cambiarColor
function cambiarColor() {
    document.getElementById("titulo").style.color = "red";
}

// Función cambiarAlineacion
function cambiarAlineacion() {
    document.getElementById("titulo").style.textAlign = "center";
}

// Función crearTexto
function crearTexto() {
    const nuevoTexto = document.createElement("p");
    nuevoTexto.id = "nuevoTexto";
    nuevoTexto.innerText = "JavaScript permite crear páginas dinámicas";
    document.body.appendChild(nuevoTexto);
}

// Función borrarTexto
function borrarTexto() {
    const nuevoTexto = document.getElementById("nuevoTexto");
    if (nuevoTexto) {
        document.body.removeChild(nuevoTexto);
    }
}
