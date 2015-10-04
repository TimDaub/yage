'use strict';

export default class GameCanvas {
  constructor(domNode, top = 0, left = 0, height = 0, width = 0) {
    this.domNode = domNode;
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;

    // when passing this, we can implement a method named `handleEvent`,
    // that handles it
    window.addEventListener('resize', this, false);

    // initially, trigger the event once canvas is initialized
    window.dispatchEvent(new Event('resize'));
  }

  handleEvent({ target: { innerHeight, innerWidth }}) {
    this.domNode.style.padding = '0 0 0 0';
    this.domNode.style.margin = '0 0 0 0';

    this.domNode.style.height = innerHeight + 'px';
    this.domNode.style.width = innerWidth + 'px';
  }
};