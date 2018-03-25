// Minijuego de Elegir Caracteristicas

import ImagenFondo from './assets/fondojuego.png';
import Cualidad1i from './assets/cual1.png';

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

class EligeActividad extends Phaser.State {
  preload() {
    this.game.load.image('fondo', ImagenFondo);
    this.game.load.image('cuali1', Cualidad1i);
  }

  private texto;

  create() {
    let fondo;
    let alto;
    let ancho;

    let act1;
    let act2;
    let act3;
    let act4;
    let act5;
    let act6;
    let act7;
    let act8;
    let act9;

    fondo = this.game.add.image(0, 0, 'fondo');
    ancho = fondo.width;
    alto = fondo.height;

    act1 = this.game.add.image(ancho / 10, alto * 2 / 10, 'cuali1');
    act1.inputEnabled = true;

    act2 = this.game.add.image(ancho / 10, alto * 5 / 10, 'cuali1');
    act2.inputEnabled = true;

    act3 = this.game.add.image(ancho / 10, alto * 8 / 10, 'cuali1');
    act3.inputEnabled = true;

    act4 = this.game.add.image(ancho * 4 / 10, alto * 2 / 10, 'cuali1');
    act4.inputEnabled = true;

    act5 = this.game.add.image(ancho * 4 / 10, alto * 5 / 10, 'cuali1');
    act5.inputEnabled = true;

    act6 = this.game.add.image(ancho * 4 / 10, alto * 8 / 10, 'cuali1');
    act6.inputEnabled = true;

    act7 = this.game.add.image(ancho * 7 / 10, alto * 2 / 10, 'cuali1');
    act7.inputEnabled = true;

    act8 = this.game.add.image(ancho * 7 / 10, alto * 5 / 10, 'cuali1');
    act8.inputEnabled = true;

    act9 = this.game.add.image(ancho * 7 / 10, alto * 8 / 10, 'cuali1');
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
    //Colocar aqui a que actividad se dirige
    this.game.state.add('BoyGirl', new BoyGirlState());
    this.game.state.start('BoyGirl');
  }

  listenerA2() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('EligeAflatoun', new EligeAflatoun());
    this.game.state.start('EligeAflatoun');
  }
  listenerA3() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('EncuentraAflatoun', new EncuentraAflatoun());
    this.game.state.start('EncuentraAflatoun');
  }
  listenerA4() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('AflatounAstronauta', new AflatounAstronauta());
    this.game.state.start('AflatounAstronauta');
  }
  listenerA5() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('DefinisteTuSueno', new DefinisteTuSueno());
    this.game.state.start('DefinisteTuSueno');
  }
  listenerA6() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('EligeCaracteristicas', new EligeCaracteristicas());
    this.game.state.start('EligeCaracteristicas');
  }
  listenerA7() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('BoyGirl', new BoyGirlState());
    this.game.state.start('BoyGirl');
  }
  listenerA8() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('BoyGirl', new BoyGirlState());
    this.game.state.start('BoyGirl');
  }
  listenerA9() {
    //Colocar aqui a que actividad se dirige
    this.game.state.add('BoyGirl', new BoyGirlState());
    this.game.state.start('BoyGirl');
  }
}
export default EligeActividad;
