//Minijuego de Encontrar a Aflatoun

// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import ImagenFondo from './assets/imagenjuego.png';
import Aflatoun from './assets/aflatoun.png';

const game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  game.load.image('imgfondo', ImagenFondo);
  game.load.image('personaje', Aflatoun);
}

let fondo;
let alto;
let ancho;
let afla; //personaje a buscar
let texto;

function create() {
  fondo = game.add.image(0, 0, 'imgfondo');
  ancho = fondo.width;
  alto = fondo.height;
  afla = game.add.image(ancho / 4, 0 + 2 * (alto / 3), 'personaje');
  afla.scale.setTo(1 / 2, 1 / 2);
  afla.inputEnabled = true; //Habilita interaccion con aflatoun

  texto = game.add.text(250, 16, '', { fill: '#ffffff' });
  afla.events.onInputDown.add(listener, this);
}

function listener() {
  texto.text = 'Has encontrado a Aflatoun!';
}

function update() {}
