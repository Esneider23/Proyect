const toggleButon = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
toggleButon.addEventListener("click", function() {
    for(let i = 0; i < navbarLinks.length; i++){
        navbarLinks[i].classList.toggle("active");
    }
});

const botonInicio = document.getElementById("inicio_");
const botonRutas = document.getElementById("rutas_");
const botonLogin = document.getElementById("login_");

botonInicio.addEventListener("click", function() {
    window.location.href = "/";    
});

botonRutas.addEventListener("click", function() {
    window.location.href = "/rutas";    
});

botonLogin.addEventListener("click", function() {
    window.location.href = "/signin";    
});