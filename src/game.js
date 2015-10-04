'use strict';

import GameCanvas from './models/game_canvas';


global.game = () => {
  let gameCanvas = new GameCanvas(document.getElementById('canvas'));
};