'use strict';

import GameCanvas from './models/game_canvas';

import World from './models/world';


global.game = () => {
  let gameCanvas = new GameCanvas(document.getElementById('canvas'));
  let world = new World(50, 50, true);

  gameCanvas.addEntity(world);
};