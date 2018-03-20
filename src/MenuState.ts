import GameState from './GameState.ts';
import { alto, ancho } from './dimens.ts';

class MenuState extends Phaser.State {
  create() {
    const gameTitle = this.game.add.sprite(ancho / 2, 50, 'logo');
    gameTitle.anchor.setTo(0.5, 0.5);

    const menu = this.game.add.button(
      ancho / 2,
      alto / 2,
      'menu',
      this.playTheGame,
      this
    );
    menu.anchor.setTo(0.5, 0.5);
    menu.scale.setTo(0.9, 0.8);

    const btnAvatar = this.game.add.button(
      26,
      alto - 120,
      'avatar',
      this.btnAvatarAction,
      this
    );
    const btnChancho = this.game.add.button(
      235,
      alto - 120,
      'chancho',
      this.btnChanchoAction,
      this
    );
    const btnCofre = this.game.add.button(
      470,
      alto - 120,
      'cofre',
      this.btnCofreAction,
      this
    );
    const btnTienda = this.game.add.button(
      705,
      alto - 120,
      'tienda',
      this.btnTiendaAction,
      this
    );
    const btnChat = this.game.add.button(
      940,
      alto - 120,
      'chat',
      this.btnChatAction,
      this
    );
  }

  render() {}

  playTheGame() {
    this.game.state.start('BoyGirl');
  }

  btnAvatarAction() {}

  btnChanchoAction() {}

  btnCofreAction() {}

  btnTiendaAction() {}

  btnChatAction() {}
}

export default MenuState;
