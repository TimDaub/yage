'use strict';

export default class SpriteLoader {
  constructor(img, spriteMap) {
    this.spriteImg = new Image();
    this.spriteImg.src = img;

    this.spriteMap = spriteMap;
  }

  loadWithName(name) {
    let sprite;

    if(this.spriteMap && this.spriteMap[name]) {
      sprite = this.spriteMap[name]
    } else {
      throw new Error('"' + name + '" does not exist in sprite map.');
    }

    return [
      this.spriteImg,
      sprite.x + sprite.x * sprite.width,
      sprite.y + sprite.y * sprite.height,
      sprite.width,
      sprite.height,
      0,
      0,
      sprite.width,
      sprite.height
    ];
  }
}