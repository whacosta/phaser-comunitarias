// Minijuego de Elegir Caracteristicas

import ImagenFondo from './assets/bg1.png';
import Cualidad1i from './assets/cual1.png';
import { setBackground } from './utils/ImageUtils.ts';

import act1path from './assets/futbolista.jpg';
import act3path from './assets/estadio.jpg';
import act4path from './assets/bombero.png';
import act5path from './assets/cantante.jpg';
import act6path from './assets/bailarina.jpg';
import act7path from './assets/camionbombero.png';
import act8path from './assets/microfono.jpg';
import act9path from './assets/zapatillas.png';
import EligeActividad from './EligeActividad.ts';
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

class ProfesionesCruzadas extends Phaser.State {
  preload() {
    this.game.load.image('fondo', ImagenFondo);
    this.game.load.image('act1', act1path);
    this.game.load.image('act3', act3path);
    this.game.load.image('act4', act4path);
    this.game.load.image('act5', act5path);
    this.game.load.image('act6', act6path);
    this.game.load.image('act7', act7path);
    this.game.load.image('act8', act8path);
    this.game.load.image('act9', act9path);
  }

  private indicador;
  // private texto;
  private myLine;
  private myLine2;
  private myLine3;
  private myLine4;

  create() {
    let act1;
    let act3;
    let act4;
    let act5;
    let act6;
    let act7;
    let act8;
    let act9;

    setBackground(this.game);

    act1 = this.game.add.image(ancho / 10, alto * 2 / 10, 'act1');
    act1.anchor.set(0.5);
    act1.inputEnabled = true;

    // create the line

    act3 = this.game.add.image(ancho / 10, alto * 8 / 10, 'act3');
    act3.anchor.set(0.5);
    act3.inputEnabled = true;

    // create the graphics
    const graphicsLine = this.game.make.graphics(0, 0);
    graphicsLine.lineStyle(1, 0x000000, 1);
    graphicsLine.moveTo(act1.x, act1.y);
    graphicsLine.lineTo(act3.x, act3.y);
    graphicsLine.endFill();

    // create the image...
    this.myLine = this.game.add.image(
      act1.x,
      act1.y,
      graphicsLine.generateTexture()
    );
    this.myLine.visible = false;
    graphicsLine.destroy();

    act4 = this.game.add.image(ancho * 3 / 10, alto * 2 / 10, 'act4');
    act4.anchor.set(0.5);
    act4.inputEnabled = true;

    act5 = this.game.add.image(ancho * 3 / 10, alto * 8 / 10, 'act5');
    act5.anchor.set(0.5);
    act5.inputEnabled = true;

    act6 = this.game.add.image(ancho * 5 / 10, alto * 2 / 10, 'act6');
    act6.anchor.set(0.5);
    act6.inputEnabled = true;

    act7 = this.game.add.image(ancho * 5 / 10, alto * 8 / 10, 'act7');
    act7.anchor.set(0.5);
    act7.inputEnabled = true;

    act8 = this.game.add.image(ancho * 7 / 10, alto * 2 / 10, 'act8');
    act8.anchor.set(0.5);
    act8.inputEnabled = true;

    act9 = this.game.add.image(ancho * 7 / 10, alto * 8 / 10, 'act9');
    act9.anchor.set(0.5);
    act9.inputEnabled = true;

    // create the line

    const graphicsLine2 = this.game.make.graphics(0, 0);
    graphicsLine2.lineStyle(1, 0x000000, 1);
    graphicsLine2.moveTo(act4.x, act4.y);
    graphicsLine2.lineTo(act7.x, act7.y);
    graphicsLine2.endFill();

    // create the image...
    this.myLine2 = this.game.add.image(
      act4.x,
      act4.y,
      graphicsLine2.generateTexture()
    );
    this.myLine2.visible = false;
    graphicsLine2.destroy();

    // create the line

    const graphicsLine3 = this.game.make.graphics(0, 0);
    graphicsLine3.lineStyle(1, 0x000000, 1);
    graphicsLine3.moveTo(act6.x, act6.y);
    graphicsLine3.lineTo(act9.x, act9.y);
    graphicsLine3.endFill();

    // create the image...
    this.myLine3 = this.game.add.image(
      act6.x,
      act6.y,
      graphicsLine3.generateTexture()
    );
    this.myLine3.visible = false;
    graphicsLine3.destroy();

    // create the line

    const graphicsLine4 = this.game.make.graphics(0, 0);
    graphicsLine4.lineStyle(1, 0x000000, 1);
    graphicsLine4.moveTo(act5.x, act5.y);
    graphicsLine4.lineTo(act8.x, act8.y);
    graphicsLine4.endFill();

    // create the image...
    this.myLine4 = this.game.add.image(
      act4.x,
      act4.y,
      graphicsLine4.generateTexture()
    );
    this.myLine4.visible = false;
    graphicsLine4.destroy();

    // this.texto = this.game.add.text(ancho / 3, 16, '', { fill: 'black' });
    // this.texto.text = 'Elige una actividad';

    act1.events.onInputDown.add(this.listenerA1, this);
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
    if (this.indicador === 'A1') {
      this.myLine.visible = true;
    }
    this.indicador = 'A';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }

  listenerA3() {
    // Colocar aqui a que actividad se dirige
    if (this.indicador === 'A') {
      this.myLine.visible = true;
    }
    this.indicador = 'A1';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA4() {
    if (this.indicador === 'B1') {
      this.myLine2.visible = true;
    }
    this.indicador = 'B';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA5() {
    if (this.indicador === 'D1') {
      this.myLine4.visible = true;
    }
    this.indicador = 'D';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA6() {
    // Colocar aqui a que actividad se dirige
    if (this.indicador === 'C1') {
      this.myLine3.visible = true;
    }
    this.indicador = 'C';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA7() {
    if (this.indicador === 'B') {
      this.myLine2.visible = true;
    }
    this.indicador = 'B1';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA8() {
    // Colocar aqui a que actividad se dirige
    if (this.indicador === 'D') {
      this.myLine4.visible = true;
    }
    this.indicador = 'D1';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
  listenerA9() {
    if (this.indicador === 'C') {
      this.myLine3.visible = true;
    }
    this.indicador = 'C1';
    if (
      this.myLine.visible &&
      this.myLine2.visible &&
      this.myLine3.visible &&
      this.myLine4.visible
    ) {
      setTimeout(() => {
        this.game.state.start('EligeActividad');
      }, 3000);
    }
  }
}

export default ProfesionesCruzadas;
