var CompletarAflatoun2HTML = require('./html/CompletarAflatoun2.html');
var CompletarAflatoun2CSS = require('./css/CompletarAflatoun2.css');
var contenedorJuego;
var target;
var X,
  Y,
  opciones,
  cajasBlancas,
  opcionesChild,
  contenedor,
  siguienteJuego,
  puntaje,
  moneda,
  barra;
var flagUp = false;

//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', CompletarAflatoun2HTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${CompletarAflatoun2CSS[0][1]}<style>`
  );
  start();
  function start() {
    opcionesChild = document.getElementsByClassName('opcion');
    cajasBlancas = document.getElementsByClassName('cajaBlanca');
    opciones = document.getElementsByClassName('opciones')[0];
    contenedor = document.getElementById('contenedor');
    siguienteJuego = document.getElementById('siguienteJuego');
    puntaje = document.getElementById('puntaje');
    moneda = document.getElementById('moneda');
    barra = document.getElementById('barra');

    contenedor.addEventListener('touchstart', handlestart);
    contenedor.addEventListener('touchmove', handlemove);
    contenedor.addEventListener('touchend', handleup);
    contenedor.addEventListener('mousedown', handlestart);
    contenedor.addEventListener('mousemove', handlemove);
    contenedor.addEventListener('mouseup', handleup);
    adjust(opcionesChild, 1.1);
    adjust(cajasBlancas, 1.1);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
    adjust([puntaje], 1);
  }
  function handlestart(e) {
    e.preventDefault();
    if (e.target.getAttribute('class') == 'opcion' && target == null) {
      var clientX, clientY;
      if (e.type == 'touchstart') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      target = e.target;
      flagUp = true;
      X = clientX - opciones.getBoundingClientRect().left;
      Y = clientY - opciones.getBoundingClientRect().top;
    }
  }
  function handlemove(e) {
    e.preventDefault();
    if (target != null && flagUp) {
      var clientX, clientY;
      if (e.type == 'touchmove') {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      var tx =
        parseInt(clientX - opciones.getBoundingClientRect().left) - parseInt(X);
      var ty =
        parseInt(clientY - opciones.getBoundingClientRect().top) - parseInt(Y);
      target.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
    }
  }
  function handleup(e) {
    e.preventDefault();
    var backElement;
    if (target) {
      var x, y;

      if (e.type == 'touchend') {
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      var elementos = document.elementsFromPoint(x, y);
      if (
        elementos[1].getAttribute('class') == 'cajaBlanca' ||
        elementos[0].getAttribute('class') == 'cajaBlanca'
      ) {
        backElement =
          elementos[0].getAttribute('class') == 'cajaBlanca'
            ? elementos[0]
            : elementos[1];
        backElement.style.animation = null;
        if (backElement.getAttribute('data-respuesta') == target.innerHTML) {
          backElement.innerHTML = target.innerHTML;
          backElement.style.width = 'auto';
          target.parentElement.removeChild(target);
          opciones.style.maxHeight = '900px';
          if (completado()) {
            opciones.style.padding = '0%';
            opciones.style.height = '0%';
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
          void backElement.offsetWidth;
          backElement.style.animation = 'incorrecta 0.2s 1';
        }
      }
      flagUp = false;
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
    CompletarAflatoun2.game.state.start('DefinisteTuSueno');
  }
}

var CompletarAflatoun2 = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default CompletarAflatoun2;
