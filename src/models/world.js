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
        const leftNeighbor = row ? this.grid[col][row - 1] : null;
        const topNeighbor = col ? this.grid[col - 1][row] : null;

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
          console.log('leftNeighbor: <<<' + right + '>>>', 'topNeighbor: <<<' + bottom + '>>>', intersectedList);
          // if(intersectedList.length === 0) {
          //   console.log(leftNeighbor.spriteName, topNeighbor.spriteName);
          // }
          spriteName = pickRandomFromList(intersectedList) || 'gras';
        }

        const sprite = spriteMap[spriteName];
        const tile = new Tile(row, col, sprite.height, sprite.width, sprite.neighbors, sprite.sprite, spriteName);

        this.grid[col][row] = tile;
      }

    }
  }
}