import gameState from './gameState.ts';
import { alto, ancho } from './dimens.ts';

const menuState = function(game) {
  let navbar;
};

menuState.prototype = {
  create: function() {
    const gameTitle = this.game.add.sprite(ancho / 2, 50, 'logo');
    gameTitle.anchor.setTo(0.5, 0.5);

    const menu = this.game.add.button(
      ancho / 2,
      alto / 2 + 80,
      'menu',
      this.playTheGame,
      this
    );
    menu.anchor.setTo(0.5, 0.5);

    this.navbar = new Phaser.Rectangle(0, alto - 50, ancho, 50);
  },

  render: function() {
    this.game.debug.geom(this.navbar, '#0404B4');
  },

  playTheGame: function() {
    this.game.state.add('TheGame', gameState);
    this.game.state.start('TheGame');
  },
};

export default menuState;
