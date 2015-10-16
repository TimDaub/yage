'use strict';

import Tile from './tile';
import { pickRandomFromList, intersectLists } from '../utils/general_utils';


export default class World {
  constructor(columns, rows, sprites) {
    this.columns = columns;
    this.rows = rows;

    const { spriteMap } = sprites;
    const spriteNames = Object.keys(spriteMap);

    // initialize a multidimensional array as a data structure
    this.grid = new Array(this.columns);
    for(let col = 0; col < this.columns; col++) {

      this.grid[col] = new Array(this.rows);
      for(let row = 0; row < this.rows; row++) {
        let spriteName;
        const topNeighbor = row ? this.grid[col][row - 1] : null;
        const leftNeighbor = col ? this.grid[col - 1][row] : null;

        if(!topNeighbor && !leftNeighbor) {
          spriteName = pickRandomFromList(spriteNames);
        } else if(!topNeighbor && leftNeighbor) {
          const { neighbors: { right } } = leftNeighbor;
          spriteName = pickRandomFromList(right);
        } else if(topNeighbor && !leftNeighbor) {
          const { neighbors: { bottom } } = topNeighbor;
          spriteName = pickRandomFromList(bottom);
        } else {
          const { neighbors: { right } } = leftNeighbor;
          const { neighbors: { bottom } } = topNeighbor;
          const intersectedList = intersectLists(right, bottom);
          spriteName = pickRandomFromList(intersectedList) || 'dirt';
        }

        const sprite = spriteMap[spriteName];
        const tile = new Tile(row, col, sprite.height, sprite.width, sprite.neighbors, sprite.sprite);
        console.log(spriteName);
        this.grid[col][row] = tile;
      }

    }
  }
}