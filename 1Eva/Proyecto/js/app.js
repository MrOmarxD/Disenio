// Lista desplagable
var botMenu = document.getElementById('botMenu');
var menu = document.getElementsByClassName('menu')[0];

botMenu.addEventListener('click', ()=>{
    menu.classList.toggle("menu_visible");

    if(menu.classList.contains('menu_visible'))
        menu.setAttribute('aria-label', 'Cerrar menú');
    else
        menu.setAttribute('aria-label', 'Abrir menú');
});

// Cookies
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});