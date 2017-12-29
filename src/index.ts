// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import bootState from './bootState.ts';
import loadState from './loadState.ts';
import { ancho, alto } from './dimens.ts';

function start() {
  const alto = document.documentElement.clientHeight;
  const ancho = document.documentElement.clientWidth;
  const game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'game');
  game.state.add('Boot', bootState);
  game.state.add('Preload', loadState);
  game.state.start('Boot');
}

start();
