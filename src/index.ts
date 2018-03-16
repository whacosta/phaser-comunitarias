// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import BootState from './BootState.ts';
import VideoState from './VideoState.ts';
import GameState from './GameState.ts';
import BoyGirlState from './BoyGirlState.ts';
import LoadState from './LoadState.ts';
import LoginState from './LoginState.ts';
import EncuentraAflatoun from './EncuentraAflatoun.ts';
import EligeAflatoun from './EligeAflatoun.ts';
import { ancho, alto } from './dimens.ts';
import AflatounAstronauta from './AflatounAstronauta.ts';
import DefinisteTuSueno from './DefinisteTuSueno.ts';
import ProfesionesArrastrables from './ProfesionesArrastrables.js';

import Video1 from './assets/video1.mp4';

function start() {
  const game = new Phaser.Game(
    window.innerWidth,
    window.innerHeight,
    Phaser.AUTO,
    'game'
  );

  game.state.add('Login', new LoginState());
  game.state.add('Boot', new BootState());
  game.state.add('Preload', new LoadState());
  game.state.add('Game', new GameState());
  game.state.add('BoyGirl', new BoyGirlState());
  game.state.add('Video', new VideoState(Video1, 'ProfesionesArrastrables'));
  game.state.add('AflatounAstronauta', new AflatounAstronauta());
  game.state.add('ProfesionesArrastrables', ProfesionesArrastrables);
  game.state.add('DefinisteTuSueno', DefinisteTuSueno);
  game.state.start('Boot');
}

start();
