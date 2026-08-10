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

    const cafetin = document.getElementById("cafetin");

    if (porcentaje < 25) {

    cafetin.src = "assets/img/cafetin1.png";

} else if (porcentaje < 50) {

    cafetin.src = "assets/img/cafetin2.png";

} else if (porcentaje < 75) {

    cafetin.src = "assets/img/cafetin3.png";

} else if (porcentaje < 100) {

    cafetin.src = "assets/img/cafetin4.png";

} else {

    cafetin.src = "assets/img/cafetin5.png";

}

    const faltante = datos.meta - datos.recaudado;

    document.getElementById("faltante").textContent =
        "Nos faltan $" + faltante.toLocaleString("es-CL");

    document.getElementById("porcentaje").textContent =
        porcentaje.toFixed(1) + "%";

    document.getElementById("progreso").style.width =
        porcentaje + "%";

});