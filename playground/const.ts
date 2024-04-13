const a = ['Elon Musk', 'Jeff Besoz', 'Sal Khan'] as const;

type A = typeof a;

type M = {
  [P in A[number]]: P
}

const arr = [];
const b = arr[0];

type First<T extends any[]> = T[0];

type a20 = [];
let n: First<a20>;
