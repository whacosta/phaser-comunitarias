/* global misvg, moneda, siguienteJuego, puntaje */
var ProfesionesArrastrablesHtml = require('./html/ProfesionesArrastrables.html');
import monedaRuta from './assets/coin.png';
import bubble from './assets/bubble2.mp3';
import bubbleEnd1 from './assets/bubbleEnd1.mp3';
import bubbleWrong from './assets/bubbleWrong.mp3';
import ProfesionesCruzadas from './ProfesionesCruzadas.ts';

function comenzarJuegoExterno() {
  var juegoStyle =
    '*,body,html{margin:0;padding:0}body,html{height:100%;overflow:hidden}#navBar{background:#282d2d;height:10%}#moneda,#puntaje{float:right;height:100%}#moneda img{transition:.5s}#puntaje{color:#fff;text-align:center;font-size:7vh}#siguienteJuego{float:left;width:20%;height:100%;background:rgba(0,210,0,1);margin-left:35%;border-radius:2px;opacity:0;text-align:center;display:none}#siguienteJuego:hover{cursor:pointer}#siguienteJuego i{color:#ededed;font-size:10vh}#misvg{background:rgba(20,140,220,.6);width:100%;height:90%}.imagenArrastrable{opacity:1}.recta{stroke:#000;stroke-width:7;stroke-opacity:.8;fill:red;fill-opacity:.5;transition:.11s}.rectaHover{fill-opacity:.8;fill:#00f000}.imagenCaja{opacity:1;pointer-events:none;transition:.11s}.rectaOcupada{stroke:#000;fill:#fff;transition:.6s;fill-opacity:.7}.imagenCajaEnlazada{transition:.6s;opacity:0}@keyframes example{0%,100%{transform:scale(1)}30%,70%{transform:scale(1.01)}}@keyframes girarMoneda{0%,100%{transform:rotateY(0) scale(1)}50%{transform:rotateY(360deg) scale(1.3)}}@keyframes siguienteJuegoAnimacion{0%,100%{opacity:.2}50%{opacity:1}}';
  var bubble1Sound;
  var bubble1SoundEnd;
  var bubbleWrongSound;
  var isDragging;
  var X;
  var Y;
  var target;
  var backElement = null;

  start();

  function colocarCajas() {
    var rectas = document.getElementsByClassName('recta');
    var imagenes = document.getElementsByClassName('imagenCaja');
    var imagenesArrastrables = document.getElementsByClassName(
      'imagenArrastrable'
    );
    for (var i = 0; i < rectas.length; i++) {
      if (i == 0) {
        rectas[i].setAttribute(
          'x',
          parseInt(1.5 / 100 * misvg.getAttribute('width'))
        );
        rectas[i].setAttribute(
          'y',
          parseInt(2 / 100 * misvg.getAttribute('width'))
        );
        rectas[i].setAttribute(
          'width',
          parseInt(14.5 / 100 * misvg.getAttribute('width'))
        );
        rectas[i].setAttribute(
          'height',
          parseInt(45 / 100 * misvg.getAttribute('height'))
        );
        rectas[i].setAttribute('indexImg', i);

        var margenLeft = parseInt(
          (parseInt(rectas[i].getAttribute('width')) -
            0.6 * parseInt(rectas[i].getAttribute('width'))) /
            2
        );
        var margenTop = parseInt(
          (parseInt(rectas[i].getAttribute('height')) -
            0.6 * parseInt(rectas[i].getAttribute('height'))) /
            2
        );

        imagenes[i].setAttribute(
          'x',
          parseInt(rectas[i].getAttribute('x')) + margenLeft
        );
        imagenes[i].setAttribute(
          'y',
          parseInt(rectas[i].getAttribute('y')) + margenTop
        );
        imagenes[i].setAttribute(
          'width',
          parseInt(rectas[i].getAttribute('width')) - margenLeft * 2
        );
        imagenes[i].setAttribute(
          'height',
          parseInt(rectas[i].getAttribute('height')) - margenTop * 2
        );
        imagenes[i].setAttribute(
          'href',
          imagenes[i].getAttribute('data-ruta-imagen')
        );

        imagenesArrastrables[i].setAttribute(
          'x',
          parseInt(rectas[i].getAttribute('x'))
        );
        imagenesArrastrables[i].setAttribute(
          'y',
          parseInt(rectas[i].getAttribute('y')) +
            parseInt(rectas[i].getAttribute('height')) +
            15 / 100 * misvg.getAttribute('height')
        );
        imagenesArrastrables[i].setAttribute(
          'width',
          parseInt(rectas[i].getAttribute('width'))
        );
        imagenesArrastrables[i].setAttribute(
          'height',
          35 / 100 * misvg.getAttribute('height')
        );
        imagenesArrastrables[i].setAttribute(
          'href',
          imagenesArrastrables[i].getAttribute('data-ruta-imagen')
        );
      } else {
        rectas[i].setAttribute(
          'x',
          parseInt(rectas[i - 1].getAttribute('x')) +
            parseInt(rectas[i - 1].getAttribute('width')) +
            2 / 100 * misvg.getAttribute('width')
        );
        rectas[i].setAttribute('y', rectas[i - 1].getAttribute('y'));
        rectas[i].setAttribute('width', rectas[i - 1].getAttribute('width'));
        rectas[i].setAttribute('height', rectas[i - 1].getAttribute('height'));
        rectas[i].setAttribute('indexImg', i);

        imagenes[i].setAttribute(
          'x',
          parseInt(rectas[i].getAttribute('x')) + margenLeft
        );
        imagenes[i].setAttribute(
          'y',
          parseInt(rectas[i].getAttribute('y')) + margenTop
        );
        imagenes[i].setAttribute(
          'width',
          parseInt(rectas[i].getAttribute('width')) - margenLeft * 2
        );
        imagenes[i].setAttribute(
          'height',
          parseInt(rectas[i].getAttribute('height')) - margenTop * 2
        );
        imagenes[i].setAttribute(
          'href',
          imagenes[i].getAttribute('data-ruta-imagen')
        );

        imagenesArrastrables[i].setAttribute(
          'x',
          parseInt(rectas[i].getAttribute('x'))
        );
        imagenesArrastrables[i].setAttribute(
          'y',
          parseInt(rectas[i].getAttribute('y')) +
            parseInt(rectas[i].getAttribute('height')) +
            15 / 100 * misvg.getAttribute('height')
        );
        imagenesArrastrables[i].setAttribute(
          'width',
          parseInt(rectas[i].getAttribute('width'))
        );
        imagenesArrastrables[i].setAttribute(
          'height',
          35 / 100 * misvg.getAttribute('height')
        );
        imagenesArrastrables[i].setAttribute(
          'href',
          imagenesArrastrables[i].getAttribute('data-ruta-imagen')
        );
      }
    }
  }
  function start() {
    var head = document.getElementsByTagName('head')[0];
    document.getElementsByTagName('canvas')[0].style.display = 'none';
    document
      .getElementsByTagName('body')[0]
      .insertAdjacentHTML('beforeend', ProfesionesArrastrablesHtml);
    //se crea el estilo necesario para contener el estilo del juego original y ser agregado al index
    var style = document.createElement('style');
    style.setAttribute('id', 'estiloJuegoExterno');

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = juegoStyle;
    } else {
      style.appendChild(document.createTextNode(juegoStyle));
    }

    head.insertAdjacentHTML(
      'beforeend',
      '<link id="fontawesome" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">'
    );
    head.appendChild(style);
    bubble1Sound = new Audio(bubble);
    bubble1SoundEnd = new Audio(bubbleEnd1);
    bubbleWrongSound = new Audio(bubbleWrong);

    misvg.setAttribute('width', parseInt(misvg.getBoundingClientRect().width));
    misvg.setAttribute(
      'height',
      parseInt(misvg.getBoundingClientRect().height)
    );

    colocarCajas();
    moneda.style.width = window
      .getComputedStyle(moneda, null)
      .getPropertyValue('height');
    moneda.children[0].width =
      80 /
      100 *
      parseFloat(
        window.getComputedStyle(moneda, null).getPropertyValue('height')
      );
    moneda.children[0].height =
      80 /
      100 *
      parseFloat(
        window.getComputedStyle(moneda, null).getPropertyValue('height')
      );
    moneda.children[0].src = monedaRuta;
    moneda.children[0].style.margin =
      10 /
        100 *
        parseFloat(
          window.getComputedStyle(moneda, null).getPropertyValue('height')
        ) +
      'px';

    puntaje.style.width = window
      .getComputedStyle(puntaje, null)
      .getPropertyValue('height');

    window.addEventListener('resize', handleResize);
    misvg.addEventListener('mousedown', handleMouseDown, false);
    misvg.addEventListener('mousemove', handleMouseMove, false);
    misvg.addEventListener('mouseup', handleMouseUp, false);

    misvg.addEventListener('touchstart', handleTouchStart, false);
    misvg.addEventListener('touchmove', handleTouchMove, false);
    misvg.addEventListener('touchend', handleTouchEnd, false);
    misvg.addEventListener('touchcancel', handleTouchCancel, false);
    siguienteJuego.addEventListener('click', siguienteJuegoPhaser);
  }
  function siguienteJuegoPhaser() {
    document
      .getElementById('estiloJuegoExterno')
      .parentElement.removeChild(document.getElementById('estiloJuegoExterno'));
    document
      .getElementById('fontawesome')
      .parentElement.removeChild(document.getElementById('fontawesome'));
    window.removeEventListener('resize', handleResize);
    document.body.removeChild(document.getElementById('contenedorJuego'));
    document.getElementsByTagName('canvas')[0].style.display = 'block';
    ProfesionesArrastrables.game.state.add(
      'ProfesionesCruzadas',
      ProfesionesCruzadas
    );
    ProfesionesArrastrables.game.state.start('ProfesionesCruzadas');
  }
  function handleTouchStart(e) {
    e.preventDefault();
    if (
      e.changedTouches[0].target.nodeName != 'svg' &&
      e.changedTouches[0].target.getAttribute('draggable') == 'true'
    ) {
      X = parseInt(
        e.changedTouches[0].clientX - misvg.getBoundingClientRect().left
      );
      Y = parseInt(
        e.changedTouches[0].clientY - misvg.getBoundingClientRect().top
      );
      target = misvg.removeChild(e.changedTouches[0].target);
      misvg.appendChild(target);
      isDragging = true;
    }
  }
  function handleTouchMove(e) {
    e.preventDefault();
    handleMove(e);
  }
  function handleTouchEnd(e) {
    e.preventDefault();
    handleUp(e);
  }
  function handleTouchCancel(e) {
    e.preventDefault();
    isDragging = false;
    target = null;
    backElement = null;
  }
  function handleMouseDown(e) {
    e.preventDefault();
    if (
      e.target.nodeName != 'svg' &&
      e.target.getAttribute('draggable') == 'true'
    ) {
      X = parseInt(e.clientX - misvg.getBoundingClientRect().left);
      Y = parseInt(e.clientY - misvg.getBoundingClientRect().top);
      target = misvg.removeChild(e.target);
      misvg.appendChild(target);
      isDragging = true;
    }
  }
  function handleMouseMove(e) {
    e.preventDefault();
    handleMove(e);
  }
  function handleMouseUp(e) {
    e.preventDefault();
    handleUp(e);
  }

  function setMatrixString(a, b, c, d, e, f) {
    return (
      'matrix(' + a + ',' + b + ',' + c + ',' + d + ',' + e + ',' + f + ')'
    );
  }

  function getMatrix(s) {
    if (s.length >= 0) {
      var substring = s.substring(7, s.length - 1);
      var res = substring.split(',');
      return res;
    }
    return null;
  }

  function scaleCenter(element, scale) {
    var matrixArray = getMatrix(element.getAttribute('transform'));
    var newScale = scale;
    var oldScale = parseFloat(matrixArray[0]);
    var transitionX = parseInt(matrixArray[4]);
    var transitionY = parseInt(matrixArray[5]);

    var centerWidth = oldScale * parseInt(element.getAttribute('width')) / 2;
    var centerHeight = oldScale * parseInt(element.getAttribute('height')) / 2;
    var cx = parseInt(element.getAttribute('x')) + centerWidth + transitionX;
    var cy = parseInt(element.getAttribute('y')) + centerHeight + transitionY;

    var eNew = cx - newScale * cx;
    var fNew = cy - newScale * cy;
    if (window.navigator.userAgent.includes('Firefox')) {
      element.style.transform = setMatrixString(
        newScale,
        0,
        0,
        newScale,
        eNew,
        fNew
      );
    } else {
      element.setAttribute(
        'transform',
        setMatrixString(newScale, 0, 0, newScale, eNew, fNew)
      );
    }
  }

  function handleResize() {
    moneda.style.width = window
      .getComputedStyle(moneda, null)
      .getPropertyValue('height');
    moneda.children[0].width =
      80 /
      100 *
      parseFloat(
        window.getComputedStyle(moneda, null).getPropertyValue('height')
      );
    moneda.children[0].height =
      80 /
      100 *
      parseFloat(
        window.getComputedStyle(moneda, null).getPropertyValue('height')
      );
    moneda.children[0].src = monedaRuta;
    moneda.children[0].style.margin =
      10 /
        100 *
        parseFloat(
          window.getComputedStyle(moneda, null).getPropertyValue('height')
        ) +
      'px';

    puntaje.style.width = window
      .getComputedStyle(puntaje, null)
      .getPropertyValue('height');
    var actualSvgWidth = misvg.getBoundingClientRect().width;
    var actualSvgHeight = misvg.getBoundingClientRect().height;
    var antiguoSvgWidth = parseFloat(misvg.getAttribute('width'));
    var antiguoSvgHeight = parseFloat(misvg.getAttribute('height'));

    misvg.setAttribute('width', actualSvgWidth);
    misvg.setAttribute('height', actualSvgHeight);

    var elementosSvg = misvg.children;
    for (var i = elementosSvg.length - 1; i >= 0; i--) {
      var element = elementosSvg[i];
      var newWidth =
        actualSvgWidth *
        parseFloat(element.getAttribute('width')) /
        parseFloat(antiguoSvgWidth);

      var newHeight =
        actualSvgHeight *
        parseFloat(element.getAttribute('height')) /
        parseFloat(antiguoSvgHeight);
      var matrix = getMatrix(element.getAttribute('transform'));
      var newX =
        actualSvgWidth *
        parseFloat(element.getAttribute('x')) /
        parseFloat(antiguoSvgWidth);
      var newY =
        actualSvgHeight *
        parseFloat(element.getAttribute('y')) /
        parseFloat(antiguoSvgHeight);

      var newTx =
        actualSvgWidth * parseFloat(matrix[4]) / parseFloat(antiguoSvgWidth);
      var newTy =
        actualSvgHeight * parseFloat(matrix[5]) / parseFloat(antiguoSvgHeight);

      element.setAttribute('x', newX);
      element.setAttribute('y', newY);
      element.setAttribute('width', newWidth);
      element.setAttribute('height', newHeight);
      element.setAttribute(
        'transform',
        setMatrixString(1, 0, 0, 1, newTx, newTy)
      );
    }
  }

  function handleMove(e) {
    if (isDragging) {
      var offsetX;
      var offsetY;
      var backElements;
      if (e.type == 'touchmove') {
        offsetX = parseInt(
          e.touches[0].clientX - misvg.getBoundingClientRect().left
        );
        offsetY = parseInt(
          e.touches[0].clientY - misvg.getBoundingClientRect().top
        );
        backElements = document.elementsFromPoint(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY
        );
      } else {
        offsetX = parseInt(e.clientX - misvg.getBoundingClientRect().left);
        offsetY = parseInt(e.clientY - misvg.getBoundingClientRect().top);
        backElements = document.elementsFromPoint(e.clientX, e.clientY);
      }
      if (
        'recta rectaHover'.includes(backElements[1].getAttribute('class')) ||
        'recta rectaHover'.includes(backElements[0].getAttribute('class'))
      ) {
        if (backElement == null) {
          bubble1Sound.currentTime = 0;
          bubble1Sound.play();
          backElement = backElements[0].getAttribute('class').includes('recta')
            ? backElements[0]
            : backElements[1];
          backElement.setAttribute('class', 'recta rectaHover');
          scaleCenter(backElement.nextElementSibling, 1.1);
          scaleCenter(backElement, 1.1);
          window.navigator.vibrate(20);
        } else if (
          (backElements[1].getAttribute('class').includes('recta') &&
            backElements[1] != backElement) ||
          (backElements[0].getAttribute('class').includes('recta') &&
            backElements[0] != backElement)
        ) {
          backElement.setAttribute('class', 'recta');
          scaleCenter(backElement.nextElementSibling, 1);
          scaleCenter(backElement, 1);
          backElement = null;
        }
      } else if (backElement) {
        backElement.setAttribute('class', 'recta');
        scaleCenter(backElement.nextElementSibling, 1);
        scaleCenter(backElement, 1);
        backElement = null;
      }
      var dx = offsetX - X;
      var dy = offsetY - Y;
      target.setAttribute('transform', setMatrixString(1, 0, 0, 1, dx, dy));
    }
  }

  function handleUp(e) {
    var backElements;
    if (e.type == 'touchend') {
      backElements = document.elementsFromPoint(
        e.changedTouches[0].clientX,
        e.changedTouches[0].clientY
      );
    } else {
      backElements = document.elementsFromPoint(e.clientX, e.clientY);
    }
    if (
      backElements[0].getAttribute('class') == 'imagenArrastrable' &&
      backElements[1].getAttribute('class') == 'recta rectaHover'
    ) {
      if (
        backElements[1].getAttribute('data-imagen') ==
        backElements[0].getAttribute('href')
      ) {
        backElements[0].style.transition = '0.2s';
        backElements[1].nextElementSibling.setAttribute(
          'class',
          'imagenCaja imagenCajaEnlazada'
        );
        backElements[1].setAttribute('class', 'recta rectaOcupada');

        bubble1SoundEnd.pause();
        bubble1SoundEnd.currentTime = 0;
        bubble1SoundEnd.play();

        scaleCenter(backElement.nextElementSibling, 1);
        scaleCenter(backElement, 1);
        backElement = null;

        var matrixImagen = getMatrix(backElements[0].getAttribute('transform'));
        var matrixRecta = getMatrix(backElements[1].getAttribute('transform'));

        var dx =
          parseFloat(backElements[0].getAttribute('x')) +
          parseFloat(matrixImagen[4]) -
          (parseFloat(backElements[1].getAttribute('x')) +
            parseFloat(matrixRecta[4]));
        var dy =
          parseFloat(backElements[0].getAttribute('y')) +
          parseFloat(matrixImagen[5]) -
          (parseFloat(backElements[1].getAttribute('y')) +
            parseFloat(matrixRecta[5]));
        var margenLeft =
          (parseFloat(backElements[1].getAttribute('width')) -
            parseFloat(backElements[0].getAttribute('width'))) /
          2;
        var margenTop =
          (parseFloat(backElements[1].getAttribute('height')) -
            parseFloat(backElements[0].getAttribute('height'))) /
          2;
        //Adaptacion a Firefox
        var transitionx = +parseFloat(matrixImagen[4]);
        var transitiony = +parseFloat(matrixImagen[5]);
        if (window.navigator.userAgent.includes('Firefox')) {
          var target2 = backElements[0];
          backElements[0].setAttribute(
            'x',
            parseFloat(backElements[0].getAttribute('x')) + transitionx
          );
          backElements[0].setAttribute(
            'y',
            parseFloat(backElements[0].getAttribute('y')) + transitiony
          );
          backElements[0].setAttribute('transform', 'matrix(1,0,0,1,0,0)');
          backElements[0].style.transform = setMatrixString(
            1,
            0,
            0,
            1,
            -dx + margenLeft,
            -dy + margenTop
          );
          setTimeout(function() {
            target2.removeAttribute('style');
            target2.setAttribute(
              'x',
              parseFloat(target2.getAttribute('x')) - transitionx
            );
            target2.setAttribute(
              'y',
              parseFloat(target2.getAttribute('y')) - transitiony
            );
            target2.setAttribute(
              'transform',
              setMatrixString(
                1,
                0,
                0,
                1,
                parseFloat(matrixImagen[4]) - dx + margenLeft,
                parseFloat(matrixImagen[5]) - dy + margenTop
              )
            );
          }, 1000);
        } else {
          backElements[0].setAttribute(
            'transform',
            setMatrixString(
              1,
              0,
              0,
              1,
              parseFloat(matrixImagen[4]) - dx + margenLeft,
              parseFloat(matrixImagen[5]) - dy + margenTop
            )
          );
        }
        backElements[0].setAttribute('draggable', 'false');
        moneda.children[0].style.animation = 'girarMoneda 0.6s 1';
        setTimeout(function() {
          moneda.children[0].style.animation = null;
        }, 400);
        var ocupados = document.getElementsByClassName('recta rectaOcupada');
        var rectas = document.getElementsByClassName('recta');
        puntaje.innerHTML = ocupados.length;

        if (rectas.length == ocupados.length) {
          document.getElementById('siguienteJuego').style.display = 'block';
          document.getElementById('siguienteJuego').style.animation =
            'siguienteJuegoAnimacion 2s infinite';
        }
      } else if (target) {
        var target3 = target;
        var matrix = getMatrix(target.getAttribute('transform'));
        var transx = +parseFloat(matrix[4]);
        var transy = +parseFloat(matrix[5]);
        var newMatrix = setMatrixString(
          matrix[0],
          matrix[1],
          matrix[2],
          matrix[3],
          0,
          0
        );
        target.setAttribute('draggable', 'false');
        target.style.transition = '0.3s'; //backElements[0] es lo mismo que target
        bubbleWrongSound.currentTime = 0;
        bubbleWrongSound.play();
        //Adaptacion a Firefox
        if (window.navigator.userAgent.includes('Firefox')) {
          target.setAttribute(
            'x',
            parseFloat(target.getAttribute('x')) + transx
          );
          target.setAttribute(
            'y',
            parseFloat(target.getAttribute('y')) + transy
          );
          target.setAttribute('transform', 'matrix(1,0,0,1,0,0)');
          target.style.transform = setMatrixString(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            -transx,
            -transy
          );
          setTimeout(function() {
            target3.removeAttribute('style');
            target3.setAttribute('draggable', 'true');
            target3.setAttribute(
              'x',
              parseFloat(target3.getAttribute('x')) - transx
            );
            target3.setAttribute(
              'y',
              parseFloat(target3.getAttribute('y')) - transy
            );
            target3.setAttribute('transform', newMatrix);
          }, 300);
        } else {
          target.setAttribute('transform', newMatrix); //backElements[0] es lo mismo que target
          setTimeout(function() {
            target3.removeAttribute('style');
            target3.setAttribute('draggable', 'true');
          }, 300);
        }
      }
    } else if (target) {
      var target4 = target;
      var matrix2 = getMatrix(target.getAttribute('transform'));
      var newMatrix2 = setMatrixString(
        matrix2[0],
        matrix2[1],
        matrix2[2],
        matrix2[3],
        0,
        0
      );
      var transx2 = +parseFloat(matrix2[4]);
      var transy2 = +parseFloat(matrix2[5]);
      target.setAttribute('draggable', 'false');
      target.style.transition = '0.3s';
      //Adaptacion a Firefox
      if (window.navigator.userAgent.includes('Firefox')) {
        target.setAttribute(
          'x',
          parseFloat(target.getAttribute('x')) + transx2
        );
        target.setAttribute(
          'y',
          parseFloat(target.getAttribute('y')) + transy2
        );
        target.setAttribute('transform', 'matrix2(1,0,0,1,0,0)');
        target.style.transform = setMatrixString(
          matrix2[0],
          matrix2[1],
          matrix2[2],
          matrix2[3],
          -transx2,
          -transy2
        );
        setTimeout(function() {
          target4.removeAttribute('style');
          target4.setAttribute('draggable', 'true');
          target4.setAttribute(
            'x',
            parseFloat(target4.getAttribute('x')) - transx2
          );
          target4.setAttribute(
            'y',
            parseFloat(target4.getAttribute('y')) - transy2
          );
          target4.setAttribute('transform', newMatrix2);
        }, 300);
      } else {
        target.setAttribute('transform', newMatrix2); //backElements[0] es lo mismo que target
        setTimeout(function() {
          target4.removeAttribute('style');
          target4.setAttribute('draggable', 'true');
        }, 300);
      }
    }
    if (backElement) {
      backElement.setAttribute('class', 'recta');
      scaleCenter(backElement.nextElementSibling, 1);
      scaleCenter(backElement, 1);
      shakeAnimate(backElements[1], 10, 110, 2);
      shakeAnimate(backElements[1].nextElementSibling, 10, 110, 2);
      backElement = null;
    }
    target = null;
    isDragging = false;
  }

  function shakeAnimate(elemento, angulo, duracion, iteraciones) {
    var originx =
      parseInt(elemento.getAttribute('x')) +
      parseInt(elemento.getAttribute('width')) / 2;
    var originy =
      parseInt(elemento.getAttribute('y')) +
      parseInt(elemento.getAttribute('height')) / 2;
    var origin = originx + 'px ' + originy + 'px';
    //elemento.style.transformOrigin=originx+'px '+originy+'px';
    var matrix = getMatrix(elemento.getAttribute('transform'));
    var a = Math.cos(angulo * (Math.PI / 180));
    var b = Math.sin(angulo * (Math.PI / 180));
    var newMatrix = setMatrixString(
      a,
      b,
      -b,
      a,
      parseFloat(matrix[4]),
      parseFloat(matrix[5])
    );
    a = Math.cos(-angulo * (Math.PI / 180));
    b = Math.sin(-angulo * (Math.PI / 180));
    var newMatrix2 = setMatrixString(
      a,
      b,
      -b,
      a,
      parseFloat(matrix[4]),
      parseFloat(matrix[5])
    );
    elemento.animate(
      [
        {
          transform: elemento.getAttribute('transform'),
          transformOrigin: origin,
          offset: 0.0,
        },
        { transform: newMatrix, transformOrigin: origin, offset: 0.25 },
        {
          transform: elemento.getAttribute('transform'),
          transformOrigin: origin,
          offset: 0.5,
        },
        { transform: newMatrix2, transformOrigin: origin, offset: 0.75 },
        {
          transform: elemento.getAttribute('transform'),
          transformOrigin: origin,
          offset: 1,
        },
      ],
      { duration: duracion, iterations: iteraciones }
    );
  }
}

var ProfesionesArrastrables = {
  create: function() {
    comenzarJuegoExterno();
  },
};

export default ProfesionesArrastrables;
