import { ancho, alto } from './dimens.ts';
import Area2D, { visualizeAreas } from './utils/Area2D.ts';

const clickArea: Area2D = {
  startX: ancho * 0.55,
  startY: alto * 0.66,
  width: alto * 0.46,
  height: alto * 0.3,
};
class CasasState extends Phaser.State {
  private setBackground() {
    const bg = this.game.add.image(ancho / 2, alto / 2, 'casas_bg');
    bg.anchor.setTo(0.5, 0.5);
    bg.height = alto;
    bg.width = bg.height * 4966 / 3514;
  }

  private setClickableArea() {
    const button = this.game.add.button(
      clickArea.startX,
      clickArea.startY,
      undefined,
      this.goToNextState.bind(this)
    );
    button.height = clickArea.height;
    button.width = clickArea.width;
  }

  create() {
    this.setBackground();
    this.setClickableArea();
  }

  goToNextState() {
    this.game.state.start('BoyGirl');
  }
}

export default CasasState;
