var MemoriaHTML = require('./html/Memoria.html');
var MemoriaCSS = require('./css/Memoria.css');
var contenedorJuego;
var cuadricula, puntaje, siguienteJuego, barra, moneda;
//var floodfill = require('./../lib/floodfill.js');
function comenzarJuegoExterno() {
  document.getElementsByTagName('canvas')[0].style.display = 'none';
  document.body.insertAdjacentHTML('beforeend', MemoriaHTML);
  contenedorJuego = document.getElementById('contenedorJuego');
  contenedorJuego.insertAdjacentHTML(
    'afterbegin',
    `<style>${MemoriaCSS[0][1]}<style>`
  );
  start();
  function start() {
    puntaje = document.getElementById('puntaje');
    siguienteJuego = document.getElementById('siguienteJuego');
    barra = document.getElementById('barra');
    moneda = document.getElementById('moneda');
    cuadricula = document.getElementById('cuadricula');

    random();
    adjust([puntaje], 1.1);
    var cardList = document.getElementsByClassName('card');
    for (var i = cardList.length - 1; i >= 0; i--) {
      cardList[i].addEventListener('click', flip);
    }
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
  }
  function flip(e) {
    if (e.target.className == 'card') {
      e.target.setAttribute('class', 'card flipped');
      var cardFlippeds = cuadricula.getElementsByClassName('card flipped');
      if (cardFlippeds.length == 2) {
        if (sonInguales(cardFlippeds[0], cardFlippeds[1])) {
          var match1 = cardFlippeds[0];
          var match2 = cardFlippeds[1];
          match1.setAttribute('class', 'card flippedMatch');
          match2.setAttribute('class', 'card flippedMatch');
          setTimeout(function() {
            match1.parentElement.style.transform = 'scale(0,0)';
            match2.parentElement.style.transform = 'scale(0,0)';
            var cardFlippeds = cuadricula.getElementsByClassName(
              'card flippedMatch'
            );
            if (cardFlippeds.length == cuadricula.children.length) {
              setTimeout(function() {
                for (var i = cardFlippeds.length - 1; i >= 0; i--) {
                  cardFlippeds[i].parentElement.parentElement.style.opacity =
                    '0';
                }
                barra.children[0].style.display = 'none';

                puntaje.innerHTML = '10';
                moneda.style.animation = 'girarMoneda 0.9s 1';

                siguienteJuego.style.display = 'block';
                siguienteJuego.style.animation =
                  'siguienteJuegoAnimacion 1s infinite';
              }, 500);
            }
          }, 700);
        }
      } else if (cardFlippeds.length == 3) {
        for (var i = cardFlippeds.length - 1; i >= 0; i--) {
          if (cardFlippeds[i] != e.target) {
            cardFlippeds[i].setAttribute('class', 'card');
          }
        }
      }
    } else if (e.target.className == 'card flipped') {
      e.target.setAttribute('class', 'card');
    }
  }
  function sonInguales(card1, card2) {
    if (
      card1.children[1].children[0].src == card2.children[1].children[0].src
    ) {
      return true;
    }
    return false;
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
  function random() {
    var imageList = [
      require('./assets/ensaladaFrutas.jpg'),
      require('./assets/ensaladaVegetales.jpg'),
      require('./assets/naranjada.jpg'),
      require('./assets/sandia.jpg'),
      require('./assets/pastaDientes.jpg'),
      require('./assets/talco.jpg'),
      require('./assets/desodorante.gif'),
      require('./assets/jabon.jpg'),
    ];
    imageList = imageList.concat(imageList);
    var cardList = document.getElementsByClassName('card');
    for (var i = cardList.length - 1; i >= 0; i--) {
      var x = Math.floor(Math.random() * imageList.length + 0);

      cardList[i].children[1].children[0].src = imageList[x];
      imageList.splice(x, 1);
    }
  }

  function siguienteJuegoPhaser() {
    document.body.removeChild(document.getElementById('contenedorJuego'));
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    Memoria.game.state.start('DefinisteTuSueno');
  }
}

var Memoria = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default Memoria;
