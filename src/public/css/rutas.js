const botonMedellin = document.getElementById('medellin_');

const botonCali = document.getElementById("cali_");
const botonCartagena = document.getElementById("cartagena_");
const botonBarranquila = document.getElementById("barranquilla_");

botonMedellin.addEventListener("click", function() {
    window.location.href = "/Medellin";    
});

botonCali.addEventListener("click", function(){
    window.location.href = "/Cali";    
});

botonCartagena.addEventListener("click", function() {
    window.location.href = "/Cartagena";    
});

botonBarranquila.addEventListener("click", function() {
    window.location.href = "/Barranquilla";    
});
