'use strict';

import SPRITES from '../sprites';


export default class Tile {
  constructor(name, row, column) {
    this.row = row;
    this.column = column;
    this.spriteMap = SPRITES.spriteMap[name];
  }

  imgWithPos() {
    let { sprite } = this.spriteMap;
    sprite[5] = this.row * this.spriteMap.width;
    sprite[6] = this.column * this.spriteMap.height;
    return sprite;
  }
}