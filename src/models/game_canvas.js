'use strict';

import World from './world';
import View from './view';


export default class GameCanvas {
  constructor(domNode, sprites) {
    this.domNode = domNode;
    this.sprites = sprites;
    this.ctx = domNode.getContext('2d');

    // canvas settings
    this.height = 0;
    this.width = 0;
    this.columns = 0;
    this.rows = 0;

    // init world
    this.world = null;
    this.view = null;

    // when passing `this`, we can implement a method named `handleEvent`
    // in this class that handles it
    window.addEventListener('resize', this, false);

    // initially, trigger the event once canvas is initialized
    window.dispatchEvent(new Event('resize'));

    // game loop
    window.now = null;
    window.dt = null;
    this.last = this.timestamp();

    // start render loop
    requestAnimationFrame(this.frame.bind(this));
  }

  // handles the window object's resize event
  handleEvent({ target: { innerHeight, innerWidth }}) {
    // the canvas element needs it's `attributes` set,
    // instead part of his `style` attribute, as the canvas otherwise
    // crops
    this.domNode.setAttribute('height', innerHeight);
    this.domNode.setAttribute('width', innerWidth);

    // also set as properties to this class
    this.height = innerHeight;
    this.width = innerWidth;
    this.columns = Math.ceil(innerHeight / this.sprites.spriteSize);
    this.rows = Math.ceil(innerWidth / this.sprites.spriteSize);

    if(!this.world) {
      this.world = new World(this.columns, this.rows, this.sprites);
      this.view = Object.assign(new View(this.columns, this.rows, this.world), { canvas: this });
    }
  }

  timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  frame() {
    this.now = this.timestamp();
    this.dt = (this.now - this.last) / 1000;
    this.update(this.dt);
    this.render(this.dt);
    this.last = this.now;
    requestAnimationFrame(this.frame.bind(this));
  }

  update() {
    if(this.view && typeof this.view.update === 'function') {
      this.view.update();
    }
  }

  render() {
    if(this.view && typeof this.view.render === 'function') {
      this.view.render(this.ctx);
    }
  }
}