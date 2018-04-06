import GameState from './GameState.ts';
import { alto, ancho } from './dimens.ts';
interface ButtonData {
  resourceName: string;
  onClick?: () => void;
}

class MenuState extends Phaser.State {
  private addTopIcon(index: number, resourceName: string) {
    const icon = this.game.add.sprite(
      ancho * index / 6,
      alto * 8 / 40,
      resourceName
    );
    icon.anchor.setTo(0.5, 0.5);
    icon.height = alto * 15 / 160;
    icon.width = icon.height * 1.0724;
  }

  private addBottomButton(
    index: number,
    resourceName: string,
    onClick?: () => void
  ) {
    const icon = this.game.add.button(
      ancho * index / 6,
      alto * 9 / 10,
      resourceName,
      onClick
    );
    icon.anchor.setTo(0.5, 0.5);
    icon.height = alto * 15 / 160;
    icon.width = icon.height;
  }

  private addSprite(params: {
    resourceName: string;
    posX: number;
    posY: number;
    height: number;
    widthToHeight: number;
  }) {
    const icon = this.game.add.sprite(
      params.posX,
      params.posY,
      params.resourceName
    );
    icon.anchor.setTo(0.5, 0.5);
    icon.height = params.height;
    icon.width = icon.height * params.widthToHeight;
  }

  private addButtonColumn(columnIndex: number, buttons: ButtonData[]) {
    const buttonHeight = alto * 4 / 32;
    const widthToHeight = 1881 / 1304;
    const firstYPos = alto * 13 / 40;
    buttons.forEach((buttonData, rowIndex) => {
      const button = this.game.add.button(
        ancho * columnIndex / 6,
        firstYPos + rowIndex * buttonHeight,
        buttonData.resourceName,
        buttonData.onClick
      );
      button.anchor.setTo(0.5, 0.5);
      button.height = buttonHeight;
      button.width = button.height * widthToHeight;
    });
  }

  private startGame() {
    this.game.state.start('Casas');
  }

  create() {
    this.addSprite({
      resourceName: 'logo',
      posX: ancho / 2,
      posY: alto / 10,
      height: alto * 15 / 160,
      widthToHeight: 3.805,
    });

    this.addTopIcon(1, 'cepillo_icon');
    this.addTopIcon(2, 'doctor_icon');
    this.addTopIcon(3, 'libro_icon');
    this.addTopIcon(4, 'mujer_hombre_icon');
    this.addTopIcon(5, 'manos_icon');

    this.addButtonColumn(1, [
      { resourceName: 'hogares1_button' },
      { resourceName: 'hogares1_button' },
      { resourceName: 'salud_oral_button' },
    ]);

    this.addButtonColumn(2, [
      { resourceName: 'serv_medicos_button' },
      { resourceName: 'serv_odont_button' },
      { resourceName: 'rehab_nutr_button' },
    ]);

    this.addButtonColumn(3, [
      { resourceName: 'refuerzo_ninos_button' },
      { resourceName: 'refuerzo_jovenes_button' },
      { resourceName: 'curso_comp_button' },
      { resourceName: 'centro_descu_button' },
    ]);

    this.addButtonColumn(4, [
      { resourceName: 'aflatoun_button', onClick: this.startGame.bind(this) },
      { resourceName: 'a_jugar_button' },
      { resourceName: 'consejo_jovenes_button' },
      { resourceName: 'empoderarte_button' },
    ]);

    this.addButtonColumn(5, [
      { resourceName: 'hacia_empleo_button' },
      { resourceName: 'construyendo_button' },
      { resourceName: 'becas_button' },
      { resourceName: 'emprendiendo_button' },
    ]);

    this.addBottomButton(1, 'avatar');
    this.addBottomButton(2, 'chancho');
    this.addBottomButton(3, 'cofre');
    this.addBottomButton(4, 'tienda');
    this.addBottomButton(5, 'chat', this.openChat.bind(this));
  }

  render() {}

  playTheGame() {
    this.game.state.start('BoyGirl');
  }

  openChat() {
    this.game.state.start('Chat');
  }

  btnAvatarAction() {}

  btnChanchoAction() {}

  btnCofreAction() {}

  btnTiendaAction() {}

  btnChatAction() {}
}

export default MenuState;
