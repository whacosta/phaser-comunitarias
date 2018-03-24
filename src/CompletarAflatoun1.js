var CompletarAflatoun1HTML = require('./html/CompletarAflatoun1.html');
var CompletarAflatoun1CSS = require('./css/CompletarAflatoun1.css');
var contenedorJuego;
var target = null;
var X, Y, opciones, contenedor, siguienteJuego, puntaje, moneda, barra;

//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', CompletarAflatoun1HTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${CompletarAflatoun1CSS[0][1]}<style>`
  );
  start();
  function start() {
    opciones = document.getElementsByClassName('opciones')[0];
    contenedor = document.getElementById('contenedor');
    siguienteJuego = document.getElementById('siguienteJuego');
    puntaje = document.getElementById('puntaje');
    moneda = document.getElementById('moneda');
    barra = document.getElementById('barra');
    contenedor.addEventListener('touchstart', handlestart);
    contenedor.addEventListener('touchmove', handlemove);
    contenedor.addEventListener('touchend', handleup);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
    adjust([puntaje], 1);
  }
  function handlestart(e) {
    e.preventDefault();
    if (
      target == null &&
      e.touches[0].target.getAttribute('class') == 'opcion'
    ) {
      target = e.touches[0].target;
      X = e.touches[0].clientX - opciones.getBoundingClientRect().left;
      Y = e.touches[0].clientY - opciones.getBoundingClientRect().top;
    }
  }
  function handlemove(e) {
    e.preventDefault();
    if (e.touches[0].target == target) {
      var tx =
        parseInt(e.touches[0].clientX - opciones.getBoundingClientRect().left) -
        parseInt(X);
      var ty =
        parseInt(e.touches[0].clientY - opciones.getBoundingClientRect().top) -
        parseInt(Y);
      target.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
    }
  }
  function handleup(e) {
    e.preventDefault();
    if (e.target == target) {
      var elementos = document.elementsFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
      if (elementos[1].getAttribute('class') == 'cajaBlanca') {
        elementos[1].style.animation = null;
        if (elementos[1].getAttribute('data-respuesta') == target.innerHTML) {
          elementos[1].innerHTML = target.innerHTML;
          elementos[1].style.width = 'auto';
          target.parentElement.removeChild(target);
          opciones.style.maxHeight = '900px';
          if (completado()) {
            puntaje.innerHTML = '10';
            moneda.style.animation = 'girarMoneda 0.6s 1';
            setTimeout(function() {
              moneda.style.animation = null;
            }, 600);
            barra.children[0].style.display = 'none';
            siguienteJuego.style.display = 'block';
            siguienteJuego.style.animation =
              'siguienteJuegoAnimacion 1s infinite';
          }
        } else {
          void elementos[1].offsetWidth;
          elementos[1].style.animation = 'incorrecta 0.2s 1';
        }
      }
      target.style.transition = '0.3s';
      target.style.transform = 'translate(0px,0px)';
      setTimeout(function() {
        target.style.transition = null;
        target.style.transform = null;
        target = null;
      }, 300);
    }
  }

  function completado() {
    var a = document.getElementsByClassName('cajaBlanca');
    var cont = 0;
    for (var i = a.length - 1; i >= 0; i--) {
      if (a[i].innerHTML != '') {
        cont = cont + 1;
      }
    }
    if (cont == a.length) {
      return true;
    } else {
      false;
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
    CompletarAflatoun1.game.state.start('DefinisteTuSueno');
  }
}

var CompletarAflatoun1 = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default CompletarAflatoun1;
