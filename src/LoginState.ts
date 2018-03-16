import GameState from './GameState.ts';
import { alto, ancho } from './dimens.ts';
import backgroundPath from './assets/login_bg.png';
import childrenLogoPath from './assets/logo-children.png';
import { registerKeyboardInputListener } from './utils/KeyboardInput.ts';

class LoginState extends Phaser.State {
  preload() {
    this.scale.pageAlignHorizontally = true;
    this.game.load.image('login_bg', backgroundPath);
    this.game.load.image('children_logo', childrenLogoPath);
  }

  private drawText(loginBoxPos: Phaser.Point) {
    this.game.add.tileSprite(
      (ancho - 312) / 2,
      loginBoxPos.y + 20,
      312,
      86,
      'children_logo'
    );
    const caption = this.game.add.text(
      ancho / 2,
      loginBoxPos.y + 140,
      'Por favor ingresa tu codigo de acceso'
    );
    caption.anchor = new Phaser.Point(0.5, 0.5);
    const codeText = this.game.add.text(ancho / 2, loginBoxPos.y + 220, '', {});
    codeText.anchor = new Phaser.Point(0.5, 0.5);

    registerKeyboardInputListener(
      codeText,
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      (inputText: string) => {
        if (inputText === '12345') this.game.state.start('Boot');
      }
    );
  }

  private createLoginBox() {
    const loginBox = this.game.add.graphics();

    const loginBoxPos = new Phaser.Point(ancho * 3 / 16, alto * 3 / 16);
    loginBox.beginFill(0xffffff);
    loginBox.fillAlpha = 0.85;
    loginBox.drawRect(
      loginBoxPos.x,
      loginBoxPos.y,
      ancho * 10 / 16,
      alto * 10 / 16
    );
    loginBox.endFill();

    this.drawText(loginBoxPos);
  }

  create() {
    const bg = this.game.add.tileSprite(0, 0, ancho, alto, 'login_bg');
    this.createLoginBox();
  }
}

export default LoginState;
