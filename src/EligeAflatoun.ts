//Minijuego de Encontrar a Aflatoun

import ImagenFondo from './assets/fondojuego.png';
import Aflatoun from './assets/aflatoun.png';
import Sonic from './assets/sonic.png';
import Mario from './assets/mario.png';
import Pikachu from './assets/pikachu.jpg';

class EligeAflatoun extends Phaser.State {
  preload() {
    this.game.load.image('imgfondo', ImagenFondo);
    this.game.load.image('personaje', Aflatoun);
    this.game.load.image('sonic', Sonic);
    this.game.load.image('mario', Mario);
    this.game.load.image('pikachu', Pikachu);
  }

  private texto;

  create() {
    let fondo;
    let alto;
    let ancho;
    let afla; //personaje a buscar
    let equivocada1;
    let equivocada2;
    let equivocada3;
    fondo = this.game.add.image(0, 0, 'imgfondo');
    ancho = fondo.width;
    alto = fondo.height;
    afla = this.game.add.image(ancho * 2.5 / 4, alto / 4, 'personaje');
    afla.scale.setTo(1, 1);
    afla.inputEnabled = true; //Habilita interaccion con aflatoun
    this.texto = this.game.add.text(ancho / 3, 16, '', { fill: 'black' });
    this.texto.text = 'Selecciona a Aflatoun';
    afla.events.onInputDown.add(this.listenerG, this);

    equivocada1 = this.game.add.image(ancho / 4, alto * 1 / 4, 'sonic');
    equivocada1.scale.setTo(1 / 10, 1 / 10);
    equivocada1.inputEnabled = true;
    equivocada1.events.onInputDown.add(this.listenerP, this);

    equivocada2 = this.game.add.image(ancho / 4, alto * 2.5 / 4, 'mario');
    equivocada2.scale.setTo(3 / 4, 3 / 4);
    equivocada2.inputEnabled = true;
    equivocada2.events.onInputDown.add(this.listenerP, this);

    equivocada3 = this.game.add.image(
      ancho * 2.3 / 4,
      alto * 2.5 / 4,
      'pikachu'
    );
    equivocada3.scale.setTo(3 / 5, 3 / 5);
    equivocada3.inputEnabled = true;
    equivocada3.events.onInputDown.add(this.listenerP, this);
  }

  listenerG() {
    this.texto.text = 'Has encontrado a Aflatoun!';
  }

  listenerP() {
    this.texto.text = 'Te equivocaste! Vuelve a intentarlo!';
  }
}

export default EligeAflatoun;
