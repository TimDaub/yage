'use strict';

import Box from './box';


export default class World {
  constructor(columns, rows, debug = false) {
    // initialize a multidimensional array as a data structure
    this.grid = new Array(rows);
    for(let i = 0; i < this.grid.length; i++) {

      this.grid[i] = new Array(columns);
      for(let j = 0; j < this.grid[i].length; j++) {
        this.grid[i][j] = new Box();
      }

    }

    this.columns = columns;
    this.rows = rows;
  }

  update() {
    const { height, width } = this.canvas;
    const boxHeight = height / this.rows;
    const boxWidth = width / this.columns;
  }

  render() {

  }
}