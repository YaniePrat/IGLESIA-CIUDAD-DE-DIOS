const boton = document.querySelector('#boton1');
boton.addEventListener('click', () => IraSecciones("doctrina"));

const boton2 = document.querySelector("#boton2")
boton2.addEventListener('click', () => IraSecciones("contacto"));


function IraSecciones(section) {
    const seccionDestino = document.getElementById(section);
    window.scrollTo(0, seccionDestino.offsetTop - 100)
}

