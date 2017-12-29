class OverState extends Phaser.State {
  init(score) {
    alert('You scored: ' + score);
  }
  create() {
    const gameOverTitle = this.game.add.sprite(160, 160, 'gameover');
    gameOverTitle.anchor.setTo(0.5, 0.5);
    const playButton = this.game.add.button(
      160,
      320,
      'play',
      this.playTheGame,
      this
    );
    playButton.anchor.setTo(0.5, 0.5);
  }
  playTheGame() {
    this.game.state.start('TheGame');
  }
}

export default OverState;
