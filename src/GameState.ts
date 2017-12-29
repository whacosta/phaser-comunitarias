import OverState from './OverState.ts';

class GameState extends Phaser.State {
  private spriteNumber: Phaser.Sprite;
  private num: string | number;
  private workingButtons: boolean;
  private higher: boolean;
  private score: number;

  create() {
    this.workingButtons = true;
    this.score = 0;
    this.num = Math.floor(Math.random() * 10);

    this.spriteNumber = this.game.add.sprite(160, 240, 'numbers');
    this.spriteNumber.anchor.setTo(0.5, 0.5);
    this.spriteNumber.frame = this.num;
    const higherButton = this.game.add.button(
      160,
      100,
      'higher',
      this.clickedHigher,
      this
    );
    higherButton.anchor.setTo(0.5, 0.5);
    const lowerButton = this.game.add.button(
      160,
      380,
      'lower',
      this.clickedLower,
      this
    );
    lowerButton.anchor.setTo(0.5, 0.5);
  }

  clickedHigher() {
    this.higher = true;
    this.tweenNumber(true);
  }
  clickedLower() {
    this.higher = false;
    this.tweenNumber(false);
  }
  tweenNumber(higher) {
    if (this.workingButtons) {
      this.workingButtons = false;
      const exitTween = this.game.add.tween(this.spriteNumber);
      exitTween.to({ x: 420 }, 500);
      exitTween.onComplete.add(this.exitNumber, this);
      exitTween.start();
    }
  }
  exitNumber() {
    this.spriteNumber.x = -180;
    this.spriteNumber.frame = Math.floor(Math.random() * 10);
    const enterTween = this.game.add.tween(this.spriteNumber);
    enterTween.to({ x: 160 }, 500);
    enterTween.onComplete.add(this.enterNumber, this);
    enterTween.start();
  }
  enterNumber() {
    this.workingButtons = true;
    if (
      (this.higher && this.spriteNumber.frame < this.num) ||
      (!this.higher && this.spriteNumber.frame > this.num)
    ) {
      this.game.state.add('GameOver', new OverState());
      this.game.state.start('GameOver', true, false, this.score);
    } else {
      this.score++;
      this.num = this.spriteNumber.frame;
    }
  }
}

export default GameState;
