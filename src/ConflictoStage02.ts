import { ancho, alto } from './dimens.ts';
import ConflictoStage03 from './ConflictoStage03.ts';

class ConflictoStage02 extends Phaser.State {
  create() {
    const afla = this.game.add.sprite(ancho - 207, alto / 2, 'aflautonAct1_5');
    afla.anchor.setTo(0.5, 0.5);

    const style = {
      font: '35px Arial',
      fill: '#ffffff',
      align: 'left',
      backgroundColor: 'rgba(0,255,0,0.25)',
    };
    const des =
      ' En la primera fila se mostrarán imágenes de \n' +
      ' conflictos y en la segunda fila imágenes de \n' +
      ' sus respectivas causas en desorden, deberás \n' +
      ' unir con líneas cada conflicto con su causa.  \n' +
      ' Gana Monedas. \n';
    const text = this.game.add.text(20, 90, des, style);

    const com = this.game.add.text(20, alto - 90, 'Jugar!', style);
    const play = this.game.add.button(
      120,
      alto - 120,
      'nextAct1_5',
      this.btnPlayAction,
      this
    );
    play.scale.setTo(0.5, 0.5);
  }

  btnPlayAction() {
    console.log('play boton');
    this.game.state.add('escena3', new ConflictoStage03());
    this.game.state.start('escena3');
  }
}

export default ConflictoStage02;
