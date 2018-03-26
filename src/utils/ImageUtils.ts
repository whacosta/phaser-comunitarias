import { alto, ancho } from '../dimens.ts';

export function setBackground(game: Phaser.Game) {
  const image = game.add.image(0, 0, 'bg1');
  image.width = ancho;
  image.height = alto;
}
