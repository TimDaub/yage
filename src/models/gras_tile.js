'use strict';

import { SPRITES } from '../statics/game_constants';
import SpriteLoader from '../ctrls/sprite_loader';


export default class GrasTile {
  constructor(row, column) {
    this.row = row;
    this.column = column;

    this.sprite = new SpriteLoader(SPRITES.ROUGELIKECITY).loadWith('gras', this.row, this.column);
  }

  render(ctx) {
    console.log('grastile render');
    ctx.drawImage(...this.sprite);
  }
}