var LosValores1HTML = require('./html/LosValores1.html');
var LosValores1CSS = require('./css/LosValores1.css');
var contenedorJuego;
var opcionesChild;
var target = null;
var X, Y, opciones, contenedor, puntaje, siguienteJuego, barra, moneda, imagen;
var flagUp = false;
//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', LosValores1HTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${LosValores1CSS[0][1]}<style>`
  );
  start();
  function start() {
    contenedor = document.getElementById('contenedor');
    puntaje = document.getElementById('puntaje');
    siguienteJuego = document.getElementById('siguienteJuego');
    barra = document.getElementById('barra');
    moneda = document.getElementById('moneda');
    imagen = document.getElementById('imagen');

    opcionesChild = document.getElementsByClassName('opcion');
    opciones = document.getElementsByClassName('opciones')[0];
    contenedor.addEventListener('touchstart', handlestart);
    contenedor.addEventListener('touchmove', handlemove);
    contenedor.addEventListener('touchend', handleup);
    contenedor.addEventListener('mousedown', handlestart);
    contenedor.addEventListener('mousemove', handlemove);
    contenedor.addEventListener('mouseup', handleup);
    adjust(opcionesChild, 1);
    adjust([puntaje], 1);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
  }
  function handlestart(e) {
    e.preventDefault();
    var egeneral;
    if (e.type == 'touchstart') {
      egeneral = e.touches[0];
    } else {
      egeneral = e;
    }
    if (
      target == null &&
      (egeneral.target.getAttribute('class') == 'opcion' ||
        egeneral.target.getAttribute('class') == 'colocado')
    ) {
      target = egeneral.target;
      flagUp = true;
      X = egeneral.clientX - opciones.getBoundingClientRect().left;
      Y = egeneral.clientY - opciones.getBoundingClientRect().top;
    }
  }
  function handlemove(e) {
    e.preventDefault();
    var egeneral;
    if (e.type == 'touchmove') {
      egeneral = e.touches[0];
    } else {
      egeneral = e;
    }

    if (target && flagUp) {
      var tx =
        parseInt(egeneral.clientX - opciones.getBoundingClientRect().left) -
        parseInt(X);
      var ty =
        parseInt(egeneral.clientY - opciones.getBoundingClientRect().top) -
        parseInt(Y);
      target.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
    }
  }
  function handleup(e) {
    e.preventDefault();
    var egeneral;
    if (e.type == 'touchend') {
      egeneral = e.changedTouches[0];
    } else {
      egeneral = e;
    }
    if (e.target == target) {
      var elementos = document.elementsFromPoint(
        egeneral.clientX,
        egeneral.clientY
      );
      if (
        (elementos[1].getAttribute('class') == 'palabrasAflatoun' ||
          elementos[1].parentElement.getAttribute('class') ==
            'palabrasAflatoun') &&
        target.parentElement != elementos[1]
      ) {
        var cuadroPalabra;
        if (elementos[1].getAttribute('class') == 'palabrasAflatoun') {
          cuadroPalabra = elementos[1];
        } else {
          cuadroPalabra = elementos[1].parentElement;
        }

        cuadroPalabra.style.animation = null;
        var color = window
          .getComputedStyle(target, null)
          .getPropertyValue('color');
        target.parentElement.removeChild(target);
        target.style.transform = null;
        target.setAttribute('class', 'colocado');
        target.style.color = color;

        cuadroPalabra.appendChild(target);
        adjust(cuadroPalabra.children);
        if (sonIguales() && opciones.children.length == 0) {
          opciones.style.padding = '0%';
          opciones.style.height = '0%';
          puntaje.innerHTML = '10';
          moneda.style.animation = 'girarMoneda 0.9s 1';
          setTimeout(function() {
            moneda.style.animation = null;
          }, 400);
          var palabrasAflatoun = document.getElementsByClassName(
            'palabrasAflatoun'
          );
          palabrasAflatoun[0].style.pointerEvents = 'none';
          palabrasAflatoun[1].style.pointerEvents = 'none';

          barra.children[0].style.display = 'none';
          siguienteJuego.style.display = 'block';
          siguienteJuego.style.animation =
            'siguienteJuegoAnimacion 1s infinite';
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
  function adjust(list, divider) {
    for (var i = list.length - 1; i >= 0; i--) {
      list[i].style.fontSize =
        list[i].getBoundingClientRect().height / divider + 'px';
    }
  }
  function sonIguales() {
    var palabrasAflatoun = document.getElementsByClassName('palabrasAflatoun');

    for (var i = palabrasAflatoun.length - 1; i >= 0; i--) {
      var childs = palabrasAflatoun[i].children;
      for (var j = childs.length - 1; j >= 0; j--) {
        if (
          childs[j].getAttribute('data-es-aflatoun') !=
          childs[j].parentElement.getAttribute('data-es-aflatoun')
        ) {
          imagen.style.opacity = '1';
          return false;
        }
      }
    }
    imagen.style.opacity = '0';
    return true;
  }

  function siguienteJuegoPhaser() {
    document.body.removeChild(document.getElementById('contenedorJuego'));
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    LosValores1.game.state.start('DefinisteTuSueno');
  }
}

var LosValores1 = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default LosValores1;
