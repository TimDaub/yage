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
          neighbors: {
            top: [
              'gras',
              'grasDirtTop'
            ],
            right: [
              'gras',
              'grasDirtRight'
            ],
            bottom: [
              'gras',
              'grasDirtBottom'
            ],
            left: [
              'gras',
              'grasDirtLeft'
            ]
          }
        },
        grasDirtTop: {
          x: 1,
          y: 25,
          neighbors: {
            top: ['dirt'],
            right: [
              'grasDirtTopRight',
              'grasDirtTop'
            ],
            bottom: ['gras', 'grasDirtBottom'],
            left: [
              'grasDirtTopLeft',
              'grasDirtTop'
            ]
          }
        },
        grasDirtBottom: {
          x: 1,
          y: 27,
          neighbors: {
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
          neighbors: {
            top: [
              'grasDirtTopRight',
              'grasDirtRight'
            ],
            right: [
              'dirt',
              'grasDirtLeft'
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
          neighbors: {
            top: [
              'grasDirtLeft',
              'grasDirtTopLeft'
            ],
            right: [
              'gras',
              'grasDirtRight'
            ],
            bottom: [
              'gras',
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
          neighbors: {
            top: ['dirt'],
            right: ['dirt', 'grasDirtTopLeft', 'grasDirtLeft'],
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
          neighbors: {
            top: ['dirt'],
            right: [
              'gras',
              'grasDirtTop',
              'grasDirtTopRight'
            ],
            bottom: [
              'gras',
              'grasDirtLeft',
              'grasDirtBottomLeft'
            ],
            left: ['dirt', 'grasDirtTopRight', 'grasDirtRight']
          }
        },
        grasDirtBottomRight: {
          x: 2,
          y: 27,
          neighbors: {
            top: [
              'gras',
              'grasDirtRight',
              'grasDirtTopRight'
            ],
            right: [
              'dirt',
              'grasDirtBottomLeft',
              'grasDirtLeft'
            ],
            bottom: [
              'dirt'
            ],
            left: [
            'gras',
            'grasDirtBottom',
            'grasDirtBottomRight'
            ]
          }
        },
        grasDirtBottomLeft: {
          x: 0,
          y: 26,
          neighbors: {
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
              'dirt',
              'grasDirtBottomRight',
              'grasDirtRight'
            ]
          }
        },
        dirt: {
          x: 14,
          y: 25,
          neighbors: {
            top: [
              'dirt',
              'grasDirtBottomLeft',
              'grasDirtBottom',
              'grasDirtBottomRight'
            ],
            right: [
              'dirt',
              'grasDirtTopLeft',
              'grasDirtLeft',
              'grasDirtBottomLeft'
            ],
            bottom: [
              'dirt',
              'grasDirtTopLeft',
              'grasDirtTop',
              'grasDirtTopRight'
            ],
            left: [
              'dirt',
              'grasDirtTopRight',
              'grasDirtRight',
              'grasDirtBottomRight'
            ],
          }
        },
        pink: {
          x: 0,
          y: 0,
          neighbors: {
            top: [],
            right: [],
            bottom: [],
            left: []
          }
        }
      }
    }
  }
};