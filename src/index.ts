// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import BootState from './BootState.ts';
import LoadState from './LoadState.ts';
import { ancho, alto } from './dimens.ts';

function start() {
  const alto = document.documentElement.clientHeight;
  const ancho = document.documentElement.clientWidth;
  const game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'game');
  game.state.add('Boot', new BootState());
  game.state.add('Preload', new LoadState());
  game.state.start('Boot');
}

start();
