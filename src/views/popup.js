var btnAbrirPopup = document.getElementById('barranquilla'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarPopup = document.getElementById('btn-cerrar');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btncerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});


// 2
var btnAbrirPopup2 = document.getElementById('cali_'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btncerrarPopup2 = document.getElementById('btn-cerrar2');

btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btncerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});


// 3
var btnAbrirPopup3 = document.getElementById('cartagena_'),
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btncerrarPopup3 = document.getElementById('btn-cerrar3');

btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

btncerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});


// 4
var btnAbrirPopup4 = document.getElementById('medellin_'),
    overlay4 = document.getElementById('overlay4'),
    popup4 = document.getElementById('popup4'),
    btncerrarPopup4 = document.getElementById('btn-cerrar4');

btnAbrirPopup4.addEventListener('click', function(){
    overlay4.classList.add('active');
    popup4.classList.add('active');
});

btncerrarPopup4.addEventListener('click', function(){
    overlay4.classList.remove('active');
    popup4.classList.remove('active');
});