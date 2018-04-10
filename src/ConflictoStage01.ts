import { ancho, alto } from './dimens.ts';
import ConflictoStage02 from './ConflictoStage02.ts';

class ConflictoStage01 extends Phaser.State {
  create() {
    const afla = this.game.add.sprite(207, alto / 2 - 120, 'aflautonAct1_5');
    afla.anchor.setTo(0.5, 0.5);
    afla.scale.setTo(0.5, 0.5);

    const style = {
      font: '35px Arial',
      fill: '#ffffff',
      align: 'left',
      backgroundColor: 'rgba(0,255,0,0.25)',
    };
    const des =
      ' Hola amigos el día de hoy tengo un gran \n' +
      ' conflicto y es que tengo que descifrar \n' +
      ' la causa de muchos de ellos, te \n' +
      ' dejaré el significado de las palabras \n' +
      ' y espero me puedas ayudar. \n';
    const text = this.game.add.text(340, 40, des, style);

    const style2 = { font: '18px Arial', fill: '#3D3D3D', align: 'left' };
    const des2 =
      'Conflicto: El conflicto define al conjunto de dos o más hipotéticas situaciones que son excluyentes: esto quiere decir que\n' +
      'no pueden darse en forma simultánea. Por lo tanto, cuando surge un conflicto, se produce un enfrentamiento, una pelea, una\n' +
      'lucha o una discusión, donde una de las partes intervinientes intenta imponerse a la otra.\n' +
      'Causa: Se refiere a aquello que se considera como el fundamento o el origen de algo.';
    const def = this.game.add.text(40, alto - 200, des2, style2);

    const com = this.game.add.text(730, alto - 90, 'comencemos!', style);
    const next = this.game.add.button(
      ancho - 120,
      alto - 120,
      'nextAct1_5',
      this.btnNextAction,
      this
    );
    next.scale.setTo(0.5, 0.5);
  }

  btnNextAction() {
    this.game.state.add('escena2', new ConflictoStage02());
    this.game.state.start('escena2');
  }
}

export default ConflictoStage01;
