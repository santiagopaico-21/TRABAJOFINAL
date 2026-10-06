const formulario = document.getElementById("formRegistro");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const telefono = document.getElementById("telefono");
const programa = document.getElementById("programa");
const mensaje = document.getElementById("alertaExito");

function elegirPrograma(carrera) {
    programa.value = carrera;
    mensaje.hidden = true;
}

nombre.addEventListener("input", function () {
    if (nombre.value.trim().length < 2) {
        nombre.setCustomValidity("Escribe un nombre válido.");
    } else {
        nombre.setCustomValidity("");
    }
})

formulario.addEventListener("change", function () {
    mensaje.hidden = true;
})

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    nombre.value = nombre.value.trim();
    correo.value = correo.value.trim();
    telefono.value = telefono.value.trim();

    if (nombre.value.length < 2) {
        nombre.setCustomValidity("Escribe un nombre válido.");
    }

    if (!formulario.reportValidity()) {
        return;
    }

    const carrera = programa.options[programa.selectedIndex].text;

    mensaje.textContent = "¡Gracias, " + nombre.value + "!Completaste tu registro para " + carrera + ".";
    mensaje.hidden = false;
});

formulario.addEventListener("reset", function () {
    nombre.setCustomValidity("");
    mensaje.hidden = true;
    mensaje.textContent = "";
});