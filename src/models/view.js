'use strict';


export default class View {
  constructor(columns, rows, world) {
    this.columns = columns;
    this.rows = rows;
    this.world = world;

    this.renderCount = 0;
  }

  render(ctx) {
    const { grid } = this.world;

    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] && typeof grid[i][j].render === 'function') {
          grid[i][j].render(ctx);
        }
      }
    }
    this.renderCount++;
  }
}