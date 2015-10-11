'use strict';

export default class SpriteLoader {
  constructor(spriteObj) {
    this.spriteObj = spriteObj;

    if(this.spriteObj && this.spriteObj.img) {
      // load sprites from hd
      this.spriteImg = new Image();
      this.spriteImg.src = this.spriteObj.img;
    } else {
      throw new Error('SpriteObj needs to have a property "img"');
    }
  }

  loadWith(name, dx = 0, dy = 0) {
    let sprite;
    const { map } = this.spriteObj;

    if(map && map[name]) {
      sprite = map[name]
    } else {
      throw new Error('"' + name + '" does not exist in sprite map.');
    }

    return [
      this.spriteImg,
      sprite.x + sprite.x * sprite.width,
      sprite.y + sprite.y * sprite.height,
      sprite.width,
      sprite.height,
      dx * sprite.width,
      dy * sprite.height,
      sprite.width * 2,
      sprite.height * 2
    ];
  }
}