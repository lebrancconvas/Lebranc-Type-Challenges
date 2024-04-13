interface Character {
  name: string;
  level: number;
  atk: number;
};

interface Citizen {
  id: number;
  name: string;
};

type PersonUnion = Character | Citizen;

type PersonIntersection = Character & Citizen;

const person01: PersonUnion = {
  id: 1,
  name: 'Emma',
  atk: 200
};


const person02: PersonIntersection = {
  id: 1,
  name: 'Nolan',
  level: 10,
  atk: 1000
};

type Angle = 0 | 90 | 180 | 270 | 360;

type Prime = 2 | 3 | 5 | 7 | 11;

type AngleOrPrime = Angle | Prime;
type AngleAndPrime = Angle & Prime;


type A = {name: string} | {name: number};



