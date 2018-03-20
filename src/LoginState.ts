import GameState from './GameState.ts';
import HtmlState from './HtmlState.ts';
import { alto, ancho } from './dimens.ts';
import backgroundPath from './assets/login_bg.png';
import childrenLogoPath from './assets/logo-children.png';
import loginHtmlString from './html/Login.html';
import loginCssString from './css/Login.css';
import { registerKeyboardInputListener } from './utils/KeyboardInput.ts';

class LoginState extends HtmlState {
  constructor() {
    super(loginHtmlString, loginCssString[0][1]);
  }

  private showLoginError(msg: string) {
    const errorText = document.getElementById('error-text');
    errorText.style.visibility = 'visible';
    errorText.innerText = msg;
  }

  private onLoginButtonClicked() {
    const codeInput = document.getElementById('code-input') as HTMLInputElement;
    if (codeInput.value.length) this.game.state.start('Boot');
    else this.showLoginError('Por favor ingresa tu código');
  }

  create() {
    super.create();

    const loginButton = document.getElementById('login-btn');
    loginButton.onclick = this.onLoginButtonClicked.bind(this);
  }
}

export default LoginState;
