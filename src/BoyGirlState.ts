import ClothesState from './ClothesState.ts';
import boyPath from './assets/boy.png';
import girlPath from './assets/girl.png';
import { alto, ancho } from './dimens.ts';
import { setBackground } from './utils/ImageUtils.ts';

class BoyGirlState extends Phaser.State {
  preload() {
    this.game.load.image('boy', boyPath);
    this.game.load.image('girl', girlPath);
  }

  private setChildButton(params: { columnIndex: number; isBoy: boolean }) {
    const child = this.game.add.button(
      ancho * params.columnIndex / 10,
      alto * 1 / 4,
      params.isBoy ? 'boy' : 'girl',
      this.choose(params.isBoy)
    );
    child.height = alto * 6 / 10;
    child.width = child.height * 237 / 375;
  }

  create() {
    setBackground(this.game);
    this.setChildButton({ isBoy: true, columnIndex: 2 });
    this.setChildButton({ isBoy: false, columnIndex: 6 });
  }

  choose(isBoy: boolean) {
    return () => {
      this.game.state.add('Clothes', new ClothesState());
      this.game.state.start('Clothes');
    };
  }
}

export default BoyGirlState;
