//Minijuego de Encontrar a Aflatoun

// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import ImagenFondo from './assets/fondojuego.png';
import Aflatoun from './assets/aflatoun.png';
import Sonic from './assets/sonic.png';
import Mario from './assets/mario.png';
import Pikachu from './assets/pikachu.jpg';

const game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', {
  preload: preload,
  create: create,
  update: update,
});

function preload() {
  game.load.image('imgfondo', ImagenFondo);
  game.load.image('personaje', Aflatoun);
  game.load.image('sonic', Sonic);
  game.load.image('mario', Mario);
  game.load.image('pikachu', Pikachu);
}

let fondo;
let alto;
let ancho;
let afla; //personaje a buscar
let equivocada1;
let equivocada2;
let equivocada3;
let texto;

function create() {
  fondo = game.add.image(0, 0, 'imgfondo');
  ancho = fondo.width;
  alto = fondo.height;
  afla = game.add.image(ancho * 2.5 / 4, alto / 4, 'personaje');
  afla.scale.setTo(1, 1);
  afla.inputEnabled = true; //Habilita interaccion con aflatoun

  texto = game.add.text(ancho / 3, 16, '', { fill: 'black' });
  texto.text = 'Selecciona a Aflatoun';
  afla.events.onInputDown.add(listenerG, this);

  equivocada1 = game.add.image(ancho / 4, alto * 1 / 4, 'sonic');
  equivocada1.scale.setTo(1 / 10, 1 / 10);
  equivocada1.inputEnabled = true;
  equivocada1.events.onInputDown.add(listenerP, this);

  equivocada2 = game.add.image(ancho / 4, alto * 2.5 / 4, 'mario');
  equivocada2.scale.setTo(3 / 4, 3 / 4);
  equivocada2.inputEnabled = true;
  equivocada2.events.onInputDown.add(listenerP, this);

  equivocada3 = game.add.image(ancho * 2.3 / 4, alto * 2.5 / 4, 'pikachu');
  equivocada3.scale.setTo(3 / 5, 3 / 5);
  equivocada3.inputEnabled = true;
  equivocada3.events.onInputDown.add(listenerP, this);
}

function listenerG() {
  texto.text = 'Has encontrado a Aflatoun!';
}

function listenerP() {
  texto.text = 'Te equivocaste! Vuelve a intentarlo!';
}

function update() {}
