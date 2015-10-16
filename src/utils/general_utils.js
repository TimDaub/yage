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