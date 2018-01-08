// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import BootState from './BootState.ts';
import LoadState from './LoadState.ts';
import { ancho, alto } from './dimens.ts';

function start() {
  const ancho = 1080;
  const alto = 600;
  const game = new Phaser.Game(ancho, alto, Phaser.AUTO, 'game');
  game.state.add('Boot', new BootState());
  game.state.add('Preload', new LoadState());
  game.state.start('Boot');
}

start();
