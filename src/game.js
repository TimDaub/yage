'use strict';

import GameCanvas from './models/game_canvas';

import SPRITES from './sprites';


global.game = () => {
  let gameCanvas = new GameCanvas(document.getElementById('canvas'), SPRITES);
};