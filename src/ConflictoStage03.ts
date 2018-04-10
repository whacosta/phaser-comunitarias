import { ancho, alto } from './dimens.ts';
import ConflictoStage04 from './ConflictoStage04.ts';

let handle1;
let handle2;
let line1;

let conflictos = {
  conflicto1: {
    imagen: 'conflicto1',
    causa: 'Los dos quieren jugar \ncon el mismo juguete',
    error: 'Son Hermanos',
  },
  conflicto2: {
    imagen: 'conflicto2',
    causa: 'El niño es el dueño del \njuguete y no quiere \ncompartir',
    error: 'Es el turno del niño',
  },
  conflicto3: {
    imagen: 'conflicto3',
    causa: 'No se escuchan y solo se \nenojan',
    error: 'Intercambian ideas',
  },
  conflicto4: {
    imagen: 'conflicto4',
    causa: 'No hablan sobre lo que \nles molesta',
    error: 'No hablan el mismo idioma',
  },
  conflicto5: {
    imagen: 'conflicto5',
    causa: 'Los niños molestan al \nniño diferente',
    error: 'El niño es extranjero',
  },
};

let contador = 1;
let conflicto;
let opcion1;
let opcion2;

class ConflictoStage03 extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    handle1 = this.game.add.sprite(ancho / 2, alto - 420, 'balls', 0);
    handle1.anchor.set(0.5);

    handle2 = this.game.add.sprite(ancho / 2, alto - 410, 'balls', 0);
    handle2.anchor.set(0.5);
    handle2.inputEnabled = true;
    handle2.input.enableDrag(true);

    line1 = new Phaser.Line(handle1.x, handle1.y, handle2.x, handle2.y);

    conflicto = new Phaser.Rectangle(ancho / 2 - 100, alto - 620, 200, 200);
    opcion1 = new Phaser.Rectangle(ancho / 2 - 220, 320, 200, 50);
    opcion2 = new Phaser.Rectangle(ancho / 2 + 20, 320, 200, 50);
  }

  update() {
    line1.fromSprite(handle1, handle2, false);
    if (this.game.input.mousePointer.isDown) {
      handle2.reset(this.game.input.x, this.game.input.y);
    }
  }

  render() {
    this.game.debug.geom(conflicto, '#82FA58');
    this.game.debug.geom(opcion1, '#CC2EFA');
    this.game.debug.geom(opcion2, '#5858FA');
    this.game.debug.geom(line1);
    this.game.debug.text('Selecciona La respuesta Correcta', 32, 50);
    this.game.debug.text('Creando Juego', 32, 550);
  }
}

export default ConflictoStage03;
