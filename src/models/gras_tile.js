'use strict';

import Tile from './tile';


export default class GrasTile extends Tile {
  constructor(row, column) {
    super('gras', row, column);
  }

  render(ctx) {
    ctx.drawImage(...this.imgWithPos());
  }
}