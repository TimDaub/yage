'use strict';

import SPRITES from '../sprites';


export default class Tile {
  constructor(name, row, column) {
    this.row = row;
    this.column = column;
    this.spriteObj = SPRITES[name];
  }

  imgWithPos() {
    let { sprite } = this.spriteObj;
    sprite[5] = this.row * this.spriteObj.width;
    sprite[6] = this.column * this.spriteObj.height;
    return sprite;
  }
}