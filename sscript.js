// script para Acerca de.. Tengo entendido que un mismo archivo .js puede ser usado por varias paginas html
// pero no estaba funcionando bien en este caso, asi que hice uno aparte.
// ocultar y mostrar contenido en acerca de
const botonocultar = document.getElementById('ocultar');
const parrafocambiante = document.getElementById('contenidoOculto');
 botonocultar.addEventListener('click', function() {;
        if (parrafocambiante.style.display === "none") {
            parrafocambiante.style.display = "block";
            botonocultar.textContent = "Ocultar";
        } else {
            parrafocambiante.style.display = "none";
            botonocultar.textContent = "Ver más";
        }
    });