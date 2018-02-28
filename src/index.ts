// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import BootState from './BootState.ts';
import VideoState from './VideoState.ts';
import GameState from './GameState.ts';
import BoyGirlState from './BoyGirlState.ts';
import LoadState from './LoadState.ts';
import EncuentraAflatoun from './EncuentraAflatoun.ts';
import EligeAflatoun from './EligeAflatoun.ts';
import { ancho, alto } from './dimens.ts';

import AflatounAstronauta from './AflatounAstronauta.ts';
import VideoProfesiones from './VideoProfesiones.ts';
import DefinisteTuSueno from './DefinisteTuSueno.ts';

import ProfesionesArrastrables from './ProfesionesArrastrables.js';

function start() {
  const ancho = 1080;
  const alto = 600;
  const game = new Phaser.Game(ancho, alto, Phaser.AUTO, 'game');
  game.state.add('Boot', new BootState());
  game.state.add('Preload', new LoadState());
  game.state.add('Game', new GameState());
  game.state.add('BoyGirl', new BoyGirlState());
  game.state.add('Video', new VideoState('video1.mp4'));
  game.state.add('AflatounAstronauta', new AflatounAstronauta());
  game.state.add(
    'VideoProfesiones',
    new VideoProfesiones('VideoProfesiones.mp4')
  );
  game.state.add('ProfesionesArrastrables', ProfesionesArrastrables);
  game.state.add('DefinisteTuSueno', DefinisteTuSueno);
  game.state.start('Boot');
}

start();
