'use strict';


export function generateRandomNumberInRangeOf(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandomFromList(l) {
  const rnd = generateRandomNumberInRangeOf(0, l.length - 1);

  return l.length > 1 ? l[rnd] : l[0];
}

// From: http://stackoverflow.com/a/16227294
export function intersectLists(a, b) {
    let t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        if (b.indexOf(e) !== -1) return true;
    });
}

export function gen2DList(columns, rows) {
  let l = new Array(columns);
  for(let ol = 0; ol < l.length; ol++) {
    l[ol] = new Array(rows);
  }
  return l;
}

export function spiralNeighbors(matrix, x, y) {
  // That's how it works!
  //
  //   v----->
  //   x x x |
  // ^ x x x |
  // | x x x v
  // <--------
  //
  const neighborPositions = [
    [x, y - 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
    [x, y + 1],
    [x - 1, y + 1],
    [x - 1, y],
    [x - 1, y - 1],
  ];

  let neighbors = [];
  for(let pos of neighborPositions) {
    try {
      neighbors.push(matrix[pos[0]][pos[1]])
    } catch (e) {
      if (!(e instanceof TypeError)) {
        console.log(e);
      }
    }
  }

  return neighbors.filter((el) => el !== undefined);
}
