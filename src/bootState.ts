import loadingImagePath from './assets/loading.png';
const bootState = function(game) {
  console.log('%cStarting my awesome game', 'color:white; background:red');
};

bootState.prototype = {
  preload: function() {
    this.game.load.image('loading', loadingImagePath);
  },
  create: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.game.state.start('Preload');
  },
};

export default bootState;
