import GameState from './GameState.ts';
import { alto, ancho } from './dimens.ts';

class MenuState extends Phaser.State {
  private navbar: Phaser.Rectangle;

  create() {
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
  }

  render() {
    this.game.debug.geom(this.navbar, '#0404B4');
  }

  playTheGame() {
    this.game.state.add('TheGame', new GameState());
    this.game.state.start('TheGame');
  }
}

export default MenuState;
