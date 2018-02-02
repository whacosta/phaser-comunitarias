import GameState from './GameState.ts';
import { alto, ancho } from './dimens.ts';

class MenuState extends Phaser.State {
  private navbar: Phaser.Rectangle;

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

    //this.navbar = new Phaser.Rectangle(0, alto - 60, ancho, 60);
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
    //const btnAhorros = this.game.add.button( );
  }

  render() {
    //this.game.debug.geom(this.navbar, '#0404B4');
  }

  playTheGame() {
    this.game.state.start('BoyGirl');
  }

  btnAvatarAction() {
    console.log('Press Avatar');
  }

  btnChanchoAction() {
    console.log('Press chancho');
  }

  btnCofreAction() {
    console.log('Press cofre');
  }

  btnTiendaAction() {
    console.log('Press tienda');
  }

  btnChatAction() {
    console.log('Press chat');
  }
}

export default MenuState;
