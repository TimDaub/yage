'use strict';

import SpriteLoader from './ctrls/sprite_loader';

import { GAME_CONSTANTS } from './statics/game_constants';


export default (function() {
  let spriteKit = GAME_CONSTANTS.spriteKits[GAME_CONSTANTS.spriteKit]
  const { img, spriteMap, spriteSize } = spriteKit;
  const spriteLoader = new SpriteLoader(img, spriteMap);

  Object
    .keys(spriteMap)
    .forEach((spriteName) => {
      let sprite = spriteMap[spriteName];

      sprite.width = spriteSize;
      sprite.height = spriteSize;
      sprite.sprite = spriteLoader.loadWithName('gras');
      
      spriteMap[spriteName] = sprite;
    });

    spriteKit.spriteMap = spriteMap;
    return spriteKit;
})();