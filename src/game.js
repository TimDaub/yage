'use strict';

import GameCanvas from './models/canvas';


global.game = () => {
  let gameCanvas = new GameCanvas(document.getElementById('canvas'));
};