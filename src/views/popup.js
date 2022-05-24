var btnAbrirPopup = document.getElementById('abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarPopup = document.getElementById('btn-cerrar');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    
});

btncerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    
});