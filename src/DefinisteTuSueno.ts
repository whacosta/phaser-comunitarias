import Espacio from './assets/espacio.png';

class DefinisteTuSueño extends Phaser.State {
  private texto;

  preload() {
    this.game.load.image('espacio', Espacio);
  }

  create() {
    var espacio = this.game.add.sprite(0, 0, 'espacio');
    espacio.width = this.world.width;
    espacio.height = this.world.height;

    var margenTop = 1 / 8 * this.world.centerY;

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
      '¿Definiste tu sueño? No esperes más y empieza a llevarlo a la realidad. Aflatoun Habla.',
      style
    );

    text.anchor.set(0.5);
    text.y = text.y + text.height / 2;
  }
}

export default DefinisteTuSueño;
