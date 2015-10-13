'use strict';

import GameCanvas from './models/game_canvas';

import Sprites from './sprites';

import World from './models/world';


global.game = () => {

  let gameCanvas = new GameCanvas(document.getElementById('canvas'));
  let world = new World(100, 100);

  gameCanvas.addEntity(world);
};