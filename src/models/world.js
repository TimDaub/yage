'use strict';

import GrasTile from './gras_tile';


export default class World {
  constructor(columns, rows, debug = false) {
    // initialize a multidimensional array as a data structure
    this.grid = new Array(rows);
    for(let i = 0; i < this.grid.length; i++) {

      this.grid[i] = new Array(columns);
      for(let j = 0; j < this.grid[i].length; j++) {
        this.grid[i][j] = new GrasTile(i, j);
      }

    }

    this.columns = columns;
    this.rows = rows;
  }

  update() {
  }

  render(ctx) {
    for(let i = 0; i < this.grid.length; i++) {
      for(let j = 0; j < this.grid[i].length; j++) {
        const TILE = this.grid[i][j];

        if(typeof TILE.render === 'function') {
          TILE.render(ctx);
        }
      }
    }
  }
}