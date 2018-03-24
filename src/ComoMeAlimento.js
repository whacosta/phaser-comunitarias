var ComoMeAlimentoHTML = require('./html/ComoMeAlimento.html');
var ComoMeAlimentoCSS = require('./css/ComoMeAlimento.css');
var contenedorJuego;
var preguntas;
var opcionGenerales;
var opcionLetras;
var correctas = 0;
var puntaje;
var siguienteJuego;
var barra;
var contenedorOverlay;
var moneda;
//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', ComoMeAlimentoHTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${ComoMeAlimentoCSS[0][1]}<style>`
  );
  start();
  function start() {
    puntaje = document.getElementById('puntaje');
    siguienteJuego = document.getElementById('siguienteJuego');
    contenedorOverlay = document.getElementById('contenedorOverlay');
    barra = document.getElementById('barra');
    moneda = document.getElementById('moneda');

    preguntas = document.getElementsByClassName('pregunta');
    opcionLetras = document.getElementsByClassName('opcionLetra');
    opcionGenerales = document.getElementsByClassName('opcionGeneral');
    for (var i = opcionGenerales.length - 1; i >= 0; i--) {
      opcionGenerales[i].addEventListener('click', handleClick);
    }
    adjust([puntaje], 1.1);
    adjust(preguntas, 1.1);
    adjust(opcionLetras, 1);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
  }
  function adjust(list, divider) {
    for (var i = list.length - 1; i >= 0; i--) {
      list[i].style.fontSize =
        parseFloat(
          window
            .getComputedStyle(list[i], null)
            .getPropertyValue('height')
            .split('px')[0]
        ) /
          divider +
        'px';
    }
  }
  function handleClick(e) {
    var target = e.target;
    e.preventDefault();

    if (
      target.getAttribute('data-correcta') == 'true' &&
      window
        .getComputedStyle(target, null)
        .getPropertyValue('background-color') == 'rgb(255, 192, 203)'
    ) {
      target.style.background = 'green';
      correctas = correctas + 1;
      if (correctas == preguntas.length) {
        setTimeout(function() {
          contenedorOverlay.style.display = 'block';
          contenedorOverlay.style.opacity = '1';
          barra.children[0].style.display = 'none';

          puntaje.innerHTML = '10';
          moneda.style.animation = 'girarMoneda 0.9s 1';
          siguienteJuego.style.display = 'block';
          siguienteJuego.style.animation =
            'siguienteJuegoAnimacion 1s infinite';
        }, 300);
      }
    } else {
      target.style.animation = 'incorrecta 0.1s 2';
      setTimeout(function() {
        target.style.animation = null;
      }, 100);
    }
  }

  function siguienteJuegoPhaser() {
    document.body.removeChild(document.getElementById('contenedorJuego'));
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    ComoMeAlimento.game.state.start('DefinisteTuSueno');
  }
}

var ComoMeAlimento = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default ComoMeAlimento;
