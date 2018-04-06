// inject global phaser variables
import 'pixi.js';
import 'p2';
import 'phaser';

import { ancho, alto } from './dimens.ts';
import BootState from './BootState.ts';
import ChatState from './ChatState.ts';
import VideoState from './VideoState.ts';
import GameState from './GameState.ts';
import BoyGirlState from './BoyGirlState.ts';
import LoadState from './LoadState.ts';
import LoginState from './LoginState.ts';
import CasasState from './CasasState.ts';
import EncuentraAflatoun from './EncuentraAflatoun.ts';
import EligeAflatoun from './EligeAflatoun.ts';
import AflatounAstronauta from './AflatounAstronauta.ts';
import DefinisteTuSueno from './DefinisteTuSueno.ts';
import ProfesionesArrastrables from './ProfesionesArrastrables.js';
import ProfesionesPintables from './ProfesionesPintables.js';
import LosValores1 from './LosValores1.js';
import ComoMeAlimento from './ComoMeAlimento.js';
import IdentificandoAflatoun from './IdentificandoAflatoun.js';
import CompletarAflatoun2 from './CompletarAflatoun2.js';
import CompletarAflatoun1 from './CompletarAflatoun1.js';
import Memoria from './Memoria.js';

import Video1 from './assets/video1.mp4';

function start() {
  const game = new Phaser.Game(ancho, alto, Phaser.AUTO, 'game');

  game.state.add('Login', new LoginState());
  game.state.add('Boot', new BootState());
  game.state.add('Preload', new LoadState());
  game.state.add('Game', new GameState());
  game.state.add('BoyGirl', new BoyGirlState());
  game.state.add('Video', new VideoState(Video1, 'ProfesionesArrastrables'));
  game.state.add('AflatounAstronauta', new AflatounAstronauta());
  game.state.add('ProfesionesArrastrables', ProfesionesArrastrables);
  game.state.add('ProfesionesPintables', ProfesionesPintables);
  game.state.add('LosValores1', LosValores1);
  game.state.add('ComoMeAlimento', ComoMeAlimento);
  game.state.add('IdentificandoAflatoun', IdentificandoAflatoun);
  game.state.add('CompletarAflatoun2', CompletarAflatoun2);
  game.state.add('CompletarAflatoun1', CompletarAflatoun1);
  game.state.add('DefinisteTuSueno', DefinisteTuSueno);
  game.state.add('Memoria', Memoria);
  game.state.add('Casas', CasasState);
  game.state.add('Chat', new ChatState());
  game.state.start('Login');
}

start();
