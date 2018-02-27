import ClothesState from './ClothesState.ts';
import boyPath from './assets/boy.png';
import girlPath from './assets/girl.png';

class BoyGirlState extends Phaser.State {
  preload() {
    this.game.load.image('boy', boyPath);
    this.game.load.image('girl', girlPath);
  }

  create() {
    this.game.add.button(80, 80, 'boy', this.choose(true));
    this.game.add.button(760, 80, 'girl', this.choose(false));
  }

  choose(isBoy: boolean) {
    return () => {
      this.game.state.add('Clothes', new ClothesState());
      this.game.state.start('Clothes');
    };
  }
}

export default BoyGirlState;
