// Minijuego de Elegir Caracteristicas

import ImagenFondo from './assets/fondojuego.png';
import Cualidad1i from './assets/cual1.png';
import Cualidad2i from './assets/cual2.png';
import Cualidad3i from './assets/cual3.png';
import EligeActividad from './EligeActividad.ts';

class EligeCaracteristicas extends Phaser.State {
  preload() {
    this.game.load.image('fondo', ImagenFondo);
    this.game.load.image('cuali1', Cualidad1i);
    this.game.load.image('cuali2', Cualidad2i);
    this.game.load.image('cuali3', Cualidad3i);
  }

  private texto;
  private cualidad1;
  private cualidad2;
  private cualidad3;

  create() {
    let fondo;
    let alto;
    let ancho;

    let afc1;
    let afc2;
    let afenunciado;
    let cual1;
    let cual2;
    let cual3;
    let cualenunciado;
    let quis1;
    let quis2;
    let quis3;
    let quis4;
    let quis5;
    let quisenunciado;

    this.cualidad1 = false;
    this.cualidad2 = false;
    this.cualidad3 = false;

    fondo = this.game.add.image(0, 0, 'fondo');
    ancho = fondo.width;
    alto = fondo.height;

    afc1 = this.game.add.image(ancho / 10, alto * 2 / 10, 'cuali1');
    afc1.inputEnabled = true;
    afc2 = this.game.add.image(ancho / 10, alto * 4 / 10, 'cuali1');
    afc2.inputEnabled = true;
    afenunciado = this.game.add.image(ancho / 10, alto * 9 / 10, 'cuali1');

    cual1 = this.game.add.image(ancho * 4 / 10, alto * 2 / 10, 'cuali2');
    cual1.inputEnabled = true;
    cual2 = this.game.add.image(ancho * 4 / 10, alto * 4 / 10, 'cuali2');
    cual2.inputEnabled = true;
    cual3 = this.game.add.image(ancho * 4 / 10, alto * 6 / 10, 'cuali2');
    cual3.inputEnabled = true;
    cualenunciado = this.game.add.image(
      ancho * 4 / 10,
      alto * 9 / 10,
      'cuali2'
    );

    quis1 = this.game.add.image(ancho * 7 / 10, alto * 2 / 10, 'cuali3');
    quis1.inputEnabled = true;
    quis2 = this.game.add.image(ancho * 7 / 10, alto * 3.5 / 10, 'cuali3');
    quis2.inputEnabled = true;
    quis3 = this.game.add.image(ancho * 7 / 10, alto * 5 / 10, 'cuali3');
    quis3.inputEnabled = true;
    quis4 = this.game.add.image(ancho * 7 / 10, alto * 6.5 / 10, 'cuali3');
    quis4.inputEnabled = true;
    quis5 = this.game.add.image(ancho * 7 / 10, alto * 8 / 10, 'cuali3');
    quis5.inputEnabled = true;
    quisenunciado = this.game.add.image(
      ancho * 7 / 10,
      alto * 9 / 10,
      'cuali3'
    );

    this.texto = this.game.add.text(ancho / 3, 16, '', { fill: 'black' });
    this.texto.text = 'Elige tus cualidades';
    afc1.events.onInputDown.add(this.listenerG, this);
    afc2.events.onInputDown.add(this.listenerG, this);
    cual1.events.onInputDown.add(this.listenerP, this);
    cual2.events.onInputDown.add(this.listenerP, this);
    cual3.events.onInputDown.add(this.listenerP, this);
    quis1.events.onInputDown.add(this.listenerF, this);
    quis2.events.onInputDown.add(this.listenerF, this);
    quis3.events.onInputDown.add(this.listenerF, this);
    quis4.events.onInputDown.add(this.listenerF, this);
    quis5.events.onInputDown.add(this.listenerF, this);
  }

  listenerG() {
    this.cualidad1 = true;
    if (this.cualidad1 && this.cualidad2 && this.cualidad3) {
      this.game.state.add('EligeActividad', new EligeActividad());
      this.game.state.start('EligeActividad');
    }
  }

  listenerP() {
    this.cualidad2 = true;
    if (this.cualidad1 && this.cualidad2 && this.cualidad3) {
      this.game.state.add('EligeActividad', new EligeActividad());
      this.game.state.start('EligeActividad');
    }
  }
  listenerF() {
    this.cualidad3 = true;
    if (this.cualidad1 && this.cualidad2 && this.cualidad3) {
      this.game.state.add('EligeActividad', new EligeActividad());
      this.game.state.start('EligeActividad');
    }
  }
}

export default EligeCaracteristicas;
