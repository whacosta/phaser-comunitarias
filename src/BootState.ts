import loadingImagePath from './assets/loading.png';

class BootState extends Phaser.State {
  preload() {
    this.game.load.image('loading', loadingImagePath);
  }

  create() {
    this.scale.pageAlignHorizontally = true;
    this.game.state.start('Preload');
  }
}

export default BootState;
