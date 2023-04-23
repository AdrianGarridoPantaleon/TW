// ! Animación de la pelota de tenis en la parte inferior
window.addEventListener("load", () => {
    let sUsrAg = navigator.userAgent;
    let navegador = sUsrAg.indexOf("Chrome") > -1;
    var tiempo_banner = 30000;

    if (navegador) {

        var elem = document.getElementById("Animation");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 1050) {
                inverso = 1;
            } else if (pos == 0) {
                inverso = 0;
            } if (inverso == 0) {
                pos++;
                elem.style.right = pos + 'px';
            } else {
                pos--;
                elem.style.right = pos + 'px';
            }
        }
        window.setTimeout(quitar, tiempo_banner);
    }
    else {
        document.getElementById("Animation").style.display = "none";
    }
    /* funcion para hacer que se quite la imagen */
    function quitar() {
        document.getElementById("Animation").style.display = "none";
    }
})
// ! Animación del primer banner que anuncia como abrir la parte oculta
window.addEventListener("load", () => {
    let sUsrAg = navigator.userAgent;
    let navegador = sUsrAg.indexOf("Chrome") > -1;
    var tiempo_banner = 10000;

    if (navegador) {

        var elem = document.getElementById("banner");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 927) {
                inverso = 1;
            } else if (pos == 0) {
                inverso = 0;
            } if (inverso == 0) {
                pos++;
                elem.style.left = pos + 'px';
            } else {
                pos--;
                elem.style.left = pos + 'px';
            }
        }
        window.setTimeout(quitar, tiempo_banner);
    }
    else {
        document.getElementById("banner").style.display = "none";
    }

    /* funcion para hacer que se quite la imagen */
    function quitar() {
        document.getElementById("banner").style.display = "none";
    }
})
// ! Animación del segundo banner que anuncia como cerrar la parte oculta
window.addEventListener("load", () => {
    let sUsrAg = navigator.userAgent;
    let navegador = sUsrAg.indexOf("Chrome") > -1;
    var tiempo_banner = 10000;

    if (navegador) {

        var elem = document.getElementById("banner1");
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos == 927) {
                inverso = 1;
            } else if (pos == 0) {
                inverso = 0;
            } if (inverso == 0) {
                pos++;
                elem.style.right = pos + 'px';
            } else {
                pos--;
                elem.style.right = pos + 'px';
            }
        }
        window.setTimeout(quitar, tiempo_banner);
    }
    else {
        document.getElementById("banner1").style.display = "none";
    }

    // ! Funcion para hacer que se quite la animación 
    function quitar() {
        document.getElementById("banner1").style.display = "none";
    }
})
// ! Funcion que oculta las noticias deseadas
function ocultar() {
    document.getElementById("oculto1").style.display = "none";
    document.getElementById("oculto2").style.display = "none";
    document.getElementById("dosdos").style.display = "none";
    document.getElementById("dosdos").style.display = "none";
    document.getElementById("restringido").style.display = "block";
}
// ! Funcion que muestra las noticias deseadas
function mostrar() {
    document.getElementById("oculto1").style.display = "block";
    document.getElementById("oculto2").style.display = "block";
    document.getElementById("dosdos").style.display = "block";
    document.getElementById("dosdos").style.display = "block";
    document.getElementById("restringido").style.display = "none";
}