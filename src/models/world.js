'use strict';

import Tile from './tile';
import { generateRandomNumberInRangeOf, gen2DList, spiralNeighbors } from '../utils/general_utils';


export default class World {
  constructor(columns, rows, sprites) {
    this.columns = columns;
    this.rows = rows;
    this.sprites = sprites;
    this.genBaseLayer();
    this.genSeed();
    this.growGras();
    this.antiAliasSingleSpots();
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
        if(Math.random() > 0.80) {
          const sprite = this.sprites.spriteMap['gras'];
          const tile = new Tile(row, col, sprite.height, sprite.width, sprite.neighbors, sprite.sprite, 'gras');

          this.grid[col][row] = tile;
        }
      }
    }
  }

  growGras() {
    const sprite = this.sprites.spriteMap['gras'];

    let mapToGrow = gen2DList(this.columns, this.rows);
    for(let col = 0; col < this.columns; col++) {
      for(let row = 0; row < this.rows; row++) {
        const tile = this.grid[col][row];
        const grasTileArguments = [sprite.height, sprite.width, sprite.neighbors, sprite.sprite, 'gras'];

        if(tile.spriteName === 'gras') {
          let neighbors = spiralNeighbors(this.grid, col, row);
          for(let neighbor of neighbors) {
            mapToGrow[neighbor.column][neighbor.row] = new Tile(neighbor.row, neighbor.column, ...grasTileArguments);
          }
        }

        mapToGrow[col][row] = this.grid[col][row];
      }
    }
    this.grid = mapToGrow;
  }

  antiAliasSingleSpots() {
    for(let col = 0; col < this.columns; col++) {
      for(let row = 0; row < this.rows; row++) {

      }
    }
  }
}
