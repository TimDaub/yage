'use strict';

export default class GameCanvas {
  constructor(domNode) {
    this.domNode = domNode;
    this.ctx = domNode.getContext('2d');

    // canvas settings
    this.height = 0;
    this.width = 0;

    // when passing `this`, we can implement a method named `handleEvent`,
    // that handles it
    window.addEventListener('resize', this, false);

    // initially, trigger the event once canvas is initialized
    window.dispatchEvent(new Event('resize'));

    // game data
    this.entities = [];

    // game loop
    window.now = null;
    window.dt = null;
    this.last = this.timestamp();

    // start render loop
    requestAnimationFrame(this.frame.bind(this));
  }

  addEntity(entity) {
    entity = Object.assign(entity, { canvas: this });
    this.entities.push(entity);
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
    for(let i = 0; i < this.entities.length; i++) {
      let entity = this.entities[0];

      if(typeof entity.update === 'function') {
        entity.update();
      }
    }
  }

  render() {
    for(let i = 0; i < this.entities.length; i++) {
      let entity = this.entities[0];

      if(typeof entity.render === 'function') {
        entity.render(this.ctx);
      }
    }
  }
}