export const GAME_CONSTANTS = {
  spriteKit: 'rougelikecity',

  spriteKits: {
    rougelikecity: {
      img: '../../sprites/roguelikeCity_transparent.png',
      spriteSize: 16,
      spriteMap: {
        gras: {
          x: 0,
          y: 24,
          neightbors: {
            top: ['grasDirtTop'],
            right: ['grasDirtRight'],
            bottom: ['grasDirtBottom'],
            left: ['grasDirtLeft']
          }
        },
        grasDirtTop: {
          x: 1,
          y: 25,
          neightbors: {
            top: ['dirt'],
            right: [
              'grasDirtTopRight',
              'grasDirtTop'
            ],
            bottom: ['gras'],
            left: [
              'grasDirtTopLeft',
              'grasDirtTop'
            ]
          }
        },
        grasDirtBottom: {
          x: 1,
          y: 27,
          neightbors: {
            top: ['gras'],
            right: [
              'grasDirtBottomRight',
              'grasDirtBottom'
            ],
            bottom: ['dirt'],
            left: [
              'grasDirtBottomLeft',
              'grasDirtBottom'
            ]
          }
        },
        grasDirtRight: {
          x: 2,
          y: 26,
          neightbors: {
            top: [
              'grasDirtTopRight',
              'grasDirtRight'
            ],
            right: [
              'dirt'
            ],
            bottom: [
              'grasDirtBottomRight',
              'grasDirtRight'
            ],
            left: [
              'gras'
            ]
          }
        },
        grasDirtLeft: {
          x: 0,
          y: 26,
          neightbors: {
            top: [
              'grasDirtLeft',
              'grasDirtTopLeft'
            ],
            right: [
              'gras',
              'grasDirtRight'
            ],
            bottom: [
              'grasDirtLeft',
              'grasDirtBottomLeft'
            ],
            left: [
              'dirt'
            ]
          }
        },
        grasDirtTopRight: {
          x: 2,
          y: 25,
          neightbors: {
            top: ['dirt'],
            right: ['dirt'],
            bottom: [
              'grasDirtRight',
              'grasDirtBottomRight'
            ],
            left: [
              'grasDirtTop',
              'grasDirtTopRight'
            ]
          }
        },
        grasDirtTopLeft: {
          x: 0,
          y: 25,
          neightbors: {
            top: ['dirt'],
            right: [
              'grasDirtTop',
              'grasDirtTopLeft'
            ],
            bottom: [
              'grasDirtLeft',
              'grasDirtBottomLeft'
            ],
            left: ['dirt']
          }
        },
        grasDirtBottomRight: {
          x: 2,
          y: 27,
          neightbors: {
            top: [
              'grasDirtRight',
              'grasDirtTopRight'
            ],
            right: [
              'dirt'
            ],
            bottom: [
              'dirt'
            ],
            left: [
            'grasDirtBottom',
            'grasDirtBottomRight'
            ]
          }
        },
        grasDirtBottomLeft: {
          x: 0,
          y: 27,
          neightbors: {
            top: [
              'grasDirtLeft',
              'grasDirtTopLeft'
            ],
            right: [
              'grasDirtBottom',
              'grasDirtBottomRight'
            ],
            bottom: [
              'dirt'
            ],
            left: [
              'dirt'
            ]
          }
        },
        dirt: {
          x: 12,
          y: 25,
          neightbors: {
            top: [
              'grasDirtBottomLeft',
              'grasDirtBottom',
              'grasDirtBottomRight'
            ],
            right: [
              'grasDirtTopLeft',
              'grasDirtLeft',
              'grasDirtBottomLeft'
            ],
            bottom: [
              'grasDirtTopLeft',
              'grasDirtTop',
              'grasDirtTopRight'
            ],
            left: [
              'grasDirtTopRight',
              'grasDirtRight',
              'grasDirtBottomRight'
            ],
          }
        }
      }
    }
  }
};