'use strict';

import SPRITES from '../sprites';


export default class Tile {
  constructor(row, column, height, width, neighbors, sprite) {
    this.row = row;
    this.column = column;
    this.height = height;
    this.width = width;
    this.neighbors = neighbors;
    this.sprite = sprite;
  }

  imgWithPos() {
    this.sprite[5] = this.row * this.width;
    this.sprite[6] = this.column * this.height;
    return this.sprite;
  }

  render(ctx) {
    ctx.drawImage(...this.imgWithPos());
  }
}