const gameState = function(game) {
  let spriteNumber = null;
  let num = 0;
  let workingButtons = true;
  let higher = true;
  let score = 0;
};

gameState.prototype = {
  create: function() {
    this.this.num = Math.floor(Math.random() * 10);
    this.this.spriteNumber = this.game.add.sprite(160, 240, 'numbers');
    this.this.spriteNumber.anchor.setTo(0.5, 0.5);
    this.this.spriteNumber.frame = this.num;
    this.higherButton = this.game.add.button(
      160,
      100,
      'higher',
      this.clickedHigher,
      this
    );
    this.higherButton.anchor.setTo(0.5, 0.5);
    const lowerButton = this.game.add.button(
      160,
      380,
      'lower',
      this.clickedLower,
      this
    );
    lowerButton.anchor.setTo(0.5, 0.5);
  },
  clickedHigher: function() {
    this.higher = true;
    this.tweenNumber(true);
  },
  clickedLower: function() {
    this.higher = false;
    this.tweenNumber(false);
  },
  tweenNumber: function(higher) {
    if (this.workingButtons) {
      this.workingButtons = false;
      const exitTween = this.game.add.tween(this.spriteNumber);
      exitTween.to({ x: 420 }, 500);
      exitTween.onComplete.add(this.exitNumber, this);
      exitTween.start();
    }
  },
  exitNumber: function() {
    this.this.spriteNumber.x = -180;
    this.this.spriteNumber.frame = Math.floor(Math.random() * 10);
    const enterTween = this.game.add.tween(this.spriteNumber);
    enterTween.to({ x: 160 }, 500);
    enterTween.onComplete.add(this.enterNumber, this);
    enterTween.start();
  },
  enterNumber: function() {
    this.workingButtons = true;
    if (
      (this.higher && this.spriteNumber.frame < this.num) ||
      (!this.higher && this.spriteNumber.frame > this.num)
    ) {
      this.game.state.add('GameOver', this.overState);
      this.game.state.start('GameOver', true, false, this.score);
    } else {
      this.score++;
      this.num = this.spriteNumber.frame;
    }
  },
};

export default gameState;
