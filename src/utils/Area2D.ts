interface Area2D {
  readonly startX: number;
  readonly startY: number;
  readonly width: number;
  readonly height: number;
}

export function visualizeAreas(game: Phaser.Game, areas: Area2D[]) {
  const graphics = game.add.graphics(0, 0);
  graphics.lineStyle(2, 0x0000ff, 1);

  areas.forEach(area2D =>
    graphics.drawRect(area2D.startX, area2D.startY, area2D.width, area2D.height)
  );
}

export default Area2D;
