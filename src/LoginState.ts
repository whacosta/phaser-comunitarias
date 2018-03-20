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
}

export default LoginState;
