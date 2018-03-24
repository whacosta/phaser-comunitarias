var IdentificandoAflatounHTML = require('./html/IdentificandoAflatoun.html');
var IdentificandoAflatounCSS = require('./css/IdentificandoAflatoun.css');
var contenedorJuego,
  palabrasCuadro,
  seleccionada,
  puntaje,
  siguienteJuego,
  baul,
  barra,
  moneda;
//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', IdentificandoAflatounHTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${IdentificandoAflatounCSS[0][1]}<style>`
  );
  start();
  function start() {
    palabrasCuadro = document.getElementsByClassName('palabra');
    puntaje = document.getElementById('puntaje');
    siguienteJuego = document.getElementById('siguienteJuego');
    baul = document.getElementById('baul');
    barra = document.getElementById('barra');
    moneda = document.getElementById('moneda');
    for (var i = palabrasCuadro.length - 1; i >= 0; i--) {
      palabrasCuadro[i].addEventListener('click', handleClick);
    }
    adjust([puntaje], 1.1);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
  }
  function handleClick(e) {
    e.preventDefault();
    seleccionada = e.target;
    seleccionada.style.animation = null;
    if (e.target.getAttribute('data-is-aflatoun') == 'true') {
      seleccionada = seleccionada.parentElement.removeChild(seleccionada);
      seleccionada.setAttribute('class', 'palabraBaul');
      seleccionada.style.animation = 'palabraBaulAnimacion 2s infinite';
      seleccionada.removeEventListener('click', handleClick);
      baul.appendChild(seleccionada);
      if (baul.children.length == 7) {
        barra.children[0].style.display = 'none';
        puntaje.innerHTML = '10';
        moneda.style.animation = 'girarMoneda 0.9s 1';

        siguienteJuego.style.display = 'block';
        siguienteJuego.style.animation = 'siguienteJuegoAnimacion 1s infinite';
      }
    } else {
      void seleccionada.offsetWidth;
      seleccionada.style.animation = 'bloqueado 0.2s 1';
    }
  }
  function adjust(list, divider) {
    for (var i = list.length - 1; i >= 0; i--) {
      list[i].style.fontSize =
        list[i].getBoundingClientRect().height / divider + 'px';
    }
  }

  function siguienteJuegoPhaser() {
    document.body.removeChild(document.getElementById('contenedorJuego'));
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    IdentificandoAflatoun.game.state.start('DefinisteTuSueno');
  }
}

var IdentificandoAflatoun = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default IdentificandoAflatoun;
