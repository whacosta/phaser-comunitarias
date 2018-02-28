import Astronauta from './assets/astronauta.png';
import Aflatoun from './assets/aflatoun.png';

class AflatounAstronauta extends Phaser.State {
  preload() {
    this.game.load.image('astronauta', Astronauta);
    this.game.load.image('aflatoun', Aflatoun);
  }

  private texto;

  create() {
    this.stage.backgroundColor = '#0072bc';
    var margenTop = 1 / 8 * this.world.centerY;
    var aflatoun = this.game.add.sprite(
      this.world.width / 2,
      this.world.height,
      'astronauta'
    );
    aflatoun.anchor.set(0.5);

    aflatoun.width = this.world.width / 4;
    aflatoun.height = this.world.centerY;
    aflatoun.y = aflatoun.y - aflatoun.height / 2;

    var style = {
      font: 'bold 30pt Arial',
      fill: 'white',
      align: 'left',
      wordWrap: true,
      wordWrapWidth: 98 / 100 * this.world.width,
    };

    var text = this.game.add.text(
      this.game.world.centerX,
      margenTop,
      'Hola amigos! Por fin consegui el traje de astronauta. Quiero de grande ir a la luna pero para eso tengo que esforzarme por estudiar mucho. Que quieren ser ustedes?',
      style
    );

    text.anchor.set(0.5);
    text.y = text.y + text.height / 2;
  }
}

export default AflatounAstronauta;
