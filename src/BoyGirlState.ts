import ClothesState from './ClothesState.ts';
import EligeActividad from './EligeActividad.ts';
import boyPath from './assets/boy.png';
import girlPath from './assets/girl.png';
import { alto, ancho } from './dimens.ts';

class BoyGirlState extends Phaser.State {
  preload() {
    this.game.load.image('boy', boyPath);
    this.game.load.image('girl', girlPath);
  }

  create() {
    this.game.add.button(
      ancho * 2 / 10,
      alto * 1 / 4,
      'boy',
      this.choose(true)
    );
    this.game.add.button(
      ancho * 6 / 10,
      alto * 1 / 4,
      'girl',
      this.choose(false)
    );
  }

  choose(isBoy: boolean) {
    return () => {
      //this.game.state.add('Clothes', new ClothesState());
      this.game.state.add('EligeActividad', new EligeActividad());
      //this.game.state.start('Clothes');
      this.game.state.start('EligeActividad');
    };
  }
}

export default BoyGirlState;
