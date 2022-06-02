const botonMedellin = document.getElementById('medellin_');
const botonCali = document.getElementById("cali_");
const botonCartagena = document.getElementById("cartagena_");
const botonBarranquila = document.getElementById("barranquilla_");

botonMedellin.addEventListener("click", function() {
    window.location.href = "/ruta_Medellin";    
});

botonCali.addEventListener("click", function(){
    window.location.href = "/ruta_Cali";    
});

botonCartagena.addEventListener("click", function() {
    window.location.href = "/ruta_Cartagena";    
});

botonBarranquila.addEventListener("click", function() {
    window.location.href = "/ruta_Barranquilla";    
});

