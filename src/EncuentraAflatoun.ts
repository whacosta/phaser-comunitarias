//Minijuego de Encontrar a Aflatoun

import ImagenFondo from './assets/imagenjuego.png';
import Aflatoun from './assets/aflatoun.png';

class EncuentraAflatoun extends Phaser.State {
  preload() {
    this.game.load.image('imgfondo', ImagenFondo);
    this.game.load.image('personaje', Aflatoun);
  }

  private texto;

  create() {
    let fondo;
    let alto;
    let ancho;
    let afla; //personaje a buscar
    fondo = this.game.add.image(0, 0, 'imgfondo');
    ancho = fondo.width;
    alto = fondo.height;
    afla = this.game.add.image(ancho / 4, 0 + 2 * (alto / 3), 'personaje');
    afla.scale.setTo(1 / 2, 1 / 2);
    afla.inputEnabled = true; //Habilita interaccion con aflatoun

    this.texto = this.game.add.text(250, 16, '', { fill: '#ffffff' });
    afla.events.onInputDown.add(this.listener, this);
  }

  listener() {
    this.texto.text = 'Has encontrado a Aflatoun!';
  }
}

export default EncuentraAflatoun;
