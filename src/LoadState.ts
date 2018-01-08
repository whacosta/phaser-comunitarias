import MenuState from './MenuState.ts';

import numbersSpritesPath from './assets/numbers.png';

import childrenLogoPath from './assets/logo-children.png';

import menuImagePath from './assets/menu.png';
import playImagePath from './assets/play.png';

import higherImagePath from './assets/higher.png';
import lowerImagePath from './assets/lower.png';
import gameOverImagePath from './assets/gameover.png';

import avatarMenuNav from './assets/avatar.png';
import chanchoMenuNav from './assets/chancho.png';
import cofreMenuNav from './assets/cofre.png';
import tiendaMenuNav from './assets/tienda.png';
import chatMenuNav from './assets/msn.png';

class LoadState extends Phaser.State {
  preload() {
    const loadingBar = this.add.sprite(160, 240, 'loading');
    loadingBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(loadingBar);
    this.game.load.spritesheet('numbers', numbersSpritesPath, 100, 100);

    this.game.load.image('logo', childrenLogoPath);
    this.game.load.image('menu', menuImagePath);

    this.game.load.image('play', playImagePath);
    this.game.load.image('higher', higherImagePath);
    this.game.load.image('lower', lowerImagePath);
    this.game.load.image('gameover', gameOverImagePath);

    this.game.load.image('avatar', avatarMenuNav);
    this.game.load.image('chancho', chanchoMenuNav);
    this.game.load.image('cofre', cofreMenuNav);
    this.game.load.image('tienda', tiendaMenuNav);
    this.game.load.image('chat', chatMenuNav);
  }

  create() {
    this.game.stage.backgroundColor = '#E6E6E6';
    this.game.state.add('GameTitle', new MenuState());
    this.game.state.start('GameTitle');
  }
}

export default LoadState;
