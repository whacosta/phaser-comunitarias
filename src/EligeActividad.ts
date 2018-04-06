// Minijuego de Elegir Caracteristicas

import ImagenFondo from './assets/bg1.png';
import Cualidad1i from './assets/cual1.png';
import { setBackground } from './utils/ImageUtils.ts';

import act1path from './assets/ropa.png';
import act2path from './assets/elegir.png';
import act3path from './assets/encontrar.png';
import act4path from './assets/arrastrarprofesion.png';
import act5path from './assets/pintar.png';
import act6path from './assets/caracteristicas.png';
import act7path from './assets/memoria.png';
import act8path from './assets/valores.png';
import act9path from './assets/alimentacion.png';

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
import ProfesionesPintables from './ProfesionesPintables.js';
import EligeCaracteristicas from './EligeCaracteristicas.ts';
import Memoria from './Memoria.js';
import CompletarAflatoun2 from './CompletarAflatoun2';
import ComoMeAlimento from './ComoMeAlimento';

class EligeActividad extends Phaser.State {
  preload() {
    this.game.load.image('fondo', ImagenFondo);
    this.game.load.image('act1', act1path);
    this.game.load.image('act2', act2path);
    this.game.load.image('act3', act3path);
    this.game.load.image('act4', act4path);
    this.game.load.image('act5', act5path);
    this.game.load.image('act6', act6path);
    this.game.load.image('act7', act7path);
    this.game.load.image('act8', act8path);
    this.game.load.image('act9', act9path);
  }

  private texto;

  create() {
    let act1;
    let act2;
    let act3;
    let act4;
    let act5;
    let act6;
    let act7;
    let act8;
    let act9;

    setBackground(this.game);

    act1 = this.game.add.image(ancho / 10, alto * 2 / 10, 'act1');
    act1.inputEnabled = true;

    act2 = this.game.add.image(ancho / 10, alto * 5 / 10, 'act2');
    act2.inputEnabled = true;

    act3 = this.game.add.image(ancho / 10, alto * 8 / 10, 'act3');
    act3.inputEnabled = true;

    act4 = this.game.add.image(ancho * 4 / 10, alto * 2 / 10, 'act4');
    act4.inputEnabled = true;

    act5 = this.game.add.image(ancho * 4 / 10, alto * 5 / 10, 'act5');
    act5.inputEnabled = true;

    act6 = this.game.add.image(ancho * 4 / 10, alto * 8 / 10, 'act6');
    act6.inputEnabled = true;

    act7 = this.game.add.image(ancho * 7 / 10, alto * 2 / 10, 'act7');
    act7.inputEnabled = true;

    act8 = this.game.add.image(ancho * 7 / 10, alto * 5 / 10, 'act8');
    act8.inputEnabled = true;

    act9 = this.game.add.image(ancho * 7 / 10, alto * 8 / 10, 'act9');
    act9.inputEnabled = true;

    this.texto = this.game.add.text(ancho / 3, 16, '', { fill: 'black' });
    this.texto.text = 'Elige una actividad';

    act1.events.onInputDown.add(this.listenerA1, this);
    act2.events.onInputDown.add(this.listenerA2, this);
    act3.events.onInputDown.add(this.listenerA3, this);
    act4.events.onInputDown.add(this.listenerA4, this);
    act5.events.onInputDown.add(this.listenerA5, this);
    act6.events.onInputDown.add(this.listenerA6, this);
    act7.events.onInputDown.add(this.listenerA7, this);
    act8.events.onInputDown.add(this.listenerA8, this);
    act9.events.onInputDown.add(this.listenerA9, this);
  }

  listenerA1() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('BoyGirl', new BoyGirlState());
    this.game.state.start('BoyGirl');
  }

  listenerA2() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('EligeAflatoun', new EligeAflatoun());
    this.game.state.start('EligeAflatoun');
  }
  listenerA3() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('EncuentraAflatoun', new EncuentraAflatoun());
    this.game.state.start('EncuentraAflatoun');
  }
  listenerA4() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('ProfesionesArrastrables', ProfesionesArrastrables);
    this.game.state.start('ProfesionesArrastrables');
  }
  listenerA5() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('ProfesionesPintables', ProfesionesPintables);
    this.game.state.start('ProfesionesPintables');
  }
  listenerA6() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('EligeCaracteristicas', new EligeCaracteristicas());
    this.game.state.start('EligeCaracteristicas');
  }
  listenerA7() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('Memoria', Memoria);
    this.game.state.start('Memoria');
  }
  listenerA8() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('CompletarAflatoun2', CompletarAflatoun2);
    this.game.state.start('CompletarAflatoun2');
  }
  listenerA9() {
    // Colocar aqui a que actividad se dirige
    this.game.state.add('ComoMeAlimento', ComoMeAlimento);
    this.game.state.start('ComoMeAlimento');
  }
}
export default EligeActividad;
