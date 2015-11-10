'use strict';

import Tile from './tile';
import { generateRandomNumberInRangeOf, gen2DList } from '../utils/general_utils';


export default class World {
  constructor(columns, rows, sprites) {
    this.columns = columns;
    this.rows = rows;
    this.sprites = sprites;
    this.genBaseLayer();
    this.genSeed();
    this.growGras();
  }

  genBaseLayer() {
    // initialize a multidimensional array as a data structure
    this.grid = new Array(this.columns);
    for(let col = 0; col < this.columns; col++) {
      this.grid[col] = new Array(this.rows);
      for(let row = 0; row < this.rows; row++) {

        const sprite = this.sprites.spriteMap['dirt'];
        const tile = new Tile(row, col, sprite.height, sprite.width, sprite.neighbors, sprite.sprite, 'dirt');

        this.grid[col][row] = tile;
      }
    }
  }

  genSeed() {
    for(let col = 0; col < this.columns; col++) {
      for(let row = 0; row < this.rows; row++) {
        if(Math.random() > 0.75) {
          const sprite = this.sprites.spriteMap['gras'];
          const tile = new Tile(row, col, sprite.height, sprite.width, sprite.neighbors, sprite.sprite, 'gras');

          this.grid[col][row] = tile;
        }
      }
    }
  }

  growGras() {
    let mapToGrow = gen2DList(this.columns, this.rows);

    const sprite = this.sprites.spriteMap['gras'];

    for(let col = 0; col < this.columns; col++) {
      for(let row = 0; row < this.rows; row++) {
        const tile = this.grid[col][row];
        const grasTileArguments = [sprite.height, sprite.width, sprite.neighbors, sprite.sprite, 'gras'];

        if(tile.spriteName === 'gras') {
          row                                             ? mapToGrow[col][row - 1]     = new Tile(row - 1, col, ...grasTileArguments)     : null;
          col < this.columns - 1 && row                   ? mapToGrow[col + 1][row - 1] = new Tile(row - 1, col + 1, ...grasTileArguments) : null;
          col < this.columns - 1                          ? mapToGrow[col + 1][row]     = new Tile(row, col + 1, ...grasTileArguments)     : null;
          col < this.columns - 1 && row < this.rows - 1   ? mapToGrow[col + 1][row + 1] = new Tile(row + 1, col + 1, ...grasTileArguments) : null;
          row < this.rows - 1                             ? mapToGrow[col][row + 1]     = new Tile(row + 1, col, ...grasTileArguments)     : null;
          col && row < this.rows - 1                      ? mapToGrow[col - 1][row + 1] = new Tile(row + 1, col - 1, ...grasTileArguments) : null;
          col                                             ? mapToGrow[col - 1][row]     = new Tile(row, col - 1, ...grasTileArguments)     : null;
          col && row                                      ? mapToGrow[col - 1][row - 1] = new Tile(row - 1, col - 1, ...grasTileArguments) : null;
        }

        mapToGrow[col][row] = this.grid[col][row];
      }
    }
    this.grid = mapToGrow;
  }
}