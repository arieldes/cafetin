fetch("datos.json")
.then(response => response.json())
.then(datos => {

    document.getElementById("titulo").textContent = datos.titulo;

    document.getElementById("mensaje").textContent = datos.mensaje;

    document.getElementById("meta").textContent =
        "$" + datos.meta.toLocaleString("es-CL");

    document.getElementById("recaudado").textContent =
        "$" + datos.recaudado.toLocaleString("es-CL");

    document.getElementById("fecha").textContent =
        datos.ultimaActualizacion;

    const porcentaje =
        (datos.recaudado / datos.meta) * 100;

    document.getElementById("porcentaje").textContent =
        porcentaje.toFixed(1) + "%";

    document.getElementById("progreso").style.width =
        porcentaje + "%";

});